import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Volume2, VolumeX, Delete } from 'lucide-react';
import { KEYBOARD_LAYOUT, KEY_LABELS, LIBRARIES, parsePinyinToShuangpin } from './lib/ziranma';

const SIDEBAR_ITEMS = [
    { id: 'random', label: '随机模式' },
    { id: 'initial', label: '声母模式' },
    { id: 'final', label: '韵母模式' },
];

export default function App() {
    const [mode, setMode] = useState<'random' | 'initial' | 'final'>('random');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [stats, setStats] = useState({ correct: 0, total: 0, startTime: null as number | null, wpm: 0 });
    const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);
    const [history, setHistory] = useState<string[]>([]);
    const [volume, setVolume] = useState(0.5);
    const isProcessing = useRef(false);
    const audioCtx = useRef<AudioContext | null>(null);

    const initAudio = useCallback(() => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioCtx.current.state === 'suspended') {
            audioCtx.current.resume();
        }
    }, []);

    const playSound = useCallback((type: 'click' | 'error' | 'success', vol: number) => {
        if (!audioCtx.current || vol === 0) return;
        const ctx = audioCtx.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(vol * 0.5, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } else if (type === 'error') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            gain.gain.setValueAtTime(vol * 0.5, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } else if (type === 'success') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(vol * 0.3, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        }
    }, []);

    const currentLibrary = LIBRARIES[mode] || LIBRARIES['random'];
    const currentWord = currentLibrary[currentIndex % currentLibrary.length];
    
    const targetShuangpins = useMemo(() => {
        const pinyins = Array.isArray(currentWord.pinyin) ? currentWord.pinyin : [currentWord.pinyin];
        return pinyins.map(p => ({ pinyin: p, code: parsePinyinToShuangpin(p) }));
    }, [currentWord]);

    const handleModeChange = (newMode: any) => {
        setMode(newMode);
        setCurrentIndex(Math.floor(Math.random() * (LIBRARIES[newMode]?.length || LIBRARIES['random'].length)));
        setUserInput('');
        setFeedback(null);
        setHistory([]);
        isProcessing.current = false;
        setStats({ correct: 0, total: 0, startTime: null, wpm: 0 });
    };

    const nextWord = useCallback(() => {
        setHistory(prev => [...prev, currentWord.char].slice(-3));
        setUserInput(''); setFeedback(null); isProcessing.current = false;
        setCurrentIndex(prev => {
            let next; do { next = Math.floor(Math.random() * currentLibrary.length); } while (next === prev);
            return next;
        });
    }, [currentLibrary.length, currentWord.char]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        initAudio();
        if (e.key === 'Backspace') {
            playSound('click', volume);
            if (feedback === 'error') { setFeedback(null); setUserInput(''); isProcessing.current = false; }
            else { setUserInput(p => p.slice(0, -1)); }
            return;
        }
        if (isProcessing.current) return;
        const key = e.key.toLowerCase();
        if (!/^[a-z;]$/.test(key)) return;
        if (!stats.startTime) setStats(p => ({ ...p, startTime: Date.now() }));
        const newInput = userInput + key;
        setUserInput(newInput);
        if (newInput.length === 2) {
            isProcessing.current = true;
            if (targetShuangpins.some(t => t.code === newInput)) {
                playSound('success', volume);
                setStats(p => ({ ...p, correct: p.correct + 1, total: p.total + 1 }));
                setFeedback('success');
                setTimeout(nextWord, 150);
            } else {
                playSound('error', volume);
                setStats(p => ({ ...p, total: p.total + 1 }));
                setFeedback('error');
                setTimeout(() => { if (isProcessing.current) { setUserInput(''); setFeedback(null); isProcessing.current = false; } }, 400);
            }
        } else {
            playSound('click', volume);
        }
    }, [userInput, targetShuangpins, stats.startTime, nextWord, feedback, volume, initAudio, playSound]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (stats.startTime && stats.correct > 0) {
            const timer = setInterval(() => {
                const seconds = (Date.now() - stats.startTime!) / 1000;
                if (seconds < 1) return;
                setStats(p => ({ ...p, wpm: Math.round((p.correct / seconds) * 60) }));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [stats.startTime, stats.correct]);

    const renderKeyLabel = (key: string) => {
        if (key === 'U') return 'sh / u';
        if (key === 'I') return 'ch / i';
        if (key === 'V') return 'zh / ui v';
        return KEY_LABELS[key] || '';
    };

    return (
        <div className="app-container">
            {/* Watermarks */}
            <div className="absolute left-8 bottom-4 pointer-events-none flex flex-col items-start opacity-[0.03] z-0">
                <div className="text-[120px] font-sans font-black leading-none tracking-widest">自然码</div>
                <div className="text-[100px] font-sans font-black leading-none mt-2">[ZIRANMA]</div>
            </div>

            {/* Sidebar */}
            <div className="w-32 flex flex-col py-8 z-10 shrink-0 h-full border-r border-gray-50 bg-white/50">
                <div className="flex-1 flex flex-col space-y-3 px-3">
                    {SIDEBAR_ITEMS.map(item => (
                        <div 
                            key={item.id}
                            onClick={() => handleModeChange(item.id)} 
                            className={`px-4 py-3 text-sm font-sans cursor-pointer transition-colors text-center border rounded-sm ${mode === item.id ? 'bg-[#a52a2a] text-white border-[#a52a2a]' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'}`}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                
                {/* Volume Control */}
                <div className="px-4 py-4 flex flex-col items-center justify-center mb-8 pointer-events-auto">
                    <button 
                        onClick={() => {
                            initAudio();
                            const newVol = volume === 0 ? 0.5 : 0;
                            setVolume(newVol);
                            if (newVol > 0) playSound('click', newVol);
                        }}
                        className="text-gray-300 hover:text-gray-500 transition-colors"
                    >
                        {volume === 0 ? <VolumeX size={28} /> : <Volume2 size={28} />}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative py-12 overflow-hidden">
                
                {/* Top Right: Word Display */}
                <div className="absolute top-12 right-12 z-20 flex items-center">
                    <div className="flex space-x-6 mr-8 text-[60px] font-serif text-gray-300">
                        {history.map((char, idx) => (
                            <span key={idx} className={idx === 0 && history.length > 1 ? 'opacity-40' : 'opacity-70'}>{char}</span>
                        ))}
                    </div>
                    <div className="w-28 h-28 mizige flex flex-col items-center justify-center relative bg-white">
                        <span className="absolute top-2 text-sm text-gray-700 font-sans font-bold tracking-widest uppercase">
                            {Array.isArray(currentWord.pinyin) ? currentWord.pinyin[0] : currentWord.pinyin}
                        </span>
                        <span className="text-[64px] font-serif text-black mt-4">{currentWord.char}</span>
                    </div>
                </div>

                {/* Center: Input Area */}
                <div className="flex-1 flex flex-col items-center justify-center mt-16">
                    <div className="flex flex-col items-center h-24 justify-end mb-12">
                        <div className="flex space-x-2 text-4xl font-sans font-bold uppercase h-12 mb-2">
                            <span className={feedback === 'error' ? 'text-red-500 animate-shake' : ''}>{userInput[0] || ''}</span>
                            <span className={feedback === 'error' ? 'text-red-500 animate-shake' : ''}>{userInput[1] || ''}</span>
                        </div>
                        <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* Keyboard */}
                    <div className="flex flex-col space-y-3 w-full max-w-[900px] px-4 z-10">
                        {KEYBOARD_LAYOUT.map((row, rIdx) => (
                            <div key={rIdx} className={`flex justify-center space-x-3 ${rIdx === 1 ? 'ml-12' : rIdx === 2 ? 'ml-24' : ''}`}>
                                {row.map(key => {
                                    const isInitKey = userInput.length === 0 && targetShuangpins.some(t => t.code[0].toUpperCase() === key);
                                    const isFinalKey = userInput.length === 1 && targetShuangpins.some(t => t.code[1].toUpperCase() === key);
                                    const isDel = key === 'DEL';
                                    const isActive = isInitKey || isFinalKey;
                                    
                                    if (isDel) {
                                        return (
                                            <div key={key} className="relative w-[9rem] h-[5rem] rounded-xl border border-gray-100 bg-white flex flex-col items-center justify-center shadow-sm">
                                                <Delete size={20} strokeWidth={2} className="text-gray-800 mb-1.5" />
                                                <div className="text-[15px] font-mono font-bold text-gray-900 leading-none mb-1.5 tracking-wide">
                                                    {stats.total === 0 ? '0.00' : ((stats.correct / stats.total) * 100).toFixed(2)} %
                                                </div>
                                                <div className="text-xs font-sans text-gray-500 leading-none">
                                                    <span className="font-mono">{stats.wpm.toFixed(2)}</span> 字每分
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={key} className={`relative w-[5.5rem] h-[5rem] rounded-xl border transition-all duration-150 ${isActive ? 'border-red-400 bg-white shadow-sm' : 'border-gray-100 bg-white'}`}>
                                            <span className={`absolute top-3 left-4 text-xl font-sans font-black ${isActive ? 'text-red-500' : 'text-gray-800'}`}>
                                                {key}
                                            </span>
                                            <span className={`absolute bottom-3 left-4 text-[11px] font-sans font-bold ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                                                {renderKeyLabel(key)}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


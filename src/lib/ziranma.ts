export const ZIRANMA_CONFIG = {
    initials: { 'sh': 'u', 'ch': 'i', 'zh': 'v' } as Record<string, string>,
    finals: {
        'iu': 'q', 'ia': 'w', 'ua': 'w', 'e': 'e', 'uan': 'r', 'er': 'r',
        'ue': 't', 've': 't', 'ing': 'y', 'uai': 'y', 'u': 'u', 'i': 'i',
        'o': 'o', 'uo': 'o', 'un': 'p', 'a': 'a', 'iong': 's', 'ong': 's',
        'iang': 'd', 'uang': 'd', 'en': 'f', 'eng': 'g', 'ang': 'h', 'an': 'j',
        'ao': 'k', 'ai': 'l', 'ei': 'z', 'ie': 'x', 'iao': 'c', 'ui': 'v',
        'v': 'v', 'ou': 'b', 'in': 'n', 'ian': 'm'
    } as Record<string, string>
};

export const KEYBOARD_LAYOUT = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
];

export const KEY_LABELS: Record<string, string> = {
    'Q': 'iu', 'W': 'ia ua', 'E': 'e', 'R': 'uan', 'T': 'ue ve', 'Y': 'ing uai', 'U': 'sh / u', 'I': 'ch / i', 'O': 'uo o', 'P': 'un',
    'A': 'a', 'S': '(i)ong', 'D': '(i/u)ang', 'F': 'en', 'G': 'eng', 'H': 'ang', 'J': 'an', 'K': 'ao', 'L': 'ai',
    'Z': 'ei', 'X': 'ie', 'C': 'iao', 'V': 'zh / ui v', 'B': 'ou', 'N': 'in', 'M': 'ian'
};

export const BASE_LIBRARY = [
    { char: '侍', pinyin: 'shi' }, { char: '穿', pinyin: 'chuan' }, { char: '馋', pinyin: 'chan' },
    { char: '爱', pinyin: 'ai' }, { char: '双', pinyin: 'shuang' }, { char: '拼', pinyin: 'pin' }, 
    { char: '自', pinyin: 'zi' }, { char: '然', pinyin: 'ran' }, { char: '码', pinyin: 'ma' }, 
    { char: '练', pinyin: 'lian' }, { char: '天', pinyin: 'tian' }, { char: '地', pinyin: 'di' }, 
    { char: '玄', pinyin: 'xuan' }, { char: '黄', pinyin: 'huang' }, { char: '宇', pinyin: 'yu' }, 
    { char: '宙', pinyin: 'zhou' }, { char: '洪', pinyin: 'hong' }, { char: '荒', pinyin: 'huang' },
    { char: '日', pinyin: 'ri' }, { char: '月', pinyin: 'yue' }, { char: '盈', pinyin: 'ying' }, 
    { char: '昃', pinyin: 'ze' }, { char: '辰', pinyin: 'chen' }, { char: '宿', pinyin: 'xiu' }, 
    { char: '列', pinyin: 'lie' }, { char: '张', pinyin: 'zhang' }, { char: '寒', pinyin: 'han' }, 
    { char: '来', pinyin: 'lai' }, { char: '暑', pinyin: 'shu' }, { char: '往', pinyin: 'wang' },
    { char: '秋', pinyin: 'qiu' }, { char: '收', pinyin: 'shou' }, { char: '冬', pinyin: 'dong' }, 
    { char: '藏', pinyin: 'cang' }, { char: '闰', pinyin: 'run' }, { char: '余', pinyin: 'yu' }, 
    { char: '成', pinyin: 'cheng' }, { char: '岁', pinyin: 'sui' }, { char: '律', pinyin: 'lv' }, 
    { char: '吕', pinyin: 'lv' }, { char: '调', pinyin: 'diao' }, { char: '阳', pinyin: 'yang' },
    { char: '云', pinyin: 'yun' }, { char: '腾', pinyin: 'teng' }, { char: '致', pinyin: 'zhi' }, 
    { char: '雨', pinyin: 'yu' }, { char: '露', pinyin: 'lu' }, { char: '结', pinyin: 'jie' }, 
    { char: '为', pinyin: 'wei' }, { char: '霜', pinyin: 'shuang' }, { char: '金', pinyin: 'jin' }, 
    { char: '生', pinyin: 'sheng' }, { char: '丽', pinyin: 'li' }, { char: '水', pinyin: 'shui' },
    { char: '玉', pinyin: 'yu' }, { char: '出', pinyin: 'chu' }, { char: '昆', pinyin: 'kun' }, 
    { char: '冈', pinyin: 'gang' }, { char: '剑', pinyin: 'jian' }, { char: '号', pinyin: 'hao' }, 
    { char: '巨', pinyin: 'ju' }, { char: '阙', pinyin: 'que' }, { char: '珠', pinyin: 'zhu' }, 
    { char: '称', pinyin: 'cheng' }, { char: '夜', pinyin: 'ye' }, { char: '光', pinyin: 'guang' },
    { char: '果', pinyin: 'guo' }, { char: '珍', pinyin: 'zhen' }, { char: '李', pinyin: 'li' }, 
    { char: '柰', pinyin: 'nai' }, { char: '菜', pinyin: 'cai' }, { char: '重', pinyin: 'zhong' }, 
    { char: '芥', pinyin: 'jie' }, { char: '姜', pinyin: 'jiang' }, { char: '海', pinyin: 'hai' }, 
    { char: '咸', pinyin: 'xian' }, { char: '河', pinyin: 'he' }, { char: '淡', pinyin: 'dan' },
    { char: '鳞', pinyin: 'lin' }, { char: '潜', pinyin: 'qian' }, { char: '羽', pinyin: 'yu' }, 
    { char: '翔', pinyin: 'xiang' }, { char: '龙', pinyin: 'long' }, { char: '师', pinyin: 'shi' }, 
    { char: '火', pinyin: 'huo' }, { char: '帝', pinyin: 'di' }, { char: '鸟', pinyin: 'niao' }, 
    { char: '官', pinyin: 'guan' }, { char: '人', pinyin: 'ren' }, { char: '皇', pinyin: 'huang' },
    { char: '始', pinyin: 'shi' }, { char: '制', pinyin: 'zhi' }, { char: '文', pinyin: 'wen' }, 
    { char: '字', pinyin: 'zi' }, { char: '乃', pinyin: 'nai' }, { char: '服', pinyin: 'fu' }, 
    { char: '衣', pinyin: 'yi' }, { char: '裳', pinyin: 'shang' }, { char: '推', pinyin: 'tui' }, 
    { char: '位', pinyin: 'wei' }, { char: '让', pinyin: 'rang' }, { char: '国', pinyin: 'guo' },
    { char: '有', pinyin: 'you' }, { char: '虞', pinyin: 'yu' }, { char: '陶', pinyin: 'tao' }, 
    { char: '唐', pinyin: 'tang' }, { char: '吊', pinyin: 'diao' }, { char: '民', pinyin: 'min' }, 
    { char: '伐', pinyin: 'fa' }, { char: '罪', pinyin: 'zui' }, { char: '周', pinyin: 'zhou' }, 
    { char: '发', pinyin: 'fa' }, { char: '殷', pinyin: 'yin' }, { char: '汤', pinyin: 'tang' },
    { char: '坐', pinyin: 'zuo' }, { char: '朝', pinyin: 'chao' }, { char: '问', pinyin: 'wen' }, 
    { char: '道', pinyin: 'dao' }, { char: '垂', pinyin: 'chui' }, { char: '拱', pinyin: 'gong' }, 
    { char: '平', pinyin: 'ping' }, { char: '章', pinyin: 'zhang' }, { char: '育', pinyin: 'yu' }, 
    { char: '黎', pinyin: 'li' }, { char: '首', pinyin: 'shou' }, { char: '臣', pinyin: 'chen' }, 
    { char: '伏', pinyin: 'fu' }, { char: '戎', pinyin: 'rong' }, { char: '羌', pinyin: 'qiang' }, 
    { char: '遐', pinyin: 'xia' }, { char: '迩', pinyin: 'er' }, { char: '一', pinyin: 'yi' }, 
    { char: '体', pinyin: 'ti' }, { char: '率', pinyin: 'shuai' }, { char: '宾', pinyin: 'bin' }, 
    { char: '归', pinyin: 'gui' }, { char: '王', pinyin: 'wang' }, { char: '鸣', pinyin: 'ming' }, 
    { char: '凤', pinyin: 'feng' }, { char: '在', pinyin: 'zai' }, { char: '竹', pinyin: 'zhu' }, 
    { char: '白', pinyin: 'bai' }, { char: '驹', pinyin: 'ju' }, { char: '食', pinyin: 'shi' }, 
    { char: '场', pinyin: 'chang' }, { char: '化', pinyin: 'hua' }, { char: '被', pinyin: 'bei' }, 
    { char: '草', pinyin: 'cao' }, { char: '木', pinyin: 'mu' }, { char: '赖', pinyin: 'lai' }, 
    { char: '及', pinyin: 'ji' }, { char: '万', pinyin: 'wan' }, { char: '方', pinyin: 'fang' }, 
    { char: '盖', pinyin: 'gai' }, { char: '此', pinyin: 'ci' }, { char: '身', pinyin: 'shen' }, 
    { char: '发', pinyin: 'fa' }, { char: '四', pinyin: 'si' }, { char: '大', pinyin: 'da' }, 
    { char: '五', pinyin: 'wu' }, { char: '常', pinyin: 'chang' }, { char: '恭', pinyin: 'gong' }, 
    { char: '惟', pinyin: 'wei' }, { char: '鞠', pinyin: 'ju' }, { char: '养', pinyin: 'yang' }, 
    { char: '岂', pinyin: 'qi' }, { char: '敢', pinyin: 'gan' }, { char: '毁', pinyin: 'hui' }, 
    { char: '伤', pinyin: 'shang' }, { char: '女', pinyin: 'nv' }, { char: '慕', pinyin: 'mu' }, 
    { char: '贞', pinyin: 'zhen' }, { char: '洁', pinyin: 'jie' }, { char: '男', pinyin: 'nan' }, 
    { char: '效', pinyin: 'xiao' }, { char: '才', pinyin: 'cai' }, { char: '良', pinyin: 'liang' }, 
    { char: '知', pinyin: 'zhi' }, { char: '过', pinyin: 'guo' }, { char: '必', pinyin: 'bi' }, 
    { char: '改', pinyin: 'gai' }, { char: '得', pinyin: 'de' }, { char: '能', pinyin: 'neng' }, 
    { char: '莫', pinyin: 'mo' }, { char: '忘', pinyin: 'wang' }, { char: '罔', pinyin: 'wang' }, 
    { char: '谈', pinyin: 'tan' }, { char: '彼', pinyin: 'bi' }, { char: '短', pinyin: 'duan' }, 
    { char: '靡', pinyin: 'mi' }, { char: '恃', pinyin: 'shi' }, { char: '己', pinyin: 'ji' }, 
    { char: '长', pinyin: 'zhang' }, { char: '信', pinyin: 'xin' }, { char: '使', pinyin: 'shi' }, 
    { char: '可', pinyin: 'ke' }, { char: '覆', pinyin: 'fu' }, { char: '器', pinyin: 'qi' }, 
    { char: '欲', pinyin: 'yu' }, { char: '难', pinyin: 'nan' }, { char: '量', pinyin: 'liang' }, 
    { char: '墨', pinyin: 'mo' }, { char: '悲', pinyin: 'bei' }, { char: '丝', pinyin: 'si' }, 
    { char: '染', pinyin: 'ran' }, { char: '诗', pinyin: 'shi' }, { char: '赞', pinyin: 'zan' }, 
    { char: '羔', pinyin: 'gao' }, { char: '羊', pinyin: 'yang' }, { char: '景', pinyin: 'jing' }, 
    { char: '行', pinyin: 'xing' }, { char: '维', pinyin: 'wei' }, { char: '贤', pinyin: 'xian' }, 
    { char: '克', pinyin: 'ke' }, { char: '念', pinyin: 'nian' }, { char: '作', pinyin: 'zuo' }, 
    { char: '圣', pinyin: 'sheng' }, { char: '德', pinyin: 'de' }, { char: '建', pinyin: 'jian' }, 
    { char: '名', pinyin: 'ming' }, { char: '立', pinyin: 'li' }, { char: '形', pinyin: 'xing' }, 
    { char: '端', pinyin: 'duan' }, { char: '表', pinyin: 'biao' }, { char: '正', pinyin: 'zheng' }, 
    { char: '空', pinyin: 'kong' }, { char: '谷', pinyin: 'gu' }, { char: '传', pinyin: 'chuan' }, 
    { char: '声', pinyin: 'sheng' }, { char: '虚', pinyin: 'xu' }, { char: '堂', pinyin: 'tang' }, 
    { char: '习', pinyin: 'xi' }, { char: '听', pinyin: 'ting' }, { char: '祸', pinyin: 'huo' }, 
    { char: '因', pinyin: 'yin' }, { char: '恶', pinyin: 'e' }, { char: '积', pinyin: 'ji' }, 
    { char: '福', pinyin: 'fu' }, { char: '缘', pinyin: 'yuan' }, { char: '善', pinyin: 'shan' }, 
    { char: '庆', pinyin: 'qing' }, { char: '尺', pinyin: 'chi' }, { char: '璧', pinyin: 'bi' }, 
    { char: '非', pinyin: 'fei' }, { char: '宝', pinyin: 'bao' }, { char: '寸', pinyin: 'cun' }, 
    { char: '阴', pinyin: 'yin' }, { char: '是', pinyin: 'shi' }, { char: '竞', pinyin: 'jing' }, 
    { char: '资', pinyin: 'zi' }, { char: '父', pinyin: 'fu' }, { char: '事', pinyin: 'shi' }, 
    { char: '君', pinyin: 'jun' }, { char: '曰', pinyin: 'yue' }, { char: '严', pinyin: 'yan' }, 
    { char: '与', pinyin: 'yu' }, { char: '敬', pinyin: 'jing' }, { char: '孝', pinyin: 'xiao' }, 
    { char: '当', pinyin: 'dang' }, { char: '竭', pinyin: 'jie' }, { char: '力', pinyin: 'li' }, 
    { char: '忠', pinyin: 'zhong' }, { char: '则', pinyin: 'ze' }, { char: '尽', pinyin: 'jin' }, 
    { char: '命', pinyin: 'ming' }, { char: '临', pinyin: 'lin' }, { char: '深', pinyin: 'shen' }, 
    { char: '履', pinyin: 'lv' }, { char: '薄', pinyin: 'bo' }, { char: '夙', pinyin: 'su' }, 
    { char: '兴', pinyin: 'xing' }, { char: '温', pinyin: 'wen' }, { char: '凊', pinyin: 'qing' }, 
    { char: '似', pinyin: 'si' }, { char: '兰', pinyin: 'lan' }, { char: '斯', pinyin: 'si' }, 
    { char: '馨', pinyin: 'xin' }, { char: '如', pinyin: 'ru' }, { char: '松', pinyin: 'song' }, 
    { char: '之', pinyin: 'zhi' }, { char: '盛', pinyin: 'sheng' }, { char: '川', pinyin: 'chuan' }, 
    { char: '流', pinyin: 'liu' }, { char: '不', pinyin: 'bu' }, { char: '息', pinyin: 'xi' }, 
    { char: '渊', pinyin: 'yuan' }, { char: '澄', pinyin: 'cheng' }, { char: '取', pinyin: 'qu' }, 
    { char: '映', pinyin: 'ying' }, { char: '容', pinyin: 'song' }
];

export const LIBRARIES = {
    random: BASE_LIBRARY,
    initial: BASE_LIBRARY.filter(w => ['zh', 'ch', 'sh', 'r', 'z', 'c', 's'].some(i => w.pinyin.startsWith(i))),
    final: BASE_LIBRARY.filter(w => w.pinyin.length > 3)
};

export const parsePinyinToShuangpin = (pinyin: string) => {
    if (!pinyin) return '';
    if (pinyin === 'yi') return 'yi';
    if (pinyin === 'wu') return 'wu';
    if (pinyin === 'yu') return 'yu';
    if (/^[aoe]/.test(pinyin)) {
        if (pinyin.length === 1) return pinyin + pinyin;
        if (pinyin === 'ai') return 'ai'; 
        if (pinyin === 'an') return 'aj';
        if (pinyin === 'ang') return 'ah';
        if (pinyin === 'ao') return 'ao';
        if (pinyin === 'ou') return 'ou';
        if (pinyin === 'er') return 'er';
        return pinyin[0] + (ZIRANMA_CONFIG.finals[pinyin.substring(1)] || pinyin[1]);
    }
    let initial = '', final = '';
    if (pinyin.startsWith('zh') || pinyin.startsWith('ch') || pinyin.startsWith('sh')) {
        initial = pinyin.substring(0, 2); final = pinyin.substring(2);
    } else {
        initial = pinyin.substring(0, 1); final = pinyin.substring(1);
    }
    return (ZIRANMA_CONFIG.initials[initial] || initial) + (ZIRANMA_CONFIG.finals[final] || final);
};

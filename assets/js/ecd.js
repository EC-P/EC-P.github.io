const elecodes = [{code: "001",latin: "HYDROGENIUM",color: "#e0ffff",symbol: "H",cn: "氢",jp: "水素",f0: "——勿疾行，勿妄言。",f1:" 1.0080",f2: "1s¹",f3:"第一周期 1族",f4: "s区 非金属 气体",f5: "1766"},
{code: "002",latin: "HELIUM",color: "#ffe4e1",symbol: "He",cn: "氦",jp: "ヘリウム",f0: "我是氦。次位。……有什么需要补充？",f1:" 4.0026",f2: "1s²",f3:"第一周期 18族",f4: "s区 稀有气体 气体",f5: "1868"},
{code: "003",latin: "LITHIUM",color: "#ff1493",symbol: "Li",cn: "锂",jp: "リチウム",f0: "最基础的看护——关于精神。",f1:"6.94",f2: "[He]2s¹",f3:"第二周期 1族",f4: "s区 碱金属 固体",f5: "1817"},
{code: "004",latin: "BERYLLIUM",color: "#40e0d0",symbol: "Be",cn: "铍",jp: "ベリリウム",f0: "我也会飞的。向更高的地方——",f1:"9.0122",f2: "[He]2s²",f3:"第二周期 2族",f4: "s区 碱土金属 固体",f5: "1798"},
{code: "005",latin: "BORUM",color: "#daa520",symbol: "B",cn: "硼",jp: "ホウ素",f0: "还是硼，不上不下，就这样。",f1:"10.81",f2: "[He]2s²2p¹",f3:"第二周期 13族",f4: "p区 类金属 固体",f5: "1787"},
{code: "006",latin: "CARBONEUM",color: "#000000",symbol: "C",cn: "碳",jp: "炭素",f0: "迟也，穷也。迟则变，穷则变。",f1:"12.011",f2: "[He]2s²2p²",f3:"第二周期 14族",f4: "p区 非金属 固体",f5: "公元前26000年"},
{code: "007",latin: "NITROGENIUM",color: "#9400d3",symbol: "N",cn: "氮",jp: "窒素",f0: "氮，我是氮。闪电中降临，随处可见的普通元素。",f1:"14.007",f2: "[He]2s²2p³",f3:"第二周期 15族",f4: "p区 非金属 气体",f5: "1772"},
{code: "008",latin: "OXYGENIUM",color: "#4169e1",symbol: "O",cn: "氧",jp: "酸素",f0: "哦？没错，我就是氧。不会认错吧？",f1:"15.999",f2: "[He]2s²2p⁴",f3:"第二周期 16族",f4: "p区 非金属 气体",f5: "1771"},
{code: "009",latin: "FLUORUM",color: "#f0e68c",symbol: "F",cn: "氟",jp: "フッ素",f0: "为了更强。还远远不够啊。",f1:"18.998",f2: "[He]2s²2p⁵",f3:"第二周期 17族",f4: "p区 卤素 气体",f5: "1771"},
{code: "010",latin: "NEON",color: "#ff7f50",symbol: "Ne",cn: "氖",jp: "ネオン",f0: "拉住我的手吧？……很好，没有带电。",f1:"20.180",f2: "[He]2s²2p⁶",f3:"第二周期 18族",f4: "p区 稀有气体 气体",f5: "1898"},
{code: "011",latin: "NATRIUM",color: "#fffacd",symbol: "Na",cn: "钠",jp: "ナトリウム",f0: "我，钠来了，是时候兴奋起来了！",f1:"22.990",f2: "[Ne]3s¹",f3:"第三周期 1族",f4: "s区 碱金属 固体",f5: "1702"},
{code: "012",latin: "MAGNESIUM",color: "#fffff0",symbol: "Mg",cn: "镁",jp: "マグネシウム",f0: "苦涩，距离甘甜是最近的吧，你怎么想呢？",f1:"24.305",f2: "[Ne]3s²",f3:"第三周期 2族",f4: "s区 碱土金属 固体",f5: "1755"},
{code: "013",latin: "ALUMINIUM",color: "#707070",symbol: "Al",cn: "铝",jp: "アルミニウム",f0: "宣之于口的“优雅”最为简单。",f1:"26.982",f2: "[Ne]3s²3p¹",f3:"第三周期 13族",f4: "p区 金属 固体",f5: "1746"},
{code: "014",latin: "SILICIUM",color: "#00ffff",symbol: "Si",cn: "硅",jp: "ケイ素",f0: "先说好，我只是个文弱的程序员哦？",f1:"28.085",f2: "[Ne]3s²3p²",f3:"第三周期 14族",f4: "p区 类金属 固体",f5: "1739"},
{code: "015",latin: "PHOSPHORUS",color: "#b03060",symbol: "P",cn: "磷",jp: "リン",f0: "这也是无目的地的旅途的一站。",f1:"30.974",f2: "[Ne]3s²3p³",f3:"第三周期 15族",f4: "p区 非金属 固体",f5: "1669"},
{code: "016",latin: "SULFUR",color: "#ffff00",symbol: "S",cn: "硫",jp: "硫黄",f0: "硫磺，硫酸，就是那个硫啦。",f1:"32.06",f2: "[Ne]3s²3p⁴",f3:"第三周期 16族",f4: "p区 非金属 固体",f5: "公元前2000年之前"},
{code: "017",latin: "CHLORUM",color: "#9acd32",symbol: "Cl",cn: "氯",jp: "塩素",f0: "这里的打扫和清洁，请交给我吧。",f1:"35.45",f2: "[Ne]3s²3p⁵",f3:"第三周期 17族",f4: "p区 卤素 气体",f5: "1774"},
{code: "018",latin: "ARGON",color: "#6495ed",symbol: "Ar",cn: "氩",jp: "アルゴン",f0: "……呼……",f1:"39.95",f2: "[Ne]3s²3p⁶",f3:"第三周期 18族",f4: "p区 稀有气体 气体",f5: "1894"},
{code: "019",latin: "KALIUM",color: "#9370db",symbol: "K",cn: "钾",jp: "カリウム",f0: "哟，有感到心动吗？是玩笑啦——",f1:"39.098",f2: "[Ar]4s¹",f3:"第四周期 1族",f4: "s区 碱金属 固体",f5: "1702"},
{code: "020",latin: "CALCIUM",color: "#fff5ee",symbol: "Ca",cn: "钙",jp: "カルシウム",f0: "嗯？我真的不是魔术师。",f1:"40.078",f2: "[Ar]4s²",f3:"第四周期 2族",f4: "s区 碱土金属 固体",f5: "1739"},
{code: "021",latin: "SCANDIUM",color: "#ffefd5",symbol: "Sc",cn: "钪",jp: "スカンジウム",f0: "我只是在这一族、这个位置而已。",f1:"44.956",f2: "[Ar]3d¹4s²",f3:"第四周期 3族",f4: "d区 过渡金属 固体",f5: "1879"},
{code: "022",latin: "TITANIUM",color: "#fafafa",symbol: "Ti",cn: "钛",jp: "チタン",f0: "【……】",f1:"47.867",f2: "[Ar]3d²4s²",f3:"第四周期 4族",f4: "d区 过渡金属 固体",f5: "1791"},
{code: "023",latin: "VANADIUM",color: "#e6e6fa",symbol: "V",cn: "钒",jp: "バナジウム",f0: "【……】",f1:"50.942",f2: "[Ar]3d³4s²",f3:"第四周期 5族",f4: "d区 过渡金属 固体",f5: "1801"},
{code: "024",latin: "CHROMIUM",color: "#40826d",symbol: "Cr",cn: "铬",jp: "クロム",f0: "【……】",f1:"51.996",f2: "[Ar]3d⁵4s¹",f3:"第四周期 6族",f4: "d区 过渡金属 固体",f5: "1797"},
{code: "025",latin: "MANGANUM",color: "#663399",symbol: "Mn",cn: "锰",jp: "マンガン",f0: "【……】",f1:"54.938",f2: "[Ar]3d⁵4s²",f3:"第四周期 7族",f4: "d区 过渡金属 固体",f5: "1774"},
{code: "026",latin: "FERRUM",color: "#003153",symbol: "Fe",cn: "铁",jp: "鉄",f0: "【……】",f1:"55.845",f2: "[Ar]3d⁶4s²",f3:"第四周期 8族",f4: "d区 过渡金属 固体",f5: "公元前5000年之前"},
{code: "027",latin: "COBALTUM",color: "#0047ab",symbol: "Co",cn: "钴",jp: "コバルト",f0: "【……】",f1:"58.933",f2: "[Ar]3d⁷4s²",f3:"第四周期 9族",f4: "d区 过渡金属 固体",f5: "1735"},
{code: "028",latin: "NICCOLUM",color: "#727472",symbol: "Ni",cn: "镍",jp: "ニッケル",f0: "【……】",f1:"58.693",f2: "[Ar]3d⁸4s²",f3:"第四周期 10族",f4: "d区 过渡金属 固体",f5: "1751"},
{code: "029",latin: "CUPRUM",color: "#b87333",symbol: "Cu",cn: "铜",jp: "銅",f0: "【……】",f1:"63.546",f2: "[Ar]3d¹⁰4s¹",f3:"第四周期 11族",f4: "d区 过渡金属 固体",f5: "公元前9000年"},
{code: "030",latin: "ZINCUM",color: "#b0c4de",symbol: "Zn",cn: "锌",jp: "亜鉛",f0: "【……】",f1:"65.38",f2: "[Ar]3d¹⁰4s²",f3:"第四周期 12族",f4: "d区 过渡金属 固体",f5: "公元前1000年之前"},
{code: "031",latin: "GALLIUM",color: "#191970",symbol: "Ga",cn: "镓",jp: "ガリウム",f0: "【……】",f1:"69.723",f2: "[Ar]3d¹⁰4s²4p¹",f3:"第四周期 13族",f4: "p区 金属 固体",f5: "1875"},
{code: "032",latin: "GERMANIUM",color: "#00ced1",symbol: "Ge",cn: "锗",jp: "ゲルマニウム",f0: "【……】",f1:"72.630",f2: "[Ar]3d¹⁰4s²4p²",f3:"第四周期 14族",f4: "p区 类金属 固体",f5: "1886"},
{code: "033",latin: "ARSENICUM",color: "#ffa500",symbol: "As",cn: "砷",jp: "ヒ素",f0: "【……】",f1:"74.922",f2: "[Ar]3d¹⁰4s²4p³",f3:"第四周期 15族",f4: "p区 类金属 固体",f5: "约300"},
{code: "034",latin: "SELENIUM",color: "#b22222",symbol: "Se",cn: "硒",jp: "セレン",f0: "【……】",f1:"78.971",f2: "[Ar]3d¹⁰4s²4p⁴",f3:"第四周期 16族",f4: "p区 非金属 固体",f5: "1817"},
{code: "035",latin: "BROMUM",color: "#66023c",symbol: "Br",cn: "溴",jp: "臭素",f0: "【……】",f1:"79.904",f2: "[Ar]3d¹⁰4s²4p⁵",f3:"第四周期 17族",f4: "p区 卤素 液体",f5: "1825"},
{code: "036",latin: "KRYPTON",color: "#00bfff",symbol: "Kr",cn: "氪",jp: "クリプトン",f0: "【……】",f1:"83.798",f2: "[Ar]3d¹⁰4s²4p⁶",f3:"第四周期 18族",f4: "p区 稀有气体 气体",f5: "1898"},
{code: "037",latin: "RUBIDIUM",color: "#ba55d3",symbol: "Rb",cn: "铷",jp: "ルビジウム",f0: "【……】",f1:"85.468",f2: "[Kr]5s¹",f3:"第五周期 1族",f4: "s区 碱金属 固体",f5: "1861"},
{code: "038",latin: "STRONTIUM",color: "#dc143c",symbol: "Sr",cn: "锶",jp: "ストロンチウム",f0: "【……】",f1:"87.62",f2: "[Kr]5s²",f3:"第五周期 2族",f4: "s区 碱土金属 固体",f5: "1787"},
{code: "039",latin: "YTTRIUM",color: "#696969",symbol: "Y",cn: "钇",jp: "イットリウム",f0: "【……】",f1:"88.906",f2: "[Kr]4d¹5s²",f3:"第五周期 3族",f4: "d区 过渡金属 固体",f5: "1794"},
{code: "040",latin: "ZIRCONIUM",color: "#ff8c00",symbol: "Zr",cn: "锆",jp: "ジルコニウム",f0: "【……】",f1:"91.224",f2: "[Kr]4d²5s²",f3:"第五周期 4族",f4: "d区 过渡金属 固体",f5: "1789"},
{code: "041",latin: "NIOBIUM",color: "#483d8b",symbol: "Nb",cn: "铌",jp: "ニオブ",f0: "【……】",f1:"92.906",f2: "[Kr]4d⁴5s¹",f3:"第五周期 5族",f4: "d区 过渡金属 固体",f5: "1801"},
{code: "042",latin: "MOLYBDAENUM",color: "#ff6347",symbol: "Mo",cn: "钼",jp: "モリブデン",f0: "【……】",f1:"95.95",f2: "[Kr]4d⁵5s¹",f3:"第五周期 6族",f4: "d区 过渡金属 固体",f5: "1778"},
{code: "043",latin: "TECHNETIUM",color: "#a9a9a9",symbol: "Tc",cn: "锝",jp: "テクネチウム",f0: "【……】",f1:"[97]",f2: "[Kr]4d⁵5s²",f3:"第五周期 7族",f4: "d区 过渡金属 固体",f5: "1937"},
{code: "044",latin: "RUTHENIUM",color: "#a52a2a",symbol: "Ru",cn: "钌",jp: "ルテニウム",f0: "【……】",f1:"101.07",f2: "[Kr]4d⁷5s¹",f3:"第五周期 8族",f4: "d区 过渡金属 固体",f5: "1844"},
{code: "045",latin: "RHODIUM",color: "#ee82ee",symbol: "Rh",cn: "铑",jp: "ロジウム",f0: "【……】",f1:"102.91",f2: "[Kr]4d⁸5s¹",f3:"第五周期 9族",f4: "d区 过渡金属 固体",f5: "1804"},
{code: "046",latin: "PALLADIUM",color: "#d3d3d3",symbol: "Pd",cn: "钯",jp: "パラジウム",f0: "【……】",f1:"106.42",f2: "[Kr]4d¹⁰",f3:"第五周期 10族",f4: "d区 过渡金属 固体",f5: "1802"},
{code: "047",latin: "ARGENTUM",color: "#c0c0c0",symbol: "Ag",cn: "银",jp: "銀",f0: "【……】",f1:"107.87",f2: "[Kr]4d¹⁰5s¹",f3:"第五周期 11族",f4: "d区 过渡金属 固体",f5: "公元前5000年之前"},
{code: "048",latin: "CADMIUM",color: "#e30022",symbol: "Cd",cn: "镉",jp: "カドミウム",f0: "【……】",f1:"112.41",f2: "[Kr]4d¹⁰5s²",f3:"第五周期 12族",f4: "d区 过渡金属 固体",f5: "1817"},
{code: "049",latin: "INDIUM",color: "#4b0082",symbol: "In",cn: "铟",jp: "インジウム",f0: "【……】",f1:"114.82",f2: "[Kr]4d¹⁰5s²5p¹",f3:"第五周期 13族",f4: "p区 金属 固体",f5: "1863"},
{code: "050",latin: "STANNUM",color: "#007ba7",symbol: "Sn",cn: "锡",jp: "スズ",f0: "【……】",f1:"118.71",f2: "[Kr]4d¹⁰5s²5p²",f3:"第五周期 14族",f4: "p区 金属 固体",f5: "公元前3500年"},
{code: "051",latin: "STIBIUM",color: "#800000",symbol: "Sb",cn: "锑",jp: "アンチモン",f0: "【……】",f1:"121.76",f2: "[Kr]4d¹⁰5s²5p³",f3:"第五周期 15族",f4: "p区 类金属 固体",f5: "公元前3000年"},
{code: "052",latin: "TELLURIUM",color: "#ffffe0",symbol: "Te",cn: "碲",jp: "テルル",f0: "【……】",f1:"127.60",f2: "[Kr]4d¹⁰5s²5p⁴",f3:"第五周期 16族",f4: "p区 类金属 固体",f5: "1782"},
{code: "053",latin: "IODUM",color: "#563c5c",symbol: "I",cn: "碘",jp: "ヨウ素",f0: "【……】",f1:"126.90",f2: "[Kr]4d¹⁰5s²5p⁵",f3:"第五周期 17族",f4: "p区 卤素 固体",f5: "1811"},
{code: "054",latin: "XENON",color: "#f5fffa",symbol: "Xe",cn: "氙",jp: "キセノン",f0: "【……】",f1:"131.29",f2: "[Kr]4d¹⁰5s²5p⁶",f3:"第五周期 18族",f4: "p区 稀有气体 气体",f5: "1898"},
{code: "055",latin: "CESIUM",color: "#ffdead",symbol: "Cs",cn: "铯",jp: "セシウム",f0: "我在衡量。时间，一条轴的数值。",f1:"132.91",f2: "[Xe]6s¹",f3:"第六周期 1族",f4: "s区 碱金属 固体",f5: "1860"},
{code: "056",latin: "BARIUM",color: "#adff2f",symbol: "Ba",cn: "钡",jp: "バリウム",f0: "【……】",f1:"137.33",f2: "[Xe]6s²",f3:"第六周期 2族",f4: "s区 碱土金属 固体",f5: "1772"},
{code: "057",latin: "LANTHANUM",color: "#8b008b",symbol: "La",cn: "镧",jp: "ランタン",f0: "【……】",f1:"138.91",f2: "[Xe]5d¹6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1838"},
{code: "058",latin: "CERIUM",color: "#fa8072",symbol: "Ce",cn: "铈",jp: "セリウム",f0: "【……】",f1:"140.12",f2: "[Xe]4f¹5d¹6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1803"},
{code: "059",latin: "PRASEODYMIUM",color: "#98fb98",symbol: "Pr",cn: "镨",jp: "プラセオジム",f0: "【……】",f1:"140.91",f2: "[Xe]4f³6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1885"},
{code: "060",latin: "NEODYMIUM",color: "#ffc0cb",symbol: "Nd",cn: "钕",jp: "ネオジム",f0: "【……】",f1:"144.24",f2: "[Xe]4f⁴6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1841"},
{code: "061",latin: "PROMETHIUM",color: "#7fffd4",symbol: "Pm",cn: "钷",jp: "プロメチウム",f0: "【……】",f1:"[145]",f2: "[Xe]4f⁵6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1945"},
{code: "062",latin: "SAMRIUM",color: "#f4a460",symbol: "Sm",cn: "钐",jp: "サマリウム",f0: "【……】",f1:"150.36",f2: "[Xe]4f⁶6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1879"},
{code: "063",latin: "EUROPIUM",color: "#c71585",symbol: "Eu",cn: "铕",jp: "ユウロピウム",f0: "【……】",f1:"151.96",f2: "[Xe]4f⁷6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1896"},
{code: "064",latin: "GADOLINIUM",color: "#7fff00",symbol: "Gd",cn: "钆",jp: "ガドリニウム",f0: "【……】",f1:"157.25",f2: "[Xe]4f⁷5d¹6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1880"},
{code: "065",latin: "TERBIUM",color: "#c1f9a2",symbol: "Tb",cn: "铽",jp: "テルビウム",f0: "【……】",f1:"158.93",f2: "[Xe]4f⁹6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1843"},
{code: "066",latin: "DYSPROSIUM",color: "#66cdaa",symbol: "Dy",cn: "镝",jp: "ジスプロシウム",f0: "【……】",f1:"162.50",f2: "[Xe]4f¹⁰6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1886"},
{code: "067",latin: "HOLMIUM",color: "#dda0dd",symbol: "Ho",cn: "钬",jp: "ホルミウム",f0: "【……】",f1:"164.93",f2: "[Xe]4f¹¹6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1878"},
{code: "068",latin: "ERBIUM",color: "#d8bfd8",symbol: "Er",cn: "铒",jp: "エルビウム",f0: "【……】",f1:"167.26",f2: "[Xe]4f¹²6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1843"},
{code: "069",latin: "THULIUM",color: "#d0f0c0",symbol: "Tm",cn: "铥",jp: "ツリウム",f0: "【……】",f1:"168.93",f2: "[Xe]4f¹³6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1879"},
{code: "070",latin: "YTTERBIUM",color: "#3cb371",symbol: "Yb",cn: "镱",jp: "イッテルビウム",f0: "【……】",f1:"173.05",f2: "[Xe]4f¹⁴6s²",f3:"第六周期 3族",f4: "f区 镧系 固体",f5: "1878"},
{code: "071",latin: "LUTETIUM",color: "#8a2be2",symbol: "Lu",cn: "镥",jp: "ルテチウム",f0: "【……】",f1:"174.97",f2: "[Xe]4f¹⁴5d¹6s²",f3:"第六周期 3族",f4: "d区 镧系 固体",f5: "1906"},
{code: "072",latin: "HAFNIUM",color: "#d2691e",symbol: "Hf",cn: "铪",jp: "ハフニウム",f0: "【……】",f1:"178.49",f2: "[Xe]4f¹⁴5d²6s²",f3:"第六周期 4族",f4: "d区 过渡金属 固体",f5: "1922"},
{code: "073",latin: "TANTALUM",color: "#708090",symbol: "Ta",cn: "钽",jp: "タンタル",f0: "【……】",f1:"180.95",f2: "[Xe]4f¹⁴5d³6s²",f3:"第六周期 5族",f4: "d区 过渡金属 固体",f5: "1802"},
{code: "074",latin: "WOLFRAMIUM",color: "#0000cd",symbol: "W",cn: "钨",jp: "タングステン",f0: "【……】",f1:"183.84",f2: "[Xe]4f¹⁴5d⁴6s²",f3:"第六周期 6族",f4: "d区 过渡金属 固体",f5: "1781"},
{code: "075",latin: "RHENIUM",color: "#eee8aa",symbol: "Re",cn: "铼",jp: "レニウム",f0: "【……】",f1:"186.21",f2: "[Xe]4f¹⁴5d⁵6s²",f3:"第六周期 7族",f4: "d区 过渡金属 固体",f5: "1908"},
{code: "076",latin: "OSMIUM",color: "#4682b4",symbol: "Os",cn: "锇",jp: "オスミウム",f0: "【……】",f1:"190.23",f2: "[Xe]4f¹⁴5d⁶6s²",f3:"第六周期 8族",f4: "d区 过渡金属 固体",f5: "1803"},
{code: "077",latin: "IRIDIUM",color: "#cd5c5c",symbol: "Ir",cn: "铱",jp: "イリジウム",f0: "【……】",f1:"192.22",f2: "[Xe]4f¹⁴5d⁷6s²",f3:"第六周期 9族",f4: "d区 过渡金属 固体",f5: "1803"},
{code: "078",latin: "PLATINUM",color: "#e5e4e2",symbol: "Pt",cn: "铂",jp: "白金",f0: "【……】",f1:"195.08",f2: "[Xe]4f¹⁴5d⁹6s¹",f3:"第六周期 10族",f4: "d区 过渡金属 固体",f5: "约公元前 600 年"},
{code: "079",latin: "AURUM",color: "#ffd700",symbol: "Au",cn: "金",jp: "金",f0: "七青，八黄，九紫，十赤。无足赤，无完人。",f1:"196.97",f2: "[Xe]4f¹⁴5d¹⁰6s¹",f3:"第六周期 11族",f4: "d区 过渡金属 固体",f5: "公元前6000年之前"},
{code: "080",latin: "HYDRARGYRUM",color: "#e34234",symbol: "Hg",cn: "汞",jp: "水銀",f0: "【……】",f1:"200.59",f2: "[Xe]4f¹⁴5d¹⁰6s²",f3:"第六周期 12族",f4: "d区 过渡金属 液体",f5: "公元前1500年"},
{code: "081",latin: "THALLIUM",color: "#32cd32",symbol: "Tl",cn: "铊",jp: "タリウム",f0: "【……】",f1:"204.38",f2: "[Xe]4f¹⁴5d¹⁰6s²6p¹",f3:"第六周期 13族",f4: "p区 金属 固体",f5: "1861"},
{code: "082",latin: "PLUMBUM",color: "#ff0000",symbol: "Pb",cn: "铅",jp: "鉛",f0: "【……】",f1:"207.2",f2: "[Xe]4f¹⁴5d¹⁰6s²6p²",f3:"第六周期 14族",f4: "p区 金属 固体",f5: "公元前7000年"},
{code: "083",latin: "BISMUTHUM",color: "#ffff54",symbol: "Bi",cn: "铋",jp: "ビスマス",f0: "【……】",f1:"208.98",f2: "[Xe]4f¹⁴5d¹⁰6s²6p³",f3:"第六周期 15族",f4: "p区 金属 固体",f5: "约1500"},
{code: "084",latin: "POLONIUM",color: "#b8860b",symbol: "Po",cn: "钋",jp: "ポロニウム",f0: "【……】",f1:"[209]",f2: "[Xe]4f¹⁴5d¹⁰6s²6p⁴",f3:"第六周期 16族",f4: "p区 类金属 固体",f5: "1898"},
{code: "085",latin: "ASTATIUM",color: "#00008b",symbol: "At",cn: "砹",jp: "アスタチン",f0: "【……】",f1:"[210]",f2: "[Xe]4f¹⁴5d¹⁰6s²6p⁵",f3:"第六周期 17族",f4: "p区 卤素 ",f5: "1940"},
{code: "086",latin: "RADON",color: "#ff4500",symbol: "Rn",cn: "氡",jp: "ラドン",f0: "【……】",f1:"[222]",f2: "[Xe]4f¹⁴5d¹⁰6s²6p⁶",f3:"第六周期 18族",f4: "p区 稀有气体 气体",f5: "1899"},
{code: "087",latin: "FRANCIUM",color: "#8fbc8f",symbol: "Fr",cn: "钫",jp: "フランシウム",f0: "【……】",f1:"[223]",f2: "[Rn]7s¹",f3:"第七周期 1族",f4: "s区 碱金属 ",f5: "1939"},
{code: "088",latin: "RADIUM",color: "#00fa9a",symbol: "Ra",cn: "镭",jp: "ラジウム",f0: "【……】",f1:"[226]",f2: "[Rn]7s²",f3:"第七周期 2族",f4: "s区 碱土金属 固体",f5: "1898"},
{code: "089",latin: "ACTINIUM",color: "#1e90ff",symbol: "Ac",cn: "锕",jp: "アクチニウム",f0: "【……】",f1:"[227]",f2: "[Rn]6d¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1902"},
{code: "090",latin: "THORIUM",color: "#cd853f",symbol: "Th",cn: "钍",jp: "トリウム",f0: "【……】",f1:"232.04",f2: "[Rn]6d²7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1829"},
{code: "091",latin: "PROTACTINIUM",color: "#add8e6",symbol: "Pa",cn: "镤",jp: "プロトアクチニウム",f0: "【……】",f1:"231.04",f2: "[Rn]5f²6d¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1913"},
{code: "092",latin: "URANIUM",color: "#00ff00",symbol: "U",cn: "铀",jp: "ウラン",f0: "【……】",f1:"238.03",f2: "[Rn]5f³6d¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1789"},
{code: "093",latin: "NEPTUNIUM",color: "#6b8e23",symbol: "Np",cn: "镎",jp: "ネプツニウム",f0: "【……】",f1:"[237]",f2: "[Rn]5f⁴6d¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1940"},
{code: "094",latin: "PLUTONIUM",color: "#f08080",symbol: "Pu",cn: "钚",jp: "プルトニウム",f0: "【……】",f1:"[244]",f2: "[Rn] 5f⁶7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1941"},
{code: "095",latin: "AMERICIUM",color: "#ff69b4",symbol: "Am",cn: "镅",jp: "アメリシウム",f0: "【……】",f1:"[243]",f2: "[Rn] 5f⁷7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1944"},
{code: "096",latin: "CURIUM",color: "#ff00ff",symbol: "Cm",cn: "锔",jp: "キュリウム",f0: "【……】",f1:"[247]",f2: "[Rn] 5f⁷6d¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1944"},
{code: "097",latin: "BERKELIUM",color: "#808000",symbol: "Bk",cn: "锫",jp: "バークリウム",f0: "【……】",f1:"[247]",f2: "[Rn] 5f⁹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1949"},
{code: "098",latin: "CALIFORNIUM",color: "#008000",symbol: "Cf",cn: "锎",jp: "カリホルニウム",f0: "【……】",f1:"[251]",f2: "[Rn] 5f¹⁰7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1950"},
{code: "099",latin: "EINSTEINIUM",color: "#87ceeb",symbol: "Es",cn: "锿",jp: "アインスタイニウム",f0: "【……】",f1:"[252]",f2: "[Rn] 5f¹¹7s²",f3:"第七周期 3族",f4: "f区 锕系 固体",f5: "1952"},
{code: "100",latin: "FERMIUM",color: "#20b2aa",symbol: "Fm",cn: "镄",jp: "フェルミウム",f0: "【……】",f1:"[257]",f2: "[Rn] 5f¹²7s²",f3:"第七周期 3族",f4: "f区 锕系 ",f5: "1953"},
{code: "101",latin: "MENDELEVIUM",color: "#0000ff",symbol: "Md",cn: "钔",jp: "メンデレビウム",f0: "【……】",f1:"[258]",f2: "[Rn] 5f¹³7s²",f3:"第七周期 3族",f4: "f区 锕系 ",f5: "1955"},
{code: "102",latin: "NOBELIUM",color: "#da70d6",symbol: "No",cn: "锘",jp: "ノーベリウム",f0: "【……】",f1:"[259]",f2: "[Rn] 5f¹⁴7s²",f3:"第七周期 3族",f4: "f区 锕系 ",f5: "1966"},
{code: "103",latin: "LAWRENCIUM",color: "#7b68ee",symbol: "Lr",cn: "铹",jp: "ローレンシウム",f0: "【……】",f1:"[266]",f2: "[Rn] 5f¹⁴6d¹7s²",f3:"第七周期 3族",f4: "d区 锕系 ",f5: "1961"},
{code: "104",latin: "RUTHERFORDIUM",color: "#deb887",symbol: "Rf",cn: "𬬻",jp: "ラザホージウム",f0: "【……】",f1:"[267]",f2: "[Rn] 5f¹⁴6d²7s²",f3:"第七周期 4族",f4: "d区 过渡金属 ",f5: "1969"},
{code: "105",latin: "DUBNIUM",color: "#2f4f4f",symbol: "Db",cn: "𬭊",jp: "ドブニウム",f0: "【……】",f1:"[268]",f2: "[Rn] 5f¹⁴6d³7s²",f3:"第七周期 5族",f4: "d区 过渡金属 ",f5: "1970"},
{code: "106",latin: "SEABORGIUM",color: "#008080",symbol: "Sg",cn: "𬭳",jp: "シーボーギウム",f0: "【……】",f1:"[269]",f2: "[Rn] 5f¹⁴6d⁴7s²",f3:"第七周期 6族",f4: "d区 过渡金属 ",f5: "1974"},
{code: "107",latin: "BOHRIUM",color: "#556b2f",symbol: "Bh",cn: "𬭛",jp: "ボーリウム",f0: "【……】",f1:"[270]",f2: "[Rn] 5f¹⁴6d⁵7s²",f3:"第七周期 7族",f4: "d区 过渡金属 ",f5: "1981"},
{code: "108",latin: "HASSIUM",color: "#006400",symbol: "Hs",cn: "𬭶",jp: "ハッシウム",f0: "【……】",f1:"[269]",f2: "[Rn] 5f¹⁴6d⁶7s²",f3:"第七周期 8族",f4: "d区 过渡金属 ",f5: "1984"},
{code: "109",latin: "MEITNERIUM",color: "#bc8f8f",symbol: "Mt",cn: "鿏",jp: "マイトネリウム",f0: "【……】",f1:"[278]",f2: "[Rn] 5f¹⁴6d⁷7s²",f3:"第七周期 9族",f4: "d区 过渡金属 ",f5: "1982"},
{code: "110",latin: "DARMSTADTIUM",color: "#a0522d",symbol: "Ds",cn: "𫟼",jp: "ダームスタチウム",f0: "【……】",f1:"[281]",f2: "[Rn] 5f¹⁴6d⁸7s²",f3:"第七周期 10族",f4: "d区 过渡金属 ",f5: "1994"},
{code: "111",latin: "ROENTGENIUM",color: "#8b4513",symbol: "Rg",cn: "𬬭",jp: "レントゲニウム",f0: "【……】",f1:"[282]",f2: "[Rn] 5f¹⁴6d⁹7s²",f3:"第七周期 11族",f4: "d区 过渡金属 ",f5: "1994"},
{code: "112",latin: "COPERNICIUM",color: "#5f9ea0",symbol: "Cn",cn: "鿔",jp: "コペルニシウム",f0: "【……】",f1:"[285]",f2: "[Rn] 5f¹⁴6d¹⁰7s²",f3:"第七周期 12族",f4: "d区 过渡金属 ",f5: "1996"},
{code: "113",latin: "NIHONIUM",color: "#db7093",symbol: "Nh",cn: "鿭",jp: "ニホニウム",f0: "【……】",f1:"[286]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p¹",f3:"第七周期 13族",f4: "p区 金属 ",f5: "2003"},
{code: "114",latin: "FLEROVIUM",color: "#ffa07a",symbol: "Fl",cn: "𫓧",jp: "フレロビウム",f0: "【……】",f1:"[289]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p²",f3:"第七周期 14族",f4: "p区 金属 ",f5: "1999"},
{code: "115",latin: "MOSCOVIUM",color: "#afeeee",symbol: "Mc",cn: "镆",jp: "モスコビウム",f0: "【……】",f1:"[290]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p³",f3:"第七周期 15族",f4: "p区 金属 ",f5: "2003"},
{code: "116",latin: "LIVERMORIUM",color: "#bdb76b",symbol: "Lv",cn: "𫟷",jp: "リバモリウム",f0: "【……】",f1:"[293]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p⁴",f3:"第七周期 16族",f4: "p区 金属 ",f5: "2000"},
{code: "117",latin: "TENNESSINE",color: "#6a5acd",symbol: "Ts",cn: "鿬",jp: "テネシン",f0: "【……】",f1:"[294]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p⁵",f3:"第七周期 17族",f4: "p区 卤素 ",f5: "2009"},
{code: "118",latin: "OGANESSON",color: "#f0f8ff",symbol: "Og",cn: "鿫",jp: "オガネソン",f0: "【……】",f1:"[294]",f2: "[Rn] 5f¹⁴6d¹⁰7s²7p⁶",f3:"第七周期 18族",f4: "p区 稀有气体 ",f5: "2002"}
];

let currentIndex = 0; 
let isAnimating = false;

const elecodeCode = document.getElementById('elecode-code');
const elecodeBg = document.getElementById('elecode-bg');
const elecodeLatin = document.getElementById('elecode-latin');
const elecodeButtons = document.querySelectorAll('.elecode-button');
const elecodeImg = document.getElementById('elecode-img');
const elecodeElecode = document.getElementById('elecode-elecode');
const elecodeCn = document.getElementById('elecode-cn');
const elecodeJp = document.getElementById('elecode-jp');
const elecodeSymbol = document.getElementById('elecode-symbol');
const elecodeF0 = document.getElementById('elecode-f0');
const elecodeF1 = document.getElementById('elecode-f1');
const elecodeF2 = document.getElementById('elecode-f2');
const elecodeF3 = document.getElementById('elecode-f3');
const elecodeF4 = document.getElementById('elecode-f4');
const elecodeF5 = document.getElementById('elecode-f5');
const elecodeEmo = document.getElementById('elecode-emo');

const avatar = document.getElementById('avatar');
const hole = document.getElementById("hole");
const cardtitle = document.getElementById("cardtitle");
const cardcode = document.getElementById("card-code");
const cardname = document.getElementById("card-name");
const cardsymbol = document.getElementById("card-symbol");
const cardadd = document.getElementById("card-add");

function updateElecode() {
  isAnimating = true;


  setTimeout(() => {

    elecodeBg.src =`assets/img/ecd/${elecodes[currentIndex].code}.png`;
    elecodeImg.src =`assets/img/ecd/${elecodes[currentIndex].code}.png`;
    elecodeEmo.src =`assets/img/emo/${elecodes[currentIndex].code}.png`;
    elecodeCode.innerText = elecodes[currentIndex].code;
    elecodeLatin.innerText = elecodes[currentIndex].latin;
    elecodeSymbol.innerText = elecodes[currentIndex].symbol;
    elecodeCn.innerText = elecodes[currentIndex].cn;
    elecodeJp.innerText = elecodes[currentIndex].jp;
    elecodeF0.innerText = elecodes[currentIndex].f0;
    elecodeF1.innerText = elecodes[currentIndex].f1;
    elecodeF2.innerText = elecodes[currentIndex].f2;
    elecodeF3.innerText = elecodes[currentIndex].f3;
    elecodeF4.innerText = elecodes[currentIndex].f4;
    elecodeF5.innerText = elecodes[currentIndex].f5;


    var elecolor = elecodes[currentIndex].color;

    elecodeLatin.style.color = elecolor;
    elecodeElecode.style.color = elecolor;
    elecodeSymbol.style.color = elecolor;
    elecodeF0.style.color = elecolor;
    elecodeF1.style.color = elecolor;
    elecodeF2.style.color = elecolor;
    elecodeF3.style.color = elecolor;
    elecodeF4.style.color = elecolor;
    elecodeF5.style.color = elecolor;

    avatar.src = `assets/img/avatar/${elecodes[currentIndex].code}.png`;
    cardcode.innerText = `No.${elecodes[currentIndex].code}`;
    cardname.innerText = elecodes[currentIndex].cn;
    cardsymbol.innerText = elecodes[currentIndex].symbol;
    cardadd.innerText = elecodes[currentIndex].f3;
    hole.style.backgroundColor = elecolor;
    cardtitle.style.color = elecolor;

    

    document.body.style.backgroundColor = elecolor;


    const svghex = `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="69.282" viewBox="0 0 120 69.282">
      <polyline points="0,0 20,0 40,34.641 20,69.282 0,69.282" style="fill: none; stroke: ${elecolor}; stroke-miterlimit: 10;" />
      <polyline points="120,69.282 100,69.282 80,34.641 100,0 120,0" style="fill: none; stroke: ${elecolor}; stroke-miterlimit: 10;" />
      <line x1="40" y1="34.641" x2="80" y2="34.641" style="fill: none; stroke: ${elecolor}; stroke-miterlimit: 10;" />
    </svg>
    `;
    const svgHexUrl = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svghex)}")`;
    document.querySelector('.svg-box').style.backgroundImage = svgHexUrl;

    isAnimating = false;
  }, 10);
    // 反色转换函数
    // function invertColor(elecolor) {return "#" + ("000000" + (0xFFFFFF ^ parseInt(elecolor.substring(1), 16)).toString(16)).slice(-6);}

  // 高亮活动按钮
  elecodeButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function showelecode(index) {
  if (!isAnimating) {
    currentIndex = index;
    updateElecode();
  }
}

function nextElecode() {
  if (!isAnimating) {
    currentIndex = (currentIndex + 1) % elecodes.length;
    updateElecode();
  }
}

function prevElecode() {
  if (!isAnimating) {
    currentIndex = (currentIndex - 1 + elecodes.length) % elecodes.length;
    updateElecode();
  }
}

updateElecode();



document.getElementById('change').addEventListener('click', function () {
  const file = document.getElementById('file');
  const cards = document.getElementById('cards');

  // 切换显示和隐藏
  if (file.style.display === 'none') {
      file.style.display = 'block';
      cards.style.display = 'none';
  } else {
      file.style.display = 'none';
      cards.style.display = 'flex';
  }
});

// 预加载
function preloadImages() {
  for (let i = 1; i <= 118; i++) {
    const img = new Image();
    let num = (i < 10) ? `00${i}` : (i < 100) ? `0${i}` : `${i}`;
    img.src = `assets/img/ecd/${num}.png`;
    img.src = `assets/img/emo/${num}.png`;
    img.src = `assets/img/avatar/${num}.png`;
  }
}

preloadImages();
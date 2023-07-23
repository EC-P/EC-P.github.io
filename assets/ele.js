//单击显示元素名称
(function() {
  var a_idx = 0;
  window.onclick = function(event) {
    var a = new Array("H", "氢",
      "He", "氦",
      "Li", "锂",
      "Be", "铍",
      "B", "硼",
      "C", "碳",
      "N", "氮",
      "O", "氧",
      "F", "氟",
      "Ne", "氖",
      "Na", "钠",
      "Mg", "镁",
      "Al", "铝",
      "Si", "硅",
      "P", "磷",
      "S", "硫",
      "Cl", "氯",
      "Ar", "氩",
      "K", "钾",
      "Ca", "钙",
      "Sc", "钪",
      "Ti", "钛",
      "V", "钒",
      "Cr", "铬",
      "Mn", "锰",
      "Fe", "铁",
      "Co", "钴",
      "Ni", "镍",
      "Cu", "铜",
      "Zn", "锌",
      "Ga", "镓",
      "Ge", "锗",
      "As", "砷",
      "Se", "硒",
      "Br", "溴",
      "Kr", "氪",
      "Rb", "铷",
      "Sr", "锶",
      "Y", "钇",
      "Zr", "锆",
      "Nb", "铌",
      "Mo", "钼",
      "Tc", "锝",
      "Ru", "钌",
      "Rh", "铑",
      "Pd", "钯",
      "Ag", "银",
      "Cd", "镉",
      "In", "铟",
      "Sn", "锡",
      "Sb", "锑",
      "Te", "碲",
      "I", "碘",
      "Xe", "氙",
      "Cs", "铯",
      "Ba", "钡",
      "La", "镧",
      "Ce", "铈",
      "Pr", "镨",
      "Nd", "钕",
      "Pm", "钷",
      "Sm", "钐",
      "Eu", "铕",
      "Gd", "钆",
      "Tb", "铽",
      "Dy", "镝",
      "Ho", "钬",
      "Er", "铒",
      "Tm", "铥",
      "Yb", "镱",
      "Lu", "镥",
      "Hf", "铪",
      "Ta", "钽",
      "W", "钨",
      "Re", "铼",
      "Os", "锇",
      "Ir", "铱",
      "Pt", "铂",
      "Au", "金",
      "Hg", "汞",
      "Tl", "铊",
      "Pb", "铅",
      "Bi", "铋",
      "Po", "钋",
      "At", "砹",
      "Rn", "氡",
      "Fr", "钫",
      "Ra", "镭",
      "Ac", "锕",
      "Th", "钍",
      "Pa", "镤",
      "U", "铀",
      "Np", "镎",
      "Pu", "钚",
      "Am", "镅",
      "Cm", "锔",
      "Bk", "锫",
      "Cf", "锎",
      "Es", "锿",
      "Fm", "镄",
      "Md", "钔",
      "No", "锘",
      "Lr", "铹",
      "Rf", "𬬻",
      "Db", "𬭊",
      "Sg", "𬭳",
      "Bh", "𬭛",
      "Hs", "𬭶",
      "Mt", "鿏",
      "Ds", "𫟼",
      "Rg", "𬬭",
      "Cn", "鿔",
      "Nh", "鿭",
      "Fl", "𫓧",
      "Mc", "镆",
      "Lv", "𫟷",
      "Ts", "鿬",
      "Og", "鿫");

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

    var f = 12, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function() { //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "font-size:12px;font-family:Microsoft YaHei,HonokaGothic;cursor: default;position: fixed;color:" +
          c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
          s + ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15)

  }
  // 随机颜色
  function randomColor() {

    return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
      .random() * 255)) + ")";

  }
}());

// emoji问答
// 问题数组
var questions = [
	'💧🌌',
	'🎈☀️',
	'🔋⚛️',
	'🍬🛩️',
	'🌵🪂',
	'💎🌳',
	'🌱⚡️',
	'🔥💦'
];

// 答案数组
var answers = [
	'氢',
	'氦',
	'锂',
	'铍',
	'硼',
	'碳',
	'氮',
	'氧'
];

function showRandomQuestion() {
	var randomIndex = Math.floor(Math.random() * questions.length);
	document.getElementById("question").innerHTML = questions[randomIndex];
}

function showAnswer() {
	var questionText = document.getElementById("question").innerText;
	var questionIndex = questions.indexOf(questionText);
	if (questionIndex !== -1) {
			alert("是"+answers[questionIndex]+"元素经过了吧。");
	} else {
		alert("至少先进行一次观测吧？");
	}
}

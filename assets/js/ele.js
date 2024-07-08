//滚动新闻
function init() {
	var a=['你收到了碳的一次点赞，但代价是什么……你并不知道。',
	'铜的头发是铁亲自拿刀砍短的，第一过渡系的某位信誓旦旦道。',
	'嘿，那儿的你！知道吗，一个铀饼所含的热量就相当于一个铀饼。',
	'24号，是过渡金属。身高是169公分，体重是52公斤。',
	'ᴇʟᴇᴍᴇɴᴛ ᴄᴏᴅᴇ ᴘʀᴏᴊᴇᴄᴛ',
	'放射性，放射性的事情，能叫辣眼睛吗……！',
	'严正声明：砷没有在本栏投稿任何内容。砷不对任何诋毁其他元素的言论负责。',
	'『没有发现吗？即使是写了本栏怎样怎样，也完全可能是投稿内容。』比如这里就可以写：本栏宣布。',
	'严正声明：本栏没有设立审稿机制。',
	'喜报：ELECODE档案界面升级为118CHAT ROOM分部！',
	'<a href="?file=2-档案陈列/06-第六周期/072-第三过渡系/080-Hg"  title="锁链，帽子和猫">⛓🎩🐈</a>',
	'↑ ↑ ↑ ↑ ↑ ↑',
	'气也是氧，水也是氧，火也是氧，土……土也是氧，真本领！（赞赏）',
	'【广告位招租中-联系人：<a href="?file=2-档案陈列/02-第二周期/010-Ne"  title="路过的广告商" style="color:white;text-decoration: none">氖</a>】（本条为付费显示）',
	'→ → →<a href="#"  title="你-被-骗-了"  style="color:white;text-decoration: none">点-这-里</a>← ← ←',
	'『铈哥救命啊——救救我——』远方传来了这样的声音。',
	'碱金属的蹦极那儿是不是有谁吓晕过去了？怎么吊在那里一动不动。',
	'【悬赏：花园植物繁殖器官失窃案】',
	'『多喝水。』',
	'到底是谁管这玩意儿叫WIKI的？写啥啥不清楚，还不如去听碳吹牛。',
	'『赞美太阳！』\\\[2]/\\\[10]/\\\[18]/\\\[36]/\\\[54]/\\\[86]/\\\[118]/',
	'碱金属住处发生了微小的爆炸事故，本栏记者正在调查中。',
	'『这个栏目，到底是哪些元素在运营啊？』本栏收到了这样的问题。',
	'有传言说锶以前漫山遍野跑来跑去只是为了抓只羊，澄清一下，这不是传言。',
	'钒在闲聊时不慎透露钛也蛮喜欢五颜六色，但为了膈应铬每天拿着白色去画画。',
	'『都说元素有工作，咱们到底在忙啥……』这样说的元素被捂着嘴拖走了。',
	'『逃避问题永远也不能解决问题。』制造问题的某个元素这样说道。',
	'镄因本栏投稿不是整百数怒而投稿数十条重复内容，合并如下：『＋1』',
	'请各位元素及时备份118CHAT ROOM的聊天记录，昨天路过半导协会听到了删库跑路的风声……',
	'氮头上是真花吗：真的。也可能是叶子。在氮发呆面无表情时可以观察其了解情况。不太准，聊胜于无。',
	'铜和锌因前者坚持抽烟喝酒烫头爆发了冲突。不知道是谁的造谣，总之先把锅扣在砷身上吧。',
	'梦回二十一世纪初的聊天室什么时候能跟上咱们的时代啊。',
	'118CHAT ROOM诚招管理员，详情聊天室内直接敲——别说不知道谁还在上工——',
	'聊天室里乌烟瘴气，这档案也整理了个寂寞，纯粹是一派胡言。',
	'今天碱土金属有烟火晚会，欢迎大家来玩！',
	'吃了吗您？没吃的可以吃我兄弟一饼。',
	'『兄弟，你在哪儿，兄弟……』',
	'首先，你有放射性吧。正因为如此你有放射性啊，你有放射性。',
	'我以前和你一样是一个稳定元素，直到我的核中了一炮。',
	'由于有雨，铀与鱿鱼囿于犹豫，又遇忧郁。',
	'『最强的元素一切都是必然的，就连周期率本身也由自己创造！』由氦记录下来的钔的梦话。',
	'『Q：水玻璃作为饮品是安全的吗？』『A：是的，是安全的。有着清洁感。』'];
	var s = ''
	var s = ''
	let t = 0
	const a1 = []
	let index
	do {
		index = Math.floor(Math.random() * a.length)
		a1.push(a[index])
		a.splice(index, 1)
	} while (a.length !== 0)
	for (let i = 0; i < a1.length; i++) {
		s += ''     //可以有<img src=".png">
		s += a1[i]
		t += (a1[i].length * 0.2 + 1)
		s += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	}
	document.getElementById('elenews').innerHTML = s
	document.getElementById('elenews').style.animation = (`marquee ${t}s linear infinite`)
	document.getElementById('elenews').style.color = 'white'
	}

	// emoji问答
// 问题数组
var questions = [
	'💧🌌','🎈☀️','🔋⚛️','🍬🛩️','🌵🪂','💎🌳','🌱⚡️','🔥💦'
];

// 答案数组
var answers = [
	'氢','氦','锂','铍','硼','碳','氮','氧'
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

//分析登录
function passed() {
    console.log("passed() 函数被执行");
}

function passinit() {
  const passDiv = document.getElementById('passDiv');
  const view = document.getElementById('view');
  const searchShow = document.getElementById('searchShow');
  const footer = document.getElementById('footer');
  const loginid = document.getElementById('loginid');
  const body = document.body;
  const header = document.getElementById('header');

  if (localStorage.getItem('passedExecuted')) {
    passDiv.style.display = 'none';
    view.style.display = 'block';
    searchShow.style.display = 'block';
    footer.style.display = 'block';
  } else {
    passDiv.style.display = 'block';
    view.style.display = 'none';
    searchShow.style.display = 'none';
    footer.style.display = 'none';
  }
}

function checkPass() { //都翻到这里也没有不给你看的道理啦……
const validPasswords = ['000aaa', '014024', 'vnl370', '118CR', 'yyzip'];
const passInput = document.getElementById('passBox').value;

if (validPasswords.includes(passInput)) { //该不会是直奔着“pass”来的吧。
passed();
localStorage.setItem('passedExecuted', 'true');
document.getElementById('passDiv').style.display = 'none';
document.getElementById('view').style.display = 'block';
document.getElementById('searchShow').style.display = 'block';
document.getElementById('footer').style.display = 'block';

if (passInput === '000aaa') {
alert('欢迎登陆ELECODE，分析师。');
} else if (passInput === '014024') { //……我留的后门都给改了？
alert('欢迎登陆ELECODE，分析……不是分析师？无所谓了，这个系统就是充斥着漏洞。');
} else if (passInput === 'vnl370') {
alert('欢迎登陆ELECODE，分析……DyE编外成员？谁啊这是。');
} else if (passInput === '118CR') {
alert('欢迎登陆118聊天室。这里可以……也不能聊天啊，这是哪里？');
} else if (passInput === 'yyzip') {
alert('首先，你没资格吧。正因为如此你没资格啊，你没资格。');
}

} else {
alert('您确定编码输入无误吗？请再次输入。');
}
}

// 在页面加载时运行 passinit 函数
window.onload = passinit;


// 加载动画
document.addEventListener("DOMContentLoaded", function() {
            // 网页加载完成时触发的事件处理程序
            var loadingDiv = document.querySelector('.loading-div');
            loadingDiv.style.display = 'none'; // 隐藏加载中的 div
        });

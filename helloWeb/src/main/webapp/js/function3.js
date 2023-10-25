//function3.js

function Member(name, age, height){
	console.log(this); // this>윈도우객체!! 반드시 기억하기
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function(){
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}

var myName = 'Hong'; //전역변수
//const member = new Member('홍길동', 20, 123.4); // new 넣고 안넣고 차이
//console.log(member.showInfo());

const members = [ //매개값
	new Member('홍길동', 18, 123.3), //매개변수
	new Member('김길동', 19, 124.3),
	new Member('박길동', 20, 125.3)
]
console.log(members);
//window.alert('hhhh');

//함수: table 생성
function makeTable(memberAry=[]){
	let str = "";
	str +='<table border="1">';
	str += '<tbody>';
	memberAry.forEach(function(item){
		str+= makeTr(item);
	})
	
	str += '</tbody>';
	str += '</table>';
	//화면의 <div id='show'></div>의 innerHTML 속성에
	document.getElementById('show').innerHTML = str;
	
	function makeTr(member){
	let html = '';
	html += '<tr>';
	html += '<td>'+ member.name + '</td>';
	html += '<td>'+ member.age + '</td>';
	html += '<td>'+ member.height + '</td>';
	html += '<td>'+ member.showInfo() + '</td>';
	html += '</tr>';
	return html;
	}
}//end of makeTable

makeTable(members);
//console.log(makeTr(members));
//console.log(makeTable(members));


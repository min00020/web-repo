//function4.js

//생성자 함수: Member
function Member(name, age, height){
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function(){
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}
//makeTr 함수
function makeTr(mem){
	let html = '';
	html += '<tr>';
	html += '<td>'+ mem.name +'</td>';
	html += '<td>'+ mem.age +'</td>';
	html += '<td>'+ mem.height +'</td>';
	html += '<td>'+ mem.showInfo() + '</td>';
	html += '<td><button onclick="">삭제</button></td>';
	html += '</tr>';
	return html;
}

//id값으로 ele가져오기
document.getElementById('saveBtn').onclick = function(e){
	//console.log(e.target);
	
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let height = document.getElementById('height').value;
	
	console.log(name);
	if(!name|| !age || !height){
		alert("값을 입력해주세요.");
		return;
	}
	
	const mem = new Member(name, age, height);
	let str = makeTr(mem); 
	document.getElementById('list').innerHTML += str;
	
	//입력 초기화
	document.getElementById('name').value = "";
	document.getElementById('age').value = "";
	document.getElementById('height').value = "";
	document.getElementById('name').focus();
	
}

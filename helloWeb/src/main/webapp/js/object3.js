//object3.js

const member = {
	name: "홍길동",
	age: 20,
	height: 123.4,
	showInfo: function(){
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	},
	html: '',
	makeTr: function(student = {sno,sname,engScore,mathScore}){
		let tr = '';
		tr +='<tr>';
		for(let prop in student){
		tr +='<td>'+student[prop]+'</td>';
		}
		tr +='<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr +='</tr>';
		return tr;
	},
	makeHtml(studAry){
		let table = '<table border="1"><tbody>';
		table += studAry.reduce((acc,stud) => {
			acc + this.makeTr(stud)
			},''); //펑션구문안에서 this는 윈도우객체
		table +='</tbody></table>';
		this.html = table; // member.html도 가능
	},
	showPage(dom){
				dom.innerHTML = this.html;
	}
}

//객체의 속성 for in
for(let prop in member){
	//member.name / member['age']
	//console.log(typeof member[prop]);
	if(typeof member[prop] != 'function'){
		console.log(member[prop]);
	};
}


const students = [
	{sno:'001',sname:"최해주", engScore:80, mathScore:85},
	{sno:'002',sname:"김채민", engScore:82, mathScore:83},
	{sno:'003',sname:"최다예", engScore:84, mathScore:88},
]


member.makeHtml(students);
member.showPage(document.getElementById('show'));


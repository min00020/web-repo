//object2.js
const students = [
	{sno:'001',sname:"최해주", engScore:80, mathScore:85},
	{sno:'002',sname:"김채민", engScore:82, mathScore:83},
	{sno:'003',sname:"최다예", engScore:84, mathScore:88},
]

const member = new Member(); //객체 만들려고 의미없는 값 
member.makeHTML(students); //makeTr활용 
member.showPage(document.getElementById('show'));  //showPage:보여질 위치를 넣으라는 의미

//member.makeTr(students);
//console.log(member.makeHTML(students));
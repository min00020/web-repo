//object.js


//<주소값 참조vs복사(새로운 값)>

let obj1 = {
	name: 'Hong',
	age: 20
}

//주소 참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1); //주소값 참조> 같은 메소드> obj2바꿔도 obj1바뀜!

//주소복사
let obj3 = { ...obj1} //주소값 참조가 아니라 새로운 객체 만든 것. 복사!
obj3.age = 24;
console.log(obj1); //obj1 영향 안받음



//클래스
class Member {
	//constructor(){}
	constructor(name, age, height){
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight){
		this.weight = weight;
	}
	getWeight(){
		return this.weight; //java는 field선언해야하지만 js는 이 자체가 필드역할
	}
	showInfo(){
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.` ;
	}
	//학생의 정보: 학생번호, 이름, 영어, 수학. 
	makeTr(student = {sno,sname,engScore,mathScore}){ //속성:값 속성=값일땐 하나만 써도 됨 (sno:sno>sno)
		let tr = '';
		tr +='<tr>';
		tr +='<td>'+student.sno+'</td>';
		tr +='<td>'+student.sname+'</td>';
		tr +='<td>'+student['engScore']+'</td>';
		tr +='<td>'+student.mathScore+'</td>';
		tr +='<td><button onclick="">삭제</button></td>';
		tr +='</tr>';
		return tr;
	}
	makeHTML(studAry=[]){
		let table = '<table border="1"><tbody>';
		//table += studAry.reduce((acc,stud) => {acc + this.makeTr(stud)},'') //펑션구문안에서 this는 윈도우객체
		//let obj = this; //member 객체 가르킴
		//table += studAry.reduce(function(acc,stud){
		//	return acc + obj.makeTr(stud)
		//},''); 화살표함수는 함수정의구문이 아니고 실행구문임>this로해도 멤버클래스의 객체 그대로 가져옴
		let obj = this;
		table += studAry.forEach(function(stud){
			 obj.makeTr(stud);
		})
		table +='</tbody></table>';
		this.html = table;
	}
	showPage(dom){
		//innerHTML 속성에 html 저장.
		dom.innerHTML = this.html;
	}
}

const mem1 = new Member('홍길동',20,156.5);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log(`홍길동의 몸무게는`,mem1.getWeight(),'kg입니다');



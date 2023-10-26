//object5.js:객체복사;

const obj1 = {
	name: "Hong",
	age: 20,
	weight: 66.4
} // 기본적으로 get set 만들어짐

console.log('obj1:',obj1);

const obj3 = obj1; //참조값을 공유하는 거랑 다름

const obj2 = Object.assign(
	{name:"Hwang",age:22, height:134.1},obj1); //기존값있으면 기존값 + 신규값

//상속
const obj4 = Object.create(obj1);
//상속을 통해 자식객체를 생성하면 부모객체를 참조
obj4.name = "Kim";//자식 속성이 변경되면 부모값과 다른 값
obj4.age = 23; // 자식요소의 값

obj1.name="Hwang"; // hong도 hwang으로바뀜
console.log('obj4:',obj4); //{}참조값을 가지고있음
console.log('obj4 name:',obj4,name);
console.log(obj4.age);

//객체의 속성을 정의. 객체의 속성기술자(잘못된 값 들어오면 알려주기)
//obj1.bloodType = "C";
Object.defineProperty(obj1,'bloodType',{
	set: function(bt){
		if(bt == "A" ||bt =="B"||bt=="AB"||bt=="O"){
			this._bloodType = bt;
		}else{ 
			console.log("잘못된 유형입니다.");
			this._bloodType = "A"; //초기값 설정 
			}
	},
	get: function(){
		return this._bloodType;
	}
})

obj1.bloodType = "AB"; // set
console.log(obj1.bloodType); //get


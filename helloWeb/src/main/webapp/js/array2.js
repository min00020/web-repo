//array2.js: MOCK_DATA.json파일의 데이터 활용

const json = `
[{"id":1,"first_name":"Hanson","email":"hbrimacombe0@irs.gov"},
{"id":2,"first_name":"Yehudit","email":"ydalesco1@webmd.com"},
{"id":3,"first_name":"Kamillah","email":"kgaish2@bing.com"},
{"id":4,"first_name":"Agneta","email":"atropman3@cyberchimps.com"},
{"id":5,"first_name":"Amitie","email":"acoenraets4@zdnet.com"},
{"id":6,"first_name":"Francene","email":"fredsull5@de.vu"},
{"id":7,"first_name":"Tobe","email":"tscannell6@jugem.jp"},
{"id":8,"first_name":"Erastus","email":"elabatie7@ifeng.com"},
{"id":9,"first_name":"Cherye","email":"cvolkers8@disqus.com"},
{"id":10,"first_name":"Hortensia","email":"hcoolbear9@blogtalkradio.com"}]
`; // ``백팁으로 넣으면 문자열로 인식
//json>object  JSON.parse()이용 > 문자열 ""로 묶어줘야함

//문자열을 자스의 members
let members = JSON.parse(json);
console.log(members);


//splice활용: members.splice(4,1); //4번째 지우기 
let delMember = "Amitie";
let yourinfo = { name: "Hong", email: "hong@email.com" }


members.forEach((member, idx) => {
	if (member.first_name == delMember) {
		members.splice(idx, 1, { id: member.id, first_name: yourinfo.name, email: yourinfo.email });
	}
})


//입력받아서 추가하기: prompt() > 전역 메소드라 window 생략해도됨
let inpVal = window.prompt("이름과 이메일 입력하세요 예)홍길동, hong@email.com");

const infoAry = inpVal.split(',');
let nid = members[members.length - 1].id + 1;
let newMember = { id: nid, first_name: infoAry[0], email: infoAry[1].trim() }

members.push(newMember);
console.log(members);


const dupAry = [["라이언", 5], ["어피치", 3], ["콘", 2], ["무지", 4]];
console.log(dupAry);
console.table(dupAry);


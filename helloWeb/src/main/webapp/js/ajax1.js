//ajax1.js
//Asynchronous Javascript and XML;
//비동기 vs 동기
import { table } from './ajaxModule.js';

let friends = [];

setTimeout(function() {
	friends.push('홍길동');
}, 1000);

setTimeout(function() {
	friends.push('김길동');
}, 500);

setTimeout(function() {
	friends.push('최길동');
}, 2000);

//비동기방식: 코드 실행>작업 영역에 담아놓고>먼저 끝나는 것부터 실행 
//비동기방식: 2초만에 실행 

//동기방식: 3.5초 (1>2>3)
setTimeout(function() {
	friends.push('홍길동');

	setTimeout(function() {
		friends.push('김길동');

		setTimeout(function() {
			friends.push('최길동');
		}, 2000);

	}, 500);

}, 1000);

console.log(friends);

//보류
let newMember = { mid: "M009", pass: "9999", name: "민식이", phone: "010-999-9999" }
let newMember2 = { mid: "M008", pass: "8888", name: "김민석", phone: "010-119-1111" }
//newMember활용해서 tbody = "list" 추가

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ2'); //여기에 경로 넣어주기!!
xhtp.send(); //send해야 시작됨!
xhtp.onload = loadJson;
//xhtp.onload = loadXML;

function loadJson(){
	//console.log(xhtp.responseText); // 문자열 출력 > JSON.parse로 자바스크립트 객체타입으로 변경
//	let result = JSON.parse(xhtp.responseText);
//	let dataAry = [];
	//let titles = ["회원번호", "비밀번호", "이름", "연락처"];
//	result.forEach(member => {
//		dataAry.push({mid: member.mid, pass: member.pass, name: member.name, phone: member.phone})
//	})
//	result = table.makeTable(titles, dataAry);
//	document.getElementById('show').innerHTML = result;
	
	
	let dataAry = JSON.parse(xhtp.responseText); //(xhtp.responseText: json문자열)>오브젝트로 변경
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
	
//	table.makeTr(newMember2);
	
}

function loadXML() {
	//console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record');
	console.log(records);
	//console.log(records[0].children[0].innerHTML);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, // innerHTML:"M001", textContent:"M001"
			pass: record.children[1].textContent,
			name: record.children[2].textContent,
			phone: record.children[3].textContent
		}
		dataAry.push(obj);
	}
	console.log(dataAry);
	let result = table.makeTable(titles, dataAry); //import받은 거
	document.getElementById('show').innerHTML = result;

	//newMember추가. ajax 실행이 되고 나서 추가하는 기능 실행
	//document.getElementById('list').innerHTML += table.makeTr(newMember2); //함수로 추가해봄

	let tr = '<tr><td>' + newMember.mid +
		'</td><td>' + newMember.pass +
		'</td><td>' + newMember.name +
		'</td><td>' + newMember.phone + '</td></tr>';
	document.getElementById('list').innerHTML += tr;

}


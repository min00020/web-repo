//

import { table } from './ajaxModule.js';

//onclick이벤트 등록 <button onclick="addMember()"
//ex) member = {name:"hong", age:20} member.name < .속성!!!
document.getElementById('addBtn').onclick = addMember; //addMember:이벤트 핸들러
document.getElementById('modBtn').onclick = modMember;

function addMember(e) { //e에 onclick event가 전달됨
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		//사용자 입력값: retCode=OK > {vo: mid, pass, name, phone}
		//tr생성해서 td생성, 화면출력 id="list"의 innerHTML 속성활용
		//누적시켜서 넣어줘야함 	//retCode=NG > alert('처리중 에러')

		//let result = Jxhtp.responseText;
		//if (result.match(".*OK*.")) {
		//	let tr = '<tr><td>' + mid +
		//		'</td><td>' + pass + '</td><td>' + name +
		//		'</td><td>' + phone + '</td></tr>';
		//	document.getElementById('list').innerHTML += tr;
		//} else {
		//	alert("처리중 에러")
		//}

		let result = JSON.parse(xhtp.responseText);
		if (result.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리중 에러(회원아이디:')
		}

	}
}

function modMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../ModMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);
		//데이터 영역의 tr
		console.log(document.querySelectorAll('#list tr'));
		document.querySelectorAll('#list tr').forEach(tr => {
			console.log(tr.children)
			if (tr.children[0].innerHTML = result.vo.mid) {
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;
			}
		})
		if (result.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리중 에러(회원아이디:')
		}
	}
}

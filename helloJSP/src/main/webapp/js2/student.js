/**
 * js/student.js
 */

import svc from './service.js'   //export default면 {}이거 쓰면 안됨

//-------------------원래코드----------------------
// fetch('../studentList.do')
// 	.then(resolve => resolve.json())
// 	.then(result => {
// 		console.log(result);
// 		let tbody = document.querySelector("#list");
// 		result.forEach(student => {
// 			tbody.append(makeTr(student));
// 		})
// 	})
// 	.catch(err => console.log('error=>', err))

//----------------바꾼코드--------------------------
//페이지 로딩되면서 바로 실행
//비동기방식코드>순차적 가독성 높이기! async, await;
//async 함수(
// await 처리 > promise객체를 반환해줘야 await할 수 있음
// await 처리.
// await 처리.
//)
svc.studentList( //(result 성공 후 실행할 함수, err 실패시 실행할 함수)
	result => {
		console.log(result);
		let tbody = document.querySelector("#list");
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	},
	err => console.log('error=>', err)
);

//----------------------------------------------------

//등록버튼이벤트
document.querySelector("#addBtn").addEventListener('click', addCallback);

//수정버튼 이벤트. 서블릿(db변경) > 화면변경
document.querySelector("#modBtn").addEventListener('click', modifyCallback);


//콜백함수
function addCallback(e) {
	//학생아이디 입력값
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.getElementById('sname').value;
	let pass = document.getElementById('pass').value;
	let sdept = document.getElementById('sdept').value;
	let birth = document.getElementById('birth').value;

	let param = `id=${sid}&name=${sname}&pass=${pass}&dept=${sdept}&birth=${birth}`;
	console.log(param); //파라메터값 받아오기
	//ajax호출
	//get방식:url패턴, 값 제한있음  
	//post방식: 파라메터값 표현 안됨, 넣을 수 있는 값 제한 없음(대신 전송하는 컨텐트 타입 지정해야함)
	//fetch('../addStudent.do?' + param) //get방식 요청
	svc.addStudent( //(optObj, 성공시 실행할 함수, 실패시 실행할 함수)
		{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		}, result => {
			if (result.retCode == 'OK') {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: birth });
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		},
		err => console.log('error=>', err)

	);
	//-------------------원래코드------------------------
	/*	fetch('../addStudent.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		}).then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					alert('성공');
					let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: birth });
					document.querySelector('#list').append(tr);
				} else {
					alert('실패');
				}
			})
			.catch(err => console.log('error=>', err));
			*/
	//-----------------------------------------------------
}

function modifyCallback(e) {
	let id = document.querySelector('.modal-body input[name=id]').value;
	let pass = document.querySelector('.modal-body input[name=pass]').value;
	let name = document.querySelector('.modal-body input[name=name]').value;
	let birth = document.querySelector('.modal-body input[name=birth]').value;

	console.log('id조회:', id);
	console.log('name조회:', name);
	console.log('조회:', pass);
	console.log('조회:', birth);

	let param = `id=${id}&name=${name}&pass=${pass}&birth=${birth}`;
	//	let param = `id=${'abc'}&name=${'dd'}&pass=${'1234'}&birth=${'birth'}`;
	console.log(param);
	svc.editStudent(
		{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		}, result => {
			console.log('수정조회:', result);
			if (result.retCode == 'OK') {
				alert('성공');
				let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
				let newTr = makeTr(result.vo);
				let parentElem = document.querySelector('#list');
				parentElem.replaceChild(newTr, targetTr);
				document.getElementById("myModal").style.display = 'none';
			} else {
				alert("실패");
			}
		},
		err => console.log('error=>', err)
	)


	/*	fetch('../editStudent.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		}).then(resolve => resolve.json())
			.then(result => {
				console.log('수정조회:', result);
				if (result.retCode == 'OK') {
					alert('성공');
					let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
					let newTr = makeTr(result.vo);
					let parentElem = document.querySelector('#list');
					parentElem.replaceChild(newTr, targetTr);
					document.getElementById("myModal").style.display = 'none';
				} else {
					alert("실패");
				}
			})
			.catch(err => console.log('error=>', err));
	*/

}//end of modifyCallback

function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	//////////////	
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) { //in vs of
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}
	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		//ajax호출(서블릿 실행)해서 서버에서 데이터 처리 > 잘 지워지면 화면에서도 지워주면 됨
		svc.removeStudent(
			obj.studentId,
			result => {
				console.log(result);
				if (result.retCode == 'OK') {
					alert("삭제 성공")
					tr.remove();
				} else {
					alert("삭제 실패")
				}
			},
			err => console.log('error: ', err)

		)
		
		/*fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (result.retCode == 'OK') {
					alert("삭제 성공")
					tr.remove();
				} else {
					alert("삭제 실패")
				}
			})
			.catch(err => console.log('error: ', err));*/
	})
	td.append(btn);
	tr.append(td);
	return tr;
}//end of makeTr

//모달 보여주기
function showModal(e) {
	console.log('조회1', e.target, this);
	console.log('조회2', e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; //'data-sid':std1
	//console.log(id);
	//fetch()가지고 온 json값 js 객체로 변경하고

	// Get the modal
	var modal = document.getElementById("myModal");
	svc.getStudent(
		id, 
		result => {
			modal.style.display = "block";
			console.log(result);
			modal.querySelector('h2').innerHTML = result.vo.studentName;
			modal.querySelector('input[name=id]').value = result.vo.studentId;
			modal.querySelector('input[name=pass]').value = result.vo.studentPassword;
			modal.querySelector('input[name=name]').value = result.vo.studentName;
			modal.querySelector('input[name=birth]').value = result.vo.studentBirthday;

		},
		err => console.log('error: ', err)
	)
	
/*	fetch("../getStudent.do?sid=" + id)
		.then(resolve => resolve.json())
		.then(result => {
			modal.style.display = "block";
			console.log(result);
			modal.querySelector('h2').innerHTML = result.vo.studentName;
			modal.querySelector('input[name=id]').value = result.vo.studentId;
			modal.querySelector('input[name=pass]').value = result.vo.studentPassword;
			modal.querySelector('input[name=name]').value = result.vo.studentName;
			modal.querySelector('input[name=birth]').value = result.vo.studentBirthday;

		})*/


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}//showModal
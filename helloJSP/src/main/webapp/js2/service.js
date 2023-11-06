/**
 * service.js 
 */

export default {
	//모듈로 작성 <> 데이터 숨기고 기능 만들어서 호출하는 방식으로 바꾸기
	//목록처리
	async studentList(successCallback, errorCallback) {
		let req = await fetch('../studentList.do');
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},
	//단건조회
	async getStudent(id, successCallback, errorCallback) {
		let req = await fetch('../getStudent.do?sid=' + id)
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},
	//등록
	async addStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../addStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},

	//수정
	async editStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../editStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},
	//삭제
	async removeStudent(id, successCallback, errorCallback) {
		let req = await fetch('../delStudent.do?sid=' + id);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	}
}


// async function studentList() {
// 	let req = await fetch('../studentList.do');
// 	let json = await req.json(); // {"retCode":"OK"}문자열을 > {retCode:"OK"} 문자열엔 값 담아줄 수 없으니 json함수써서 객체로 만들어주는거
// 	let tbody = document.querySelector("#list");
// 	try {
// 		json.forEach(student => {
// 			tbody.append(makeTr(student));
// 		})
// 	} catch {
// 		console.log('error=>', err);
// 	}
// }
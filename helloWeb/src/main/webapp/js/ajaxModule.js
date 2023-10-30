//ajaxModule.js

const table = {

	makeHead(titles = ['회원아이디', '비밀번호', '이름', '연락처']) {
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += "<th>" + title + "</th>";
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	makeBody(dataAry = [{ mid, pass, name, phone }]) {
		let bodyTag = "<tbody id = 'list'>";
		dataAry.forEach(item => {
			bodyTag += this.makeTr(item);
		})
		bodyTag += "</tbody>";
		return bodyTag;
	},
	makeTable(titleAry, dataAry) {
		let tableTag = "<table border ='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	},
	makeTr(member = {}) {
		let trTag = "<tr onclick='showInfo(event,this)'>"; //이벤트=이벤트핸들러
		for (let prop in member) {
			trTag += "<td>" + member[prop] + "</td>"
		}
		trTag += "</tr>";
		//document.getElementById('list').innerHTML += tr;
		return trTag;
	}
}

export { table };
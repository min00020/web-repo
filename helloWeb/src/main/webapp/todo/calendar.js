//calendar.js		

const today = new Date();
console.log("오늘날짜:" + today.getDate());

function makeHead() {
	const days = ['일', '월', '화', '수', '목', '금', '토']
	return days.reduce((acc, day) => {
		return acc + '<th>' + day + '</th>';
	}, '<thead><tr>')
}

function makeBody() {
	let styles = '';
	let tr = '</tr></thead><tbody>';
	for (let i = 1; i <= 31; i++) {
		if (i == today.getDate()) {
			styles = 'font-weight:bolder;';
		}
		else if (styles != '' && i != today.getDate()) {
			styles = '';
		}
		if (i % 7 == 0) {
			tr += '<td style ="' + styles + 'color:blue; background-color:lightgray", align = "right">' + i + '</td></tr><tr>';
		}
		else if (i % 7 == 1) {
			tr += '<td style ="' + styles + 'color:red;background-color:lightpink;", align = "right">' + i + '</td>'
		}
		else {
			tr += '<td style ="' + styles + '", align = "right">' + i + '</td>'
		}
	}//end for
	tr += '</tr></tbody>';
	return tr;
}
console.log(makeBody());

function makeCalendar() {
	let table = "";
	table += '<table border="1">';
	table += makeHead();
	table += makeBody();
	table += '</table>';
	let show = document.getElementById('show').innerHTML = table;
	return show;
}
makeCalendar();
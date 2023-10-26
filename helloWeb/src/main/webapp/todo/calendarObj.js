console.log("테스트");

const today = new Date();
const cal = {

	makeHead() {
		const days = ['일', '월', '화', '수', '목', '금', '토']
		return days.reduce((acc, day) => {
			return acc + '<th>' + day + '</th>';
		}, '<thead><tr>')
	},
	makeBody() {
		let styles = '';
		let tr = '</tr></thead><tbody>';
		for (let i = 1; i <= 31; i++) {
			//오늘날짜는 백그라운드:노란색, 폰트:bold;
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
	},
	showCalendar() {
		let table = "";
		table += '<table border="1">';
		table += this.makeHead();
		table += this.makeBody();
		table += '</table>';
		let show = document.getElementById('show').innerHTML = table;
		return show;
	}

}
//cal.showCalendar();

export { cal };

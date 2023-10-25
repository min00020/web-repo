//calendar.js		
		
//calendar>table
//makeHead();
//makeBody();
//makeCalendar();
	
function makeHead(){
	let th = '';
	th += '<thead><tr>';
	th += '<th>일</th>';
	th += '<th>월</th>';
	th += '<th>화</th>';
	th += '<th>수</th>';
	th += '<th>목</th>';
	th += '<th>금</th>';
	th += '<th>토</th>';
	th += '</tr></thead>';
	return th;
}

function makeBody(){
	let tr ='<tbody>';
	for(let i=1; i<=31; i++){
		tr += '<td>'+i+'</td>';
	}
	tr += '</tbody>';
	return tr;
}
console.log(makeBody());

function makeCalendar(){
	let table = "";
	table += '<table border="1">';
	table += makeHead()
	table += makeBody()
	table += '</table>';
	return table;
	
	show.innerHTML = table;
}

console.log(makeCalendar());
		
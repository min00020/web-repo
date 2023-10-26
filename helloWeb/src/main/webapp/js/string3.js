//string3.js

let today = new Date(); //내장객체
today.getFullYear(); //2023
today.getMonth(); //9 (10월>9로나옴)
today.getDate(); //26

today.setFullYear(2022);
today.setMonth(10);
today.setDate(1);
today.setHours(20); //한국시기준

console.log(today.toString()) // toISOString(): 현재 시간에서 9 뺀 값으로 나옴

function dateFormat(today) {
	// yyyy-MM-dd hh24:mm:ss
	return today.getFullYear() + '-' + ("0"+(today.getMonth() + 1)).slice(-2) + '-' +
		("0"+today.getDate()).slice(-2) + '-' + today.getHours() + ':' +
		today.getMinutes() + ':' + today.getSeconds();
}
console.log(dateFormat(today));

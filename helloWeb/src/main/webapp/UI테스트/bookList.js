//bookList.js

import { table } from '../bookModule.js';

let xhtp = new XMLHttpRequest();

xhtp.open('get','../BookListServlet');
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	let dataAry = JSON.parse(xhtp.responseText);
	let titles = ["도서코드", "도서명", "저자", "출판사","가격","삭제"];
	let result = table.makeTable(titles,dataAry);
	document.getElementById('show').innerHTML = result;
}


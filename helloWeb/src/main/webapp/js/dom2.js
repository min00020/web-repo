//dom2.js

//#show>table>tbody>(tr>td:사과+td:1000원 )/ (tr>td:복숭아 td:1500)

const fruits = [
	{ name: "사과", price: 1000, farmer: '홍길동' },
	{ name: "복숭아", price: 1500, farmer: '김민서' },
	{ name: "포도", price: 2000, farmer: '최인서' },
	{ name: "수박", price: 3000, farmer: '김지민' } //object
]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.setAttribute('border','1');


fruits.forEach(fruit => {
	const tr = document.createElement('tr');
	for (let prop in fruit) {
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop]
		tr.appendChild(td1);
	}
	tbody.appendChild(tr);
})

table.appendChild(tbody);
document.getElementById('show').appendChild(table);


//const table = document.createElement('table');
//const tbody = documnet.createElement('tbody');
//table.appendChild(tbody);

//fruits.forEach(fruit=>{
	//const tr = document.createElement('tr')
	
	//for prop
	//const td1 = document.createElement('td');
	//td1.innerHTML = fruit.name;
	//tr.appendChild(td1);

	//const td2 = document.createElement('td');
	//td2.innerHTML = fruit.price;
	//tr.appendChild(td2);
//})

//document.getElementById('show').appendChlid(table);
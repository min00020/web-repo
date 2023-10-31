//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도']

//#show>ul>li:수박....
//<ul><li></li><li></li>
//createElement, appendChild, innerHTML 속성

const ul = document.createElement('ul');

//fruits.forEach(fruit=>{})
for (let fruit of fruits) {
	const li = document.createElement('li');
	li.innerHTML = fruit;
	ul.appendChild(li);
}
document.getElementById('show').appendChild(ul);
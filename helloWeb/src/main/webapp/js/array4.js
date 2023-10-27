//array4.js

const json = `
[{"id":1,"first_name":"Hanson","email":"hbrimacombe0@irs.gov"},
{"id":2,"first_name":"Yehudit","email":"ydalesco1@webmd.com"},
{"id":8,"first_name":"Erastus","email":"elabatie7@ifeng.com"},
{"id":9,"first_name":"Cherye","email":"cvolkers8@disqus.com"},
{"id":10,"first_name":"Hortensia","email":"hcoolbear9@blogtalkradio.com"}]
`;

let members = JSON.parse(json);
//1)find: 첫번째 값 가져옴 (8,9,10 해당하지만 8만 출력)
let result = members.find(function(item, idx, ary) {
	if (item.id > 5) { 
		return true;
	} else {
		return false;
	}
})


//2)filter (모든 값 배열에 담아줌)
result = members.filter(function(item) {
	return item.id > 5; 
})

result = members.filter((item, idx) => { // item 지우면 안됨(idx가 item되어버리잖아)
	return idx >= 1 && idx < 3; //true값을 새로운 배열로 반환.
})


//3)reduce
result = members.reduce((acc, item, idx) => {
	if (idx >= 1 && idx < 3) {
		acc.push(item);
	}
	return acc;
}, []) //배열[]로 초기값 설정



//4)some(한 건만 체크)/ every (전부 체크) => true flase
result = members.every((member) => {
	console.log(member);
	return member.first_name.length > 6;
}) 

//*) map: A -> B (새로운 값 담아줄 때 (ex.grade 추가))
result = members.map(member => {
	let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'}
	return obj; //true 넣으면 true 담아버림
})



console.log(result);



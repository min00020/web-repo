//array5.js

//배열 정렬해줌
console.log('펭수'>'라이언'); //true
const arr1 = ['펭수','라이언','어피치','콘','무지']
arr1.sort();
console.log(arr1); //배열 값 자체를 변경

const arr2 = [4,8,1,12,23,9]
arr2.sort(function(a,b){
	if(a < b){ //내림차순하고싶으면 a>b
		return -1; //오름차순
	}else{
		return 1; 
	}
});
//조건 안주고 그냥 쓰면 숫자도 문자로 봐서 1 다음이 12
console.log(arr2); //배열 자체를 변경


const json = `
[{"id":1,"first_name":"Hanson","email":"hbrimacombe0@irs.gov"},
{"id":2,"first_name":"Yehudit","email":"ydalesco1@webmd.com"},
{"id":8,"first_name":"Erastus","email":"elabatie7@ifeng.com"},
{"id":9,"first_name":"Cherye","email":"cvolkers8@disqus.com"},
{"id":10,"first_name":"Hortensia","email":"hcoolbear9@blogtalkradio.com"}]
`;

let members = JSON.parse(json);
members.sort(function(a,b){
	if(a.first_name < b. first_name)
		return -1;
	else
		return 1;
}).reverse();

console.log(members)
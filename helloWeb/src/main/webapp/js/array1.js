//array1.js
const arr1 = []
//arr1[0]

arr1.push(10) //자스는 타입 신경안쓰고 담아도됨
arr1.push('ten');
arr1.push({ name: "Hong", age: 20 })

arr1.unshift(20);//배열 제일 앞쪽에 추가(index[0])

console.log('크기:', arr1.length);
//arr1.length = 3; //크기 변경 가능

arr1.pop();//뒤에서 빼기    // arr1.shift(); 앞에서 빼기

arr1.splice(1, 0, 50, 60); //추가 삭제 수정 (위치,대체할 개수, 담을 값,담을값...)


for (let ary of arr1) {
	console.log(ary);
}

//string.js

let str1 = "Hello";
let str2 = new String("Hello"); //객체

console.log(typeof str1, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);//유형까지비교

//문자열은 객체가 아니라 속성이 없음에도 함수 사용 가능 > 자스가 타입변환 알아서 해주는 거
console.log(str1.toUpperCase());
let result = "    공백 제거 합니다.      ".trim(); // 앞뒤공백 제거
console.log(result, '문자갯수', result.length);

//trim(), trimStart(), trimEnd()
//replace(), split(), slice(), substring(), substr()

result = "Hello, World, Nice, World".replace(',', '.'); //첫번째 , 를 . 으로 변경
console.log(result);

result = "Hello  World  Nice  World".replace(/\s/g, '.'); //전체구문에서 \s(공백) 찾아서 . 으로 변경
// [], {}, /값/ >// 요거 정규표현식 객체!
console.log(result);

const str = 'This is the only one story';
console.log(str.slice(10, 4));
console.log(str.slice(10, 4));



//toString(), indexOf(), lastIndexOf(), charAt(), includes()
//concat()
const bool = true;
const obj = { key: 'data', value: 15 };
console.log(bool.toString());
console.log(obj.toString()); //문자열이 아닌 객체를 반환. 값 자체를 반환하지 않음
console.log(obj.key.toString()); //문자열 반환. 객체의 값을 반환하려면 객체의 키로 접근해야


console.log('is 1: ', str.indexOf('is',3)); //indexOf()> 찾는 값 없으면 -1반환
console.log('is 2: ', str.search('is'));
console.log('is 3: ', str.search(/is/i));
console.log(str.toUpperCase().indexOf('IS'));

console.log('5번째 문자: ', str.charAt(5)); //문자 하나만 가져오기
console.log('a 있는지: ', str.includes('a')); //t/f 반환

console.log('바꾸기: ', str.replace('is','IS'));



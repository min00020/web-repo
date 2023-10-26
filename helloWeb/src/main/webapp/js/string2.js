//string2.js

const words = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iusto animi labore voluptatum corporis laborum deserunt ex, soluta ut commodi veniam dolore suscipit voluptas magnam quam quas repellendus. Nulla, dolorib';


//[1] 공백을 기준으로 단어를 가져와서 가져온 단어의 크기가 (length) 5보다 큰 단어를 콘솔출력
let result = words.split(" ");
//words.match(/\w+/gi);

for (let i=0; i<result.length; i++){
	if (result[i].length > 5){
		console.log(result[i])
	}
}
	
	
//[2] 주민번호 입력 => 남자/여자 구분 함수
	//930305 1678955, 9303051678955, 930305-1678955 >다 되게
function checkGender(ssn){
	ssn = ssn.replace('-','');
	ssn = ssn.replace(' ','');
	if(ssn.charAt(6) == 1 || ssn.charAt(6) == 3){
		return '남자';
	}else{
		return '여자';
	}
}
console.log("<성별 구분>--------------")
console.log('	성별:', checkGender('930307232221'));
console.log('	성별:', checkGender('930305-4432221'));
console.log('	성별:', checkGender('930305 1432221'));
console.log("------------------------")


//[3] 파일명과 파일의 확장자
let file = "d:/temp/sample/abc/book.xls"
let fileName, fileExt;

result = file.split("/");

let fileLast = result[result.length -1].split(".")
//console.log(last);
fileName = fileLast[0];
fileExt = fileLast[1];

console.log('파일명: ',fileName);
console.log('확장자: ',fileExt);






const words2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iusto animi labore voluptatum corporis laborum deserunt ex, soluta ut commodi veniam dolore suscipit voluptas magnam quam quas repellendus. Nulla, dolorib';


console.log (words.replace(',',''));



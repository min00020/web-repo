//function.js

//<함수 선언>
// function myFunc(std, score = 60){ //scroe=매개변수
//     // if(score == undefined){
//     //     score = 0;
//     // } >이거보단 매개변수에 직접 넣어주는게 깔끔!
//     console.log(`${std}의 점수는 ${score}`);
//     return score; //리턴 안해주면 undefined 출력

// }
//<함수표현식>
var myFunc = function myFunc(std, score = 60) {
	// if(score == undefined){
	//     score = 0;
	// }
	console.log(`${std}의 점수는 ${score}`);
	return score; //리턴 안해주면 undefined 출력
}

//let myFunc = myFunc('홍길동'); // >이미 함수 있다고 오류발생
console.log(myFunc('홍길동')); //80,홍길동 = 매개값 (값 확정)

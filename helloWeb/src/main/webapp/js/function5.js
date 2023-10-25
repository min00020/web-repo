//function5.js
let sum1 = 0;
[10,20,30].forEach(function(num){
	sum1 += num; // consumer type:매개값을 소진, 반환값은 없음
})
console.log('forEach:', sum1);

sum1 = 0;
sum1 = [10,20,30].reduce(function(acc, item, idx, ary){
	console.log(acc, item, idx);
	return acc + item; //이렇게하면 60나옴
	//return item;
}, 0); //,0 >초기값주어지면 0부터 시작, 없으면 1부터? return item이 그 다음줄 초기값으로 쓰임
console.log('reduce:', sum1);
//function type: 매개값을 소진, 반환값을 생성 


//forEach로 하는 법
function sum2(a=0, b=0, ... args){
	console.log(args);
	let result = 0;
	result = a+b;
	args.forEach(function(num){result += num});
	//args.forEach(num => result +=num);
	return result;
}
console.log(sum2(10,20,30,40,50,60));


function sum(a=0, b=0, ... args){ //parameters
//	console.log(arguments);
//	return a + b + c + arguments[3] + arguments[4]; // 매개값아닌 것들 이렇게하면 처리가능
	console.log(args);
	return a + b + args.reduce((acc,item)=> acc+item );//배열 1- + args.forEach; // forEach: 반환되는 값 없음
}
console.log(sum(10,20,30,40,50,60)); // arguments / b,c = 0안해줄경우 b,c = undefined
// function(acc,item){return a} = (acc,item)=> a 화살표함수!




const numAry = [4,2,6,9,1,7];
let max = 0;

max = numAry.reduce((acc,item) => acc>item ? acc:item);

console.log('최대값:',max);

let min = 0;
min = numAry.reduce((acc,item)=>acc<item ? acc:item);
console.log('최소값:',min);

min = 0;
min = numAry.reduce(function(acc,item){
	if(acc<item){
		item=acc;
	}
	return acc;
})
console.log(min);
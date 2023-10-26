//object6
//140p. Map,Set
const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);
map.set("김길동", 90); //위의 값 수정됨

//map.delete("김길동");
const refval = [12];
console.log([12]==[12]); //false나옴!
map.set(refval,88);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for(let ent of map.entries()){//키와 값을 배열타입으로 반환
	console.log('-이름: ', ent[0], '점수: ', ent[1]);
}

map.forEach(function(val, key, map){
	if(key == "홍길동")
	console.log('-점수: ',val, key, map);
})

//맵<ㅡ>배열
const ary = [['프로도',3],['라이언',5],['어피치',4]]
const fmap = new Map(ary); // Map(생성자: 배열);

for(let ent of fmap.entries()){
	console.log('*키:', ent[0], ', 값:', ent[1]);
}

const entries = fmap.entries();
console.log('*엔트리:',entries);
console.log(Array.from(fmap)); //정적메소드>선언 안해도 클래스명.메소드()하면 불러올 수 있음

console.clear;


//144p. Set: 중복값 허용 X
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add(["어피치",4]);
set1.add(["어피치",4]); //객체[] 두 개 넣으면 set크기 4됨 그냥 이름만 동일하게 넣으면 3

console.log('set size: ', set1.size); //배열은 length, set은 size
set1.forEach(function(val, item, set){
	console.log(val, item, set);
})

//셋 <ㅡ> 배열
const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry);
console.log('set size: ', set2.size);
console.log(Array.from(set2)); //셋 타입 > 배열
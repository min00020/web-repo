//array3.js
let pos = "Hello, World".indexOf(",");
console.log(pos);

let names = ["콘", "무지", "라이언", "어피치"]
pos = names.indexOf("무시");

if (pos == -1) {
	console.log("찾는 이름이 없습니다.")
} else {
	console.log("무지: " + (pos + 1) + "번째에 위치");
}
console.log("--------------------------")

//{name: "", age: 20}
let members = [
	{ name: "김민식", age: 22 },
	{ name: "최민식", age: 23 },
	{ name: "김우현", age: 26 }
]
console.log(members);

let search = "민식";

let cnt = 0;
members.forEach(member => {
	searchName = member.name.search(search)
	if (searchName == 1) {
		console.log("찾은 결과: " + member.name);
	}
	if (member.name.indexOf(search) > -1) {
		cnt++;
	}
})
console.log(cnt + "명이 있습니다.");


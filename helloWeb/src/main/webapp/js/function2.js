//function2.js
console.log('function2.js');
//Membe member = new Member();
    const member1 = {
        name: "홍길동",
        age: 18,
        height: 178.9, //자바의 필드 속성
        showInfo: function(){
           return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
        }
    }// 중괄호:자스에서 객체 만드는 방법
        //member1.showInfo();
        //console.log(member);
    const member2 = {
        name: "김길동",
        age: 19,
        height: 179.9, //자바의 필드 속성
        showInfo: function(){
           return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
        }
    }
    const member3 = {
        name: "박길동",
        age: 20,
        height: 180.9, //자바의 필드 속성
        showInfo: function(){
           return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
        }
    } 
     const members = [member1,member2,member3]


let show = document.getElementById('show'); // table>thead>tr>th, tbody>tr>td
// show.innerHTML = "<ul><li>Apple</li><li>Banana</li></ul>"
// show.innerText = "<ul><li>Apple</li><li>Banana</li></ul>"

//코드작성

let str = "";
str += '<table border ="1">';
str += '<tbody>'
members.forEach(function(item){
    str += makeTr(item);
})
str += '</tbody>'
str += '</table>'

//console.log(str);
show.innerHTML = str; // table>tbody>{tr>td*4}*3

function makeTr(member = {name,age,height,showInfo}){ //={}없어도 됨 / 멤버에 오는 타입이 오브젝트로 오도록 지정
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>'+ member.age + '</td>';
    html += '<td>'+ member.height + '</td>';
    html += '<td>'+ member.showInfo() + '</td>';
    html += '</tr>';

    return html;
}

//console.log(makeTr(member));
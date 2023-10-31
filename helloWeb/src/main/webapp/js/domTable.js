//domTable.js

export default { //export 이름 안정해주고 생성 > import할 때 이름 정해주고 쓰면 됨
	makeHead: function(titles=['아이디','센터명']){
		//thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(title=>{
			let th = document.createElement('th');
			th.innerHTML = title;
			tr.append(th);
		})
		thead.append(tr);
		return thead;
	},
	makeBody: function(dataAry=[]){
		let tbody = document.createElement('tbody');
		dataAry.forEach(item => {
			tbody.append(this.makeTr(item));
		})
		return tbody;
	},
	makeTr: function(center={}){
		let tr = document.createElement('tr');
		for(let prop in center){
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}
	
}
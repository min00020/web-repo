//test2.js

const novemberCal = {
	makeHead(){
	const days = ['일','월','화','수','목','금','토']
		return days.reduce((acc,day)=>{
			return acc + '<th>' + day + '</th>';
		}, '<thead><tr>')
	},
	makeBody(){
		let tr = '</tr></thead><tbody>';
		tr += '<td>'+''+'</td><td>'+''+'</td><td>'+''+'</td>';
		for(let i=1; i<=30; i++){
			if(i % 7 == 4){
				tr += '<td>'+i+'</td></tr><tr>';
			}else{
				tr+= '<td>'+i+'</td>'
			}
		}//end for
		tr += '</tr></tbody>'
		return tr;
	},
	show(){
		let table = "";
		table += '<table border="1">';
		table+= this.makeHead();
		table+= this.makeBody();
		table+='</table>';
		document.getElementById('show').innerHTML += table;
		return table;
	}
	
}
novemberCal.show();

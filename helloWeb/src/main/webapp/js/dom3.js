//dom3.js
//table > (thead>tr>th*n) + (tbody>tr>td*n)
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=U821VfA5hADILGojdxLxFYmmYK8nvbBRqD1x4IMf5uiOX2fnMsa%2BxgX7alw4768wbpmXjCQvTlivD11G5R9HcA%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처', '위도값', '경도값'];

fetch(url)
	.then(resolve => resolve.json())//function(resolve){ return resolve.json()}
	.then(fetchCallback)
	.catch(err => console.log('error', err));

//fetch 호출되는 함수 callback함수
function fetchCallback(result) {
	let rawData = result.data; //원래 데이터
	//console.log(rawData[0]);
	let sidoAry = []; //sidoAry sido정보를 중복된 값제거
	rawData.forEach(center => {
		if (sidoAry.indexOf(center.sido) == -1) {
			sidoAry.push(center.sido);
		}
	})
	let sidoSel = document.querySelector('#sidoList')
	sidoAry.forEach(sido => {
		let opt = document.createElement('option');
		opt.innerHTML = sido;
		sidoSel.append(opt);
	})
	//select 태그 선택하면 change event 발생 > 이벤트 핸들러로 연결
	sidoSel.addEventListener('change', changeCallback);
	//addEventListener('change', function(e){}) 이벤트(체인지)실행되면 익명함수 실행해라
	//changeCallback()> 이벤트 등록할 때 실행됨 // ()없이 불러와야 이벤트가 실행될 때 함수도 실행됨
	function changeCallback(e) {
		//console.log(e.target.value); //e만출력> target: select#sidoList
		let searchSido = e.target.value;
		let filterAry = rawData.filter(center => center.sido == searchSido);
		genTable(filterAry);
		//선택된 시도값에 맞는 센터명만 출력
	}
	let filterAry = rawData.filter((center, idx) => idx < 10);
	genTable(filterAry);
}



function genTable(rawData = []) {
	//전체(rawData)로 출력
	document.querySelector('#show').innerHTML = ''; //초기화

	let thead = table.makeHead(titles); //헤더정보
	let mapData1 = rawData.map(center => { //매핑정보
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		return newCenter;
	});
	//console.log('map: ', mapData1);

	let mapData = rawData.reduce((acc, center) => {
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		acc.push(newCenter);
		return acc;
	}, []);
	//console.log('reduce:', mapData);

	let tbody = table.makeBody(mapData); // [{},{},{}...] 배열 안에 객체
	let tbl = document.createElement('table');
	tbl.setAttribute('border', 1);
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);

	//tr 클릭 event 등록
	let targetTr = document.querySelectorAll('tbody tr'); //th빼고 가져오기
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			console.log(tr);
			let lat = tr.children[4].innerHTML;
			let lng = tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x=' + lat + '&y=' + lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);
		})
	})

}

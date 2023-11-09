<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {
    	  packages:["corechart"]
      });
      google.charts.setOnLoadCallback(drawChart);
      
      function drawChart() {
    	  fetch('drawChart.do')
    	  .then(resolve => resolve.json())
    	  .then(result => {
    		  //console.log('fetch result:',result) //result는 {}객체타입인데 >> []로 바꿔야함
    		  let dataAry = [['Writer','Cnt']];
    		  result.forEach(item => {
    			  dataAry.push([item.REPLYER, item.CNT]) //[item.replyer, item.cnt]
    		  }) // [['writer', 'cnt'],[,],[,]...]
    		console.log('dataAry: ', dataAry);
    		var data = google.visualization.arrayToDataTable(dataAry);

    	    var options = {
    	          title: '작성자 댓글 건수',
    	          is3D: true,
    	          slices: {
    	              0: { color: 'lightgray' },
    	              1: { color: 'purple' },
    	              2: { color: 'lightblue' },
    	              3: { color: 'lightpink' },
    	              4: { color: 'gray' }
    	            }
    	        };

    	    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    	    chart.draw(data, options);
    	  })
    	  .catch(err => console.log(err))
    	  
      
      }
    </script>
    
<div id="piechart_3d" style="width: 900px; height: 500px;"></div>
<jsp:include page="../layout/footer.jsp"></jsp:include>
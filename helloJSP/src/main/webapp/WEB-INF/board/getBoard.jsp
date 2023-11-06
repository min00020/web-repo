<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>getBoard.jsp</title>
</head>
<body>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<h3>상세화면(조회화면)</h3>
	<form action="modifyForm.do" name="myFrm"> <!-- 화면으로 갔다가 그 화면에서 값 바꿔야 -->
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
		<table border="1">
			<tr>
				<th>글번호</th>
				<td><%=vo.getBoardNo()%></td>
				<th>작성일자</th>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<tr>
				<th>글제목</th>
				<td colspan="3"><%=vo.getTitle()%></td>
			</tr>
			<tr>
				<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea>
				</td>
			</tr>
			<tr>
				<th>이미지</th>
				<td colspan="3"><img width="80px"
					src="images/<%=vo.getImage()%>"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><%=vo.getWriter()%></td>
				<th>조회수</th>
				<td><%=vo.getViewCnt()%></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="수정">
					<input type="button" value="삭제">
				</td>
			</tr>
		</table>
	</form>
	<p>
		<a href="boardList.do">목록으로</a>
		<script>
		document.querySelector('input[type=button]').addEventListener('click',function(e){
			document.forms.myFrm.action = 'removeForm.do'; //'removeForm.do'안하면 modify로 가니까
			document.forms.myFrm.submit(); //
		})</script>
</body>
</html>
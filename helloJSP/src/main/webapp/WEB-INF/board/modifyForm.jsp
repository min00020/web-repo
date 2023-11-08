<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>

	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post">
	<input type="hidden" name="bno" value="${vo.boardNo }">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input class="form-control" type="text" name="title" value="${vo.title }"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input class="form-control" type="text" name="writer" value="${vo.writer }"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea class="form-control" cols="40" rows="5" name="content">${vo.content }</textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td>
					<c:if test="${!empty vo.image }">
						<img src="images/${vo.image }" width="80px">
					</c:if>
				</td>
			</tr>

			<tr>
				<td colspan="2" align="center">
					<input type="submit" class="btn btn-primary" value="수정"> 
					<input	type="reset" class="btn btn-warning" value="초기화">
				</td>
			</tr>
		</table>
	</form>
<%@include file="../layout/footer.jsp" %>
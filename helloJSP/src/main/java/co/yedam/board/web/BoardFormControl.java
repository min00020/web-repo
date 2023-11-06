package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Command;

public class BoardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 페이지만 연결해줌. 처리하는 거 없음
		HttpSession session = req.getSession();
		if (session.getAttribute("logId") == null) { //로그인정보 없으면 폼으로 이동
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else { //로그인되면 등록화면으로
			try {
				req.getRequestDispatcher("WEB-INF/board/boardForm.jsp").forward(req, resp); 
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}

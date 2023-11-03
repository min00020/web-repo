package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;

public class BoardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//페이지만 연결해줌. 처리하는 거 없음
		try {
			req.getRequestDispatcher("WEB-INF/board/boardForm.jsp").forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}

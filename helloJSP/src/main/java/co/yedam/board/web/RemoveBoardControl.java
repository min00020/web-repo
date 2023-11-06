package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 삭제하고 목록 가는 걸로
		String bno = req.getParameter("bno");

		BoardService svc = new BoardServiceImpl();
		if (svc.removeBoard(Integer.parseInt(bno))) { // 정상처리시 목록으로 이동
			try {
				resp.sendRedirect("boardList.do"); // 재지정>다시 컨트롤러 찾아서>보드리스트 실행
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("removeForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

}

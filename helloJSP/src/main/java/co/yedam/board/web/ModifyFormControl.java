package co.yedam.board.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//수정화면오픈
		String bno = req.getParameter("bno"); //파라메터를 받으면
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno)); //그 파라메터로 전체값 넘겨받음
		req.setAttribute("vo", vo);
		try {
			req.getRequestDispatcher("WEB-INF/board/modifyForm.jsp").forward(req, resp); //넘겨주면서 페이지 재지정
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}

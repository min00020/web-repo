package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class GetBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//boardNo: 1 => DB search => 요청정보에 담아 jsp에 전달
		String bno = req.getParameter("bno");
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		System.out.println(vo);
		req.setAttribute("bno", vo);
		
		//요청재지정
		try {
			req.getRequestDispatcher("WEB-INF/board/getBoard.jsp").forward(req, resp);//이동할 페이지 지정하고>forward
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
	}

}

package co.yedam.board.web;


import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String path = "board/boardList.tiles";
		
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		//list.add(new BoardVO());
		
		req.setAttribute("list", list);
		
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/boardList.jsp"); //외부에서 직접 접근 못하게 웹INF로 jsp 옮기기
		
		try {
			req.getRequestDispatcher(path).forward(req, resp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

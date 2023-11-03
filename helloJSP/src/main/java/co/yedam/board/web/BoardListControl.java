package co.yedam.board.web;

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
		// 서블릿,jsp: 서블릿(컨트롤:데이터처리) > jsp(view)

		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		
		req.setAttribute("list", list); //req값 boardList.jsp //요청정보(req)에 list에 값 담아서 페이지 전송
		
		//페이지요청(boardList.do) > 요청재지정 (board/boardList.jsp)
		//do 주소치면 > boardList.jsp를 보여주도록함 (html jsp페이지에 만들면 편하니까)
		//RequestDispatcher rd = req.getRequestDispatcher("board/boardList.jsp"); // 서블릿페이지에서 다른 페이지에 이동할 정보들 넣어줌foward라는
		
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/boardList.jsp"); //외부에서 직접 접근 못하게 웹INF로 jsp 옮기기
		try {
			rd.forward(req, resp); // RequestDispatcher 기능중에 forward라는 기능이 있음
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}

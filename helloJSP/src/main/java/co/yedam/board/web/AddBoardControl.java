package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String title = req.getParameter("title");
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");
		
		BoardVO vo = new BoardVO();
		vo.setTitle(title);
		vo.setWriter(writer);
		vo.setContent(content);
		
		 BoardService svc = new BoardServiceImpl();
		 if(svc.addBoard(vo)) { //정상처리시 목록으로 이동
			 try {
				resp.sendRedirect("boardList.do"); // 재지정>다시 컨트롤러 찾아서>보드리스트 실행
			} catch (IOException e) {
				e.printStackTrace();
			} 
		 }else {
			 try {
				resp.sendRedirect("boardForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		 }
		
	}

}

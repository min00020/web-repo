package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command {
	BoardVO vo = new BoardVO();

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 파라메터 활용>데이터수정>목록이동
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");

		System.out.println("조회"+vo);
		vo.setBoardNo(Integer.parseInt(bno));
		vo.setTitle(title);
		vo.setWriter(writer);
		vo.setContent(content);

		BoardService svc = new BoardServiceImpl();

		if (svc.editBoard(vo)) { // 정상처리시 목록으로 이동
			try {
				resp.sendRedirect("boardList.do"); // 재지정>다시 컨트롤러 찾아서>보드리스트 실행
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("modifyForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}// execute
}

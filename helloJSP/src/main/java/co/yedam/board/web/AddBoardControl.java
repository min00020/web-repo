package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {
	BoardVO vo = new BoardVO();
	
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		if (req.getMethod().equals("GET")) {
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");

			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(content);

		} else if (req.getMethod().equals("POST")) {
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5 * 1024 * 1024;
			// MultipartRequest mr; 멀티파트요청을 완료하면
			try {
				MultipartRequest mr = new MultipartRequest(req, saveDir, size, "utf-8", new DefaultFileRenamePolicy());
				// 요청정보, 저장경로,,,리네임정책
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");

				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setImage(img);
				vo.setContent(content);
				
			} catch (IOException e) {
				e.printStackTrace();
			}
		} // end else if
		
		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) { // 정상처리시 목록으로 이동
			try {
				resp.sendRedirect("boardList.do"); // 재지정>다시 컨트롤러 찾아서>보드리스트 실행
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("boardForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}// execute

}

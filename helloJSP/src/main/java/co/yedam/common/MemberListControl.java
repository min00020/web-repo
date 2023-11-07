package co.yedam.common;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MemberListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		BoardService svc = new BoardServiceImpl();
		List<MemberVO> list = svc.memberList();
		
		req.setAttribute("memberList", list);
		System.out.println(list);
		
		//HttpServletResponse >페이지만 열어주는거고 RequestDispatcher는 
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/main/memberList.jsp"); //외부에서 직접 접근 못하게 웹INF로 jsp 옮기기
		try {
			rd.forward(req, resp); 
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}

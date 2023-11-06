package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("id");
		String pw = req.getParameter("pass"); //login.do로 넘기기
		
		BoardService svc = new BoardServiceImpl();
		//MemberVO vo = svc.loginCheck(id, pw);
		//if(vo != null) {
		//}
		
		MemberVO vo = svc.loginCheck(id,pw);
		if( vo != null) {
			//클라이언트 접속시 고유한 세션 정보 생성 //원래 리퀘스트에 담아서 넘겼는데 리퀘스트는 계속 리프레시됨 
			//그러나 세션은 한번 접속해서 웹 브라우저 닫기 전에는 그 값 서버가 계속 가지고있음 //로그인 아이디를 그 세션에 담아야.
			//session : 서버-클라이언트
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);
			session.setAttribute("responsibility", vo.getResponsibility());
			
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
	}

}

package co.yedam.common;

import java.io.IOException;
import java.lang.ModuleLayer.Controller;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;
import co.yedam.reply.web.AddReplyControl;
import co.yedam.reply.web.RemoveReplyControl;
import co.yedam.reply.web.ReplyListControl;

//url:*.do 실행되도록 
public class FrontController extends HttpServlet {

	// init > service
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
		// url값이랑 실행할 servlet
		// map.put("/FirstServlet.do", new FirstControl()); //인터페이스(Command) 구현하는 구현클래스를 커맨드란 값에 넣음
		// map.put("/second.do", new SecondControl()); //(key, vaule)
		map.put("/main.do", new MainControl());
		
		//로그인, 로그아웃
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		
		//게시판 목록
		map.put("/boardList.do", new BoardListControl()); //"boardList.do"가 실행되면 > BoardListControl()
		map.put("/getBoard.do", new GetBoardControl());
		
		//등록화면
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		//수정화면
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		//삭제화면
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
		
		//관리자 멤버 조회
		map.put("/memberList.do", new MemberListControl());
		
		//댓글목록
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
		map.put("/removeReply.do", new RemoveReplyControl());
		
	}

	@Override //호출할 때마다 실행하는건 서비스, init은 처음에만 실행
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		System.out.println("FrontController");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 어떤 페이지 요청했는지 보여줌
		String context = req.getServletContext().getContextPath(); // helloJSP / ContextPath:실제경로, getContextPath() = 프로젝트 이름
		String page = uri.substring(context.length()); 
		System.out.println(page); //어떤페이지 요청했는지 알고싶어서 조회
		

		Command controller = map.get(page);
		System.out.println(page);
		controller.execute(req, resp);

//		if(page.equals("/second.do")) {
//			
//		}else if(page.equals("/FirstServlet.do")) {
//			
//		}

	}
}

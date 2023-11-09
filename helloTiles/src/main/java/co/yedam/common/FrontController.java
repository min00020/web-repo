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

import co.yedam.admin.web.MemberListControl;
import co.yedam.board.web.BoardListControl;


//url:*.do 실행되도록 
public class FrontController extends HttpServlet {

	// init > service
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
	
		map.put("/boardList.do", new BoardListControl()); //"boardList.do"가 실행되면 > BoardListControl()
		map.put("/memberList.do", new MemberListControl() );
	
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

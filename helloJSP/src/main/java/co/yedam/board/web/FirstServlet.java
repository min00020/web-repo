package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	//init > service > 서버가 stop되면 destroy
	public FirstServlet() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		 System.out.println("service 실행");
		 //service있으면 service실행되고 / 없으면 doGet doPost
		 doGet(req,resp);
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
		
		String name = "홍길동";
		int age = 20;
		for (int i = 1; i <= 5; i++) {
			response.getWriter().print("<p>" + i + "번째 이름은 " + name + "이고 나이는 " + age + "입니다");
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

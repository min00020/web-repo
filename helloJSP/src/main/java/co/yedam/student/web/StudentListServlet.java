package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/studentList.do")
public class StudentListServlet extends HttpServlet { // HttpServlet > 자바 기능
	// 생명주기: init > service > destroy
	//

	public StudentListServlet() {
		System.out.println("생성자 call");
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init call");

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Enumeration<String> enumer = req.getHeaderNames();
		while (enumer.hasMoreElements()) {
			String header = enumer.nextElement();
			String val = req.getHeader(header);
			System.out.println(header + ":" + val);
		}
		//studentList.do?name=Hong&age=20
		String name = req.getParameter("name"); //사용자가 전송한 정보 읽기
		String age = req.getParameter("age");
		System.out.println(name + "," + age);
		System.out.println("service call"); // 새로고침하면 이것만 다시 실행됨
		
		//응답정보의 컨텐트타입, 인코딩처리
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");
		
		//학생정보 json 전송.
		StudentService svc = new StudentServiceImpl();
		List<StudentVO> list = svc.listStudent();
		
		// 객체 > json문자열로 변경
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list); 
		
		
		PrintWriter out = resp.getWriter(); //클라이언트한테 연결되어있는 출력스트림 쓰기
		out.println(json);
	}

	@Override
	public void destroy() {
		System.out.println("destroy call");
	}
}

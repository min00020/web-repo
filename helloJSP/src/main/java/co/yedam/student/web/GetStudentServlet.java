package co.yedam.student.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

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

@WebServlet("/getStudent.do")
public class GetStudentServlet extends HttpServlet{
	
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//service: parameter(??)
		//아이디 넘겨주면>getStudent(sid)
		//호출하는 영역으로 값 다시 넘겨줘야
		
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");
		
		String id = req.getParameter("sid");
		
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = svc.getStudent(id);
		
		Map<String, Object> map = new HashMap<>();
		
		if(svc.getStudent(id) != null) {
			System.out.println(vo);
			map.put("retCode", "OK");
			map.put("vo",vo);
			//resp.getWriter().print("{\"retCode\":\"OK\"}");
		}else {
			map.put("retCode", "NG");
			//resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map); // vo: 자바객체
		resp.getWriter().print(json);
		System.out.println(json);
	}

}

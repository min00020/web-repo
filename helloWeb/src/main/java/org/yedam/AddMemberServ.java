package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AddMemberServ() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// ?mid=M009&pass=9999&name=Kim&phone=010-9876-0987 <파라메터 이렇게 넘김!!중!!요!!
		// (mid,pass,name,phone) { mid .... }
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");

		// 멤버인스턴스 선언.
		MemberVO vo = new MemberVO(mid, pass, name, phone);

		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();

		// Map.
		Map<String, Object> map = new HashMap<>();

		if (svc.addMember(vo)) {
			// out.print("{\"retCode\" : \"OK\"}");// 처리하다 에러나면 요 코드 띄움
			map.put("retCode", "OK");
			map.put("vo", vo); // 성공이면 vo도 같이 넘기기
		} else {
			// out.print("{\"retCode\" : \"NG\"}");
			// out.print(json);
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		}
		String json = gson.toJson(map); // vo: 자바객체
		out.print(json); // json으로 문자열 출력하겠다
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogoutControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		req.getSession().invalidate(); //session 정보 지워주는 메소드
		
		try {
			resp.sendRedirect("main.do"); //세션 삭제 후 main으로 이동
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}

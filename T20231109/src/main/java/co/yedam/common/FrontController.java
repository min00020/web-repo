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

import co.yedam.product.web.ProductInfoControl;
import co.yedam.product.web.ProductListControl;



//url:*.do 실행되도록 
public class FrontController extends HttpServlet {

	// init > service
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
	
		map.put("/productList.do", new ProductListControl()); 
		map.put("/productInfo.do", new ProductInfoControl());

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=utf-8");
		
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 어떤 페이지 요청했는지 보여줌
		String context = req.getServletContext().getContextPath(); // helloJSP / ContextPath:실제경로, getContextPath() = 프로젝트 이름
		String page = uri.substring(context.length()); 
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		System.out.println(page); //페이지 조회

	}
}

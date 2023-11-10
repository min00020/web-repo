package co.yedam.product.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String path = "product/productList.tiles";
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.productList();
		
		req.setAttribute("list", list);
		System.out.println("ProductListControl: "+ list);
		
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/product/productList.jsp");
		
		try {
			req.getRequestDispatcher(path).forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}

package org.yedam.common;

import java.sql.*;

public class DataSource {
	private static DataSource dataSource = new DataSource();
	private DataSource() {}
	
	private static String driver = "oracle.jdbc.OracleDriver";
	private static String url = "jdbc:oracle:thin:@192.168.0.38:1521:xe"; //오라클 인사관리>속성>하단에 주소 있음
	private static String user = "hr";
	private static String password = "1234";
	
	
	private static Connection conn;
	
	
	public static DataSource getInstance() {
		return dataSource;
	}

	public Connection getConnection() {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url,user,password);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
}

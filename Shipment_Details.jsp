<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import="java.sql.*" %>
 <%
	final String JDBC_DRIVER="com.mysql.jdbc.Driver";
	final String DB_URL="jdbc:mysql://localhost:3306/miniproject";
	final String USER="root";
	final String PASS="";
	Connection conn=null;
	Statement stmt=null;
  try
  {
	  out.println("Connecting to database....");
  	 Class.forName("com.mysql.jdbc.Driver");
	out.println("Connecting to database....");
	conn=DriverManager.getConnection(DB_URL,USER,PASS);
	out.println("Creating statement");
	stmt=conn.createStatement();
	
	String package_weight = request.getParameter("weight");
	String package_L = request.getParameter("L");
	String package_W = request.getParameter("W");
	String package_H = request.getParameter("H");
	String package_content = request.getParameter("content");
	String package_purpose = request.getParameter("purpose");
	String package_invoice_value = request.getParameter("invoice_value");
	String package_freight = request.getParameter("freight");
	String package_carriage = request.getParameter("carriage");
	
	String sql1;
	sql1 = "INSERT into package(package_weight,package_L,pacage_W,package_H,package_content,package_purpose,package_invoice_value,package_freight,package_carriage) VALUES('"+package_weight+"','"+package_L+"','"+package_W+"','"+package_H+"','"+package_content+"','"+package_purpose+"','"+package_invoice_value+"','"+package_freight+"','"+package_carriage+"')";
	stmt.executeUpdate(sql1);

	
%>
<jsp:forward page="Payment.html"/>
<%	
	stmt.close();
	conn.close();
  }
  catch(Exception e)
  {
	out.println(e);
  }
  
   %>
</body>
</html>
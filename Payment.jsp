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
	
	String shipment_billto = request.getParameter("bill_to1");
	String shipment_accno = request.getParameter("Sendelope_accno1");
		
	String sql1;
	sql1 = "INSERT into shipment_pay(bill_to,acc_no) VALUES('"+shipment_billto+"','"+shipment_accno+"')";
	stmt.executeUpdate(sql1);

	String duty_billto = request.getParameter("bill_to2");
	String duty_accno = request.getParameter("Sendelope_accno2");
		
	String sql2;
	sql2 = "INSERT into duty_pay(duty_bollto,acc_no) VALUES('"+duty_billto+"','"+duty_accno+"')";
	stmt.executeUpdate(sql2);






%>
<jsp:forward page="trackframe.html"/>
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
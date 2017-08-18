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
	
	String sender_name = request.getParameter("from_name");
	String sender_company = request.getParameter("from_company");
	String sender_country = request.getParameter("from_country");
	String sender_street = request.getParameter("from_street");
	String sender_floor = request.getParameter("from_floor");
	String sender_post = request.getParameter("from_post");
	String sender_city = request.getParameter("from_city");
	String sender_state = request.getParameter("from_state");
	String sender_phone = request.getParameter("from_phone");
	String sender_email = request.getParameter("from_email");
	String sender_vat = request.getParameter("from_vat");

	
	String sql1;
	sql1 = "INSERT into sender_address(sender_name,sender_company,sender_country,sender_street,sender_floor,sender_post,sender_city,sender_state,sender_phone,sender_email,sender_vat) VALUES('"+sender_name+"','"+sender_company+"','"+sender_country+"','"+sender_street+"','"+sender_floor+"','"+sender_post+"','"+sender_city+"','"+sender_state+"','"+sender_phone+"','"+sender_email+"','"+sender_vat+"')";
	
	stmt.executeUpdate(sql1);

	String receiver_name = request.getParameter("to_name");
	String receiver_company = request.getParameter("to_company");
	String receiver_country = request.getParameter("to_country");
	String receiver_street = request.getParameter("to_street");
	String receiver_floor = request.getParameter("to_floor");
	String receiver_post = request.getParameter("to_post");
	String receiver_city = request.getParameter("to_city");
	String receiver_state = request.getParameter("to_state");
	String receiver_phone = request.getParameter("to_phone");
	String receiver_email = request.getParameter("to_email");
	String receiver_vat = request.getParameter("to_vat");
	System.out.print(receiver_name);
	
	String sql2;
	sql2 = "INSERT into receiver_address(receiver_name,receiver_company,receiver_country,receiver_street,receiver_floor,receiver_post,receiver_city,receiver_state,receiver_phone,receiver_email,receiver_vat) VALUES('"+receiver_name+"','"+receiver_company+"','"+receiver_country+"','"+receiver_street+"','"+receiver_floor+"','"+receiver_post+"','"+receiver_city+"','"+receiver_state+"','"+receiver_phone+"','"+receiver_email+"','"+receiver_vat+"')";
	stmt.executeUpdate(sql2);





%>
<jsp:forward page="Shipment_Details.html"></jsp:forward>
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
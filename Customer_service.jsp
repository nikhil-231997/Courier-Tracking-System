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
	final String DB_URL="jdbc:mysql://localhost:3306/courier";
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
	
	String customer_accno = request.getParameter("customer_accno");
	String customer_fname = request.getParameter("customer_fname");
	String customer_lname = request.getParameter("customer_lname");
	String customer_company = request.getParameter("customer_company");
	String customer_country = request.getParameter("customer_country");
	String customer_street = request.getParameter("customer_street");
	String customer_floor = request.getParameter("customer_floor");
	String customer_post = request.getParameter("customer_post");
	String customer_city = request.getParameter("customer_city");
	String customer_state = request.getParameter("customer_state");
	String customer_phone = request.getParameter("customer_phone");
	String customer_email = request.getParameter("customer_email");
	String customer_vat = request.getParameter("customer_vat");
	String customer_msg_dest = request.getParameter("msg_dest");
	
	String sql1;
	sql1 = "INSERT into customer_feedback(customer_accno,customer_fname,customer_lname,customer_company,customer_country,customer_street,customer_floor,customer_post,customer_city,customer_state,customer_phone,customer_email,customer_vat,customer_msg_dest) VALUES('"+customer_accno+"','"+customer_fname+"','"+customer_lname+"','"+customer_company+"','"+customer_country+"','"+customer_street+"','"+customer_floor+"','"+customer_post+"','"+customer_city+"','"+customer_state+"','"+customer_phone+"','"+customer_email+"','"+customer_vat+"','"+customer_msg_dest+"')";
	stmt.executeUpdate(sql1);

	
%>
<jsp:forward page="Shipping_Details.html"/>
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
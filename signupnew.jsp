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
	String uname=request.getParameter("UserId");
	String pass=request.getParameter("Password");
	String conpass=request.getParameter("confirmpassword");
	String secretq=request.getParameter("secretQ");
	String secreta=request.getParameter("Answer");
	String fname=request.getParameter("FirstName");
	String lname=request.getParameter("LastName");
	String country=request.getParameter("Country");
	String zip=request.getParameter("zip");
	String add1=request.getParameter("Address1");
	String add2=request.getParameter("Address2");
	String city=request.getParameter("City");
	String email=request.getParameter("Useremail");
	int uid=0;
	String sql;
	sql="INSERT into signup(uid,username,password,confirmpass,sanwer,email,address1,fname,lname,postal,address2,city,country) VALUES('"+uid+"','"+uname+"','"+pass+"','"+conpass+"','"+secreta+"','"+email+"','"+add1+"','"+fname+"','"+lname+"','"+zip+"','"+add2+"','"+city+"','"+country+"')";
	stmt.executeUpdate(sql);
%>
<jsp:forward page="login.jsp"/>
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
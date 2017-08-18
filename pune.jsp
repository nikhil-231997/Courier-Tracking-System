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
	boolean valid=false;
	try
  {
	 out.println("Connecting to database....");
  	 Class.forName("com.mysql.jdbc.Driver");
	 out.println("Connecting to database....");
	 conn=DriverManager.getConnection(DB_URL,USER,PASS);
	 out.println("Creating statement");
	 stmt=conn.createStatement();
	 String trackingno=request.getParameter("tracking_no");
     String received=request.getParameter("received");
	 String sql;
	 out.println(trackingno);
	 out.println(received);
	 sql="INSERT into pune(tracking_no,received) VALUES('"+trackingno+"','"+received+"')";
	 out.println(sql);
	 stmt.executeUpdate(sql);
  }
	catch(Exception e)
	{
		e.printStackTrace();
	}
	%>
</body>
</html>
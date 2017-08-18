<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome</title>
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
	 String username=request.getParameter("username");
     String userpass=request.getParameter("userpassword");
	 String sql;
	 sql="Select * from signup where username='"+username+"'AND password='"+userpass+"'";
	 ResultSet rs=stmt.executeQuery(sql);
	
	while(rs.next())
	{
		String dbuser=rs.getString("username");
		String dbpass=rs.getString("password");
		if(username.equals(dbuser) && userpass.equals(dbpass))
		{
			valid=true;
		}
	}
	if(valid==true)
	{	
		if(request.getParameter("remember_me")!=null)
		{
			
			Cookie c1 = new Cookie("user",username);
			
			c1.setMaxAge(24*60*60);
			response.addCookie(c1);
			
			Cookie c2 = new Cookie("pass",userpass);
			
			c2.setMaxAge(24*60*60);
			response.addCookie(c2);
		}	
			request.getSession();
			session.setAttribute("username",username);
			session.setAttribute("password",userpass);
		
		out.println("you are a valid user");
		
%>
		<jsp:forward page="navbareg.jsp"/>
<%
				
	}
	else
	{
		 
		 request.setAttribute("errorMessage", "Invalid User Id or Password !!!");
         RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
         rd.forward(request, response); 
		out.println("Not a valid user");
	}
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
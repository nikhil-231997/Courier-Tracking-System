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
	boolean validm=false;
	try
  {
	 out.println("Connecting to database....");
  	 Class.forName("com.mysql.jdbc.Driver");
	 out.println("Connecting to database....");
	 conn=DriverManager.getConnection(DB_URL,USER,PASS);
	 out.println("Creating statement");
	 stmt=conn.createStatement();
	 String trackingno=request.getParameter("tracking_no");
	 String sql1;
	 sql1="Select * from mumbai where tracking_no="+trackingno;
	 ResultSet rs=stmt.executeQuery(sql1);

	 
	while(rs.next())
	{
		String dbtrackingno=rs.getString("tracking_no");
		String dbreceived=rs.getString("received");
		if(dbtrackingno.equals(trackingno) && dbreceived.equals("Yes"))
		{
			validm=true;
		}
	}

	 if(validm==true)
		{
			out.println("Your courier has been dispatched from Mumbai");
		}
		else
		{
			out.println("Your courier is not yet dispatched from Mumbai");
		
		}
	 %>
    <jsp:forward page="trackframepune.jsp"/>
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
<!DOCTYPE html>
<html>
<head>
  <title>Sendelope.com</title>

  <script type=text/javascript src="jquery-3.1.1.min.js"></script>
  <script>
  
    $(document).ready(function(){
        $("button").click(function(){
        if($(".user_id input").val()==="")
      {
              $(".user_id span").show(function(){$(this).css({"text-align":"center","margin-left":"60px","color":"red","font-size":"18px"});});
              $(".user_id input").css("background-color","lightgrey");
              $(".user_id input").focus();
              return false;
      }
      if($(".user_password input").val()==="")
    {
            $(".user_password span").show(function(){$(this).css({"text-align":"center","margin-left":"80px","color":"red","font-size":"18px"});});
            $(".user_password input").css("background-color","lightgrey");
            $(".user_password input").focus();
            return false;
    }
                                });
      });


  </script>
  <style>
    body
    {
      background-color:rgb(128,128,128);
      background-repeat:no-repeat;
      background-size: cover;
    }
    h1
    {
      font-size:100px;
      color:purple;
    }
    h2
    {
      color:purple;
    }
    h3
    {
      color:red;
    }
    .user_id,.user_password
    {
      font-size:20px;
    
    }
    #submit
    {
      background-color:purple;
      font-size:20px;
    }

    h1,h2,form
    {
      text-align: center;

    }
    a
    {
      color:white;
    }
    span
    {
      display:none;
    }
  </style>
</head>
<body>

<%

	Cookie cookies[] = request.getCookies();
	String username = "";
	String password = "";
	
	for(Cookie c : cookies)
	{
	
		if(c.getName().equals("user"))
		{
			username= c.getValue();	
		}
		else if(c.getName().equals("pass"))
		{
			password= c.getValue();
		}
	}

%>

  <h1 id="welcome">Welcome</h1>
  <h2>Login to sendelope.com</h2>
  <form action="welcome.jsp" method="post" >
  <p class="user_id">User Id:<input type="text" name="username" class="user_id" placeholder="User ID" value ="<%=username %>">
    <span>Please enter a valid user id</span></p>
  <p class="user_password">Password:<input type="password" name="userpassword" class="user_password" placeholder="password" value="<%= password %>">
    <span>Please enter a valid password</span></p>
  <input type="checkbox" name="remember_me" value="rem">Remember Me
  <br/><br/>
  <input type="submit" value="Login" id="submit">
 <h3><%
  	
    if(null!=request.getAttribute("errorMessage"))
    {
        out.println(request.getAttribute("errorMessage"));
    }
%></h3>
  </form>
  <br/>
  <br/>
  <p style="text-align:center"><a href="forgotpassword.html" id="yellow">Forgot your password or ID?</a></p>
  <p style="text-align:center"><a href="signup.html">New to Sendelpe.com</a></p>
</body>
</html>

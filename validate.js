var valid=0;
function userName()
{
  if(document.user_info.UserId.value==="")
	{

		document.getElementById("UID").innerHTML="Enter User ID";
        $("#User_ID").css("background-color","lightgrey");
        $("#User_ID").focus();


	}
	else  if(document.user_info.UserId.value.length<6)
	{
    document.getElementById("UID").innerHTML="Use atleast 6 characters";
    $("#User_ID").css("background-color","lightgrey");
    $("#User_ID").focus();
	}
	else
	{
		valid++;
	}
}
function userPassword()
{
		if(document.user_info.Password.value==="")
		{
				document.getElementById("User_pass").innerHTML="Please enter a password";
				$("#Pass_word").css("background-color","lightgrey");
				if(valid===1)
				{
					$("#Pass_word").focus();
				}
		}

		else if(document.user_info.Password.value.length<8)
		{
				document.getElementById("User_pass").innerHTML="Length of the password should be greater than 8 characters";
				$("#Pass_word").css("background-color","lightgrey");
				if(valid===1)
				{
					$("#Pass_word").focus();
				}
		}
		else if(document.user_info.Password.value===document.user_info.UserId.value)
		{
					document.getElementById("User_pass").innerHTML="Password cannot be same as username";
					$("#Pass_word").css("background-color","lightgrey");
					if(valid===1)
					{
						$("#Pass_word").focus();		
					}
		}
		else
		{
			valid++;
		}
}
function matchPassword()
{
		if(document.user_info.Password.value!=document.user_info.confirmpassword.value)
		{
				document.getElementById("CP").innerHTML="Password didn't match";
				$("#Confirm_password").css("background-color","lightgrey");
				if(valid===2)
				{
					$("#Confirm_password").focus();
				}
		}
		else
		{
			valid++;
		}
}
function secretanswer()
{
		if(document.user_info.Answer.value==="")
		{
				document.getElementById("SA").innerHTML="Please enter the secret answer";
				$("#Secret_answer").css("background-color","lightgrey");
				if(valid===3)
				{
					$("#Secret_answer").focus();
				}
		}
		else
		{
			valid++;
		}


}
function firstname()
{
	if(document.user_info.FirstName.value==="")
	{
			document.getElementById("FN").innerHTML="Please enter the First Name";
			$("#First_Name").css("background-color","lightgrey");
			if(valid===4)
			{
				$("#First_Name").focus();
			}
	}
	else
	{
		valid++;
	}
}
function lastname()
{
	if(document.user_info.LastName.value==="")
	{
			document.getElementById("LN").innerHTML="Please enter the First Name";
			$("#Last_Name").css("background-color","lightgrey");
			if(valid===5)
			{
				$("#Last_Name").focus();
			}
	}	
	else
	{
		valid++;
	}

}
function postalCode()
{

		var i,count=0;
		for(i=0;i<document.user_info.zip.value.length;i=i+1)
		{
			{
				count=count+1;
			}
		}
		if(count!=6)
		{

				document.getElementById("PC").innerHTML="Invalid Postal Code";
				$("#Postal_code").css("background-color","lightgrey");
				if(valid===3)
				{
					$("#Postal_code").focus();
				}
		}
		if(document.user_info.zip.value==="")
		{
				document.getElementById("PC").innerHTML="Please enter Postal Code";
				$("#Postal_code").css("background-color","lightgrey");
				if(valid===6)
				{
					$("#Postal_code").focus();
				}		}
		else
		{
			valid++;
		}
}
function address1()
{
			if(document.user_info.Address1.value==="")
			{
					document.getElementById("ADD1").innerHTML="Please enter the address";
					$("#Address_1").css("background-color","lightgrey");
					if(valid===7)
					{
						$("#Address_1").focus();
					}
			}
			else
			{
				valid++;
			}
}
function address2()
{
			if(document.user_info.Address2.value==="")
			{
					document.getElementById("ADD2").innerHTML="Please enter the address";
					$("#Address_2").css("background-color","lightgrey");
					if(valid===8)
					{
						$("#Address_2").focus();
					}			
			}
			else
			{
				valid++;
			}
}
function city()
{
	if(document.user_info.City.value==="")
	{
			document.getElementById("CT").innerHTML="Please enter the city";
			$("#City").css("background-color","lightgrey");
			if(valid===9)
			{
				$("#City").focus();
			}
	}
	else
	{
		valid++;
	}
}
function email()
{
		var i,count=0;
		var x=document.user_info.Useremail.value;
		for(i=0;i<document.user_info.Useremail.value.length;i++)
		{
				if(x[i]=='@')
				{
						count=count+1;
				}
		}
		if(count!=1)
		{
				document.getElementById("UE").innerHTML="Invalid email"
				$("#User_email").css("background-color","lightgrey");
				if(valid===10)
				{
					$("#User_email").focus();
				}
		}
		else
		{
				valid++;
		}
}

function val()
{
	userName();
	userPassword();
	matchPassword();
	secretanswer();
	firstname();
	lastname();
	postalCode();
	address1();
	address2();
	city();
	email();
	if(valid===11)
		{
			return true;
		}
	else
	{
		return false;
	}
}

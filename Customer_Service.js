var count = 0;

function accno(){
	// validation for pin_code
	    var accno1_js = document.getElementById('customer_accno');
	    var accno1_js_value = accno1_js.value.trim();

	    if (accno1_js_value == null || accno1_js_value == "") {
	            	
	        	document.getElementById("acc").innerHTML= "Enter a 9 digit Sendelope Account No.";
	        	
	        	$(function(){
	                $("#customer_accno").focus() });
	             
	    } 
	    else if (accno1_js_value.length != 9) {
	        
	    	document.getElementById("acc").innerHTML="Sendelope Account Number must have 9 digits only !";
	        
	    	$(function(){
	            $("#customer_accno").focus() });
	        
	    }
	    
	    else {count++;}
	}


function fname(){
 
	 var customer_fname_js = document.getElementById('customer_fname').value;
    var customer_fname_js_value = customer_fname_js.trim();
    var is_valid;
    
    if (customer_fname_js_value == null || customer_fname_js_value == "") {
  
    	document.getElementById("a").innerHTML = "First Name must be filled out !";
        
    	$(function(){
            $("#customer_fname").focus() });
        
    }
    else if (is_valid = !/^[a-z A-Z]+$/.test(customer_fname_js_value)) {
    	
    	document.getElementById("a").innerHTML = "First Name must have characters !";
    	
    	$(function(){
            $("#customer_fname").focus() });
        
    } else if (customer_fname_js_value.length > 30) {
    	document.getElementById("a").innerHTML = "First Name must have 30 characters !";
    	
    	$(function(){
            $("#customer_fname").focus() });
        
    }
    else {count++;}
 }

function lname(){

var customer_lname_js = document.getElementById('customer_lname').value;
    var customer_lname_js_value = customer_lname_js.trim();
    var is_valid;
    if (customer_lname_js_value == null || customer_lname_js_value == "") {
    	
    	document.getElementById("b").innerHTML = "Last Name must be filled out !";
        
    	$(function(){
            $("#customer_lname").focus() });
        
    }
    else if (is_valid = !/^[a-z A-Z]+$/.test(customer_lname_js_value)) {
    	
    	document.getElementById("b").innerHTML = "Last Name must have characters !";
    	
    	 
    	$(function(){
            $("#customer_lname").focus() });
        
        
    } else if (customer_lname_js_value.length > 30) {
    	
    	document.getElementById("a").innerHTML = "Last Name must have 30 characters !";
    	
    	 
    	$(function(){
            $("#customer_lname").focus() });
        
        
    }
    else{count++;}
}

function sname(){
    var statename_js = document.getElementById('customer_state').value;
    var statename_js_value = statename_js.trim();

    if (statename_js_value == null || statename_js_value == "") {
    	
    	document.getElementById("c").innerHTML = "Please Enter State  !";
    	
        $(function(){
            $("#customer_state").focus() });
        

    }
    else{count++;}
}

function cname(){
	
    var cityname_js = document.getElementById('customer_city').value;
    var cityname_js_value = cityname_js.trim();

    if (cityname_js_value == null || cityname_js_value == "") {
 
    	document.getElementById("d").innerHTML = "Please Enter City  !";
        
    	$(function(){
            $("#customer_city").focus() });
        
    }
    else{count++;}
}

function email(){
	
    // validation for email_address
    var email_address_js = document.getElementById('customer_email').value;
    var email_address_js_value = email_address_js.trim();

    if (email_address_js_value == null || email_address_js_value == "") {
 
    	document.getElementById("e").innerHTML = "Email must be filled out !";
     
    	$(function(){
            $("#customer_email").focus() });
    
    } else if (is_valid = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email_address_js_value)) {
    	
    	document.getElementById("e").innerHTML = "Email must have format xyz@domain.com !";
        
    	$(function(){
            $("#customer_email").focus() });        
    }
    else{count++;}
    
}

function flat(){

// validation for Flat,Apt,Suite,etc..
    var house_number_plot_number_js = document.getElementById('customer_floor').value;
    var house_number_plot_number_js_value = house_number_plot_number_js.trim();
    if (house_number_plot_number_js_value == null || house_number_plot_number_js_value == "") {
            
    	
    	document.getElementById("f").innerHTML = "Flat,Apt,Suite,etc.. must be filled out !";
        
    	$(function(){
            $("#customer_floor").focus() });        
            
        }
     else if (is_valid = !/^[a-zA-Z0-9#-/ ]+$/.test(house_number_plot_number_js_value)) {
    	
    	 document.getElementById("f").innerHTML = "Flat,Apt,Suite,etc.. Number Alphanumeric alongwith / and -";
        
    	 $(function(){
            $("#customer_floor").focus() });        
        
        
    } else if (house_number_plot_number_js_value.length > 25) {
        
        
    	document.getElementById("f").innerHTML = "Flat,Apt,Suite,etc.. must have 25 characters only !";
        
    	$(function(){
            $("#customer_floor").focus() });        
            
    }
    
    else{count++;}
  }
    // validation for Flat,Apt,Suite,etc..
    //-----------------------------------

function street(){
	
    // validation for street
    var street_js = document.getElementById('customer_street').value;
    var street_js_value = street_js.trim();
    if (street_js_value == null || street_js_value == "") {
 
    	document.getElementById("g").innerHTML = "Street must be filled out !";
        
    	$(function(){
            $("#customer_street").focus() });        
            
    }
    else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(street_js_value)) {
    
    	document.getElementById("g").innerHTML = "Street Only characters and numerics";
        
    	$(function(){
            $("#customer_street").focus() });        
        
        
    } else if (street_js_value.length > 25) {
        
    	document.getElementById("g").innerHTML = "Street must have 25 characters only !";
        
    	$(function(){
            $("#customer_street").focus() });        
        
    }
    else{count++;}
    
    // validation for street
    //-----------------------------------
}

function pin(){
 // validation for pin_code
    var pin_code_js = document.getElementById('customer_post');
    var pin_code_js_value = pin_code_js.value.trim();
    if (pin_code_js_value == null || pin_code_js_value == "") {
        
    	document.getElementById("h").innerHTML = "Postal code must be filled out !";

    	$(function(){
            $("#customer_post").focus() });
        
    } else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(pin_code_js_value)) {
        
    	document.getElementById("h").innerHTML = "Postal code Only charecters and numerics";
        
    	$(function(){
            $("#customer_post").focus() });
        
    } else if (pin_code_js_value.length != 6) {
        
    	document.getElementById("h").innerHTML = "Postal code must have 6 digits only !";
        
    	$(function(){
            $("#customer_post").focus() });
        
    }
    else{count++;}
    // validation for pin_code
    //-----------------------------------
}
function val()
{	
	accno();
	fname();
	lname();
	street();
	flat();
	pin();
	cname();
	sname();
	 email();
	
	if(count===9)
{
	window.location='Customer_service.jsp';
}
else
{
  return false;	
}
	
}

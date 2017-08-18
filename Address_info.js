var count=0;
 function fname(){

 var from_name_js = document.getElementById('from_name').value;
    var from_name_js_value = from_name_js.trim();
    var is_valid;
    if (from_name_js_value == null || from_name_js_value == "") {
    	
    	document.getElementById("fname").innerHTML="Name must be filled out";
        
        $(
            $("#from_name").focus() );
        
    }
    else if (is_valid = !/^[a-z A-Z]+$/.test(from_name_js_value)) {
    
    	document.getElementById("fname").innerHTML="Name must have characters !";
    	
    	$(
                $("#from_name").focus() );
    	

        
    } else if (from_name_js_value.length > 30) {
        	document.getElementById("fname").innerHTML=" Name must have 30 characters !";
        	
        	$(
                    $("#from_name").focus() );
        
    }
    else
    {
    	count++;
    }
 }
 function fstate(){
    var statename_js = document.getElementById('from_state').value;
    var statename_js_value = statename_js.trim();

    if (statename_js_value == null || statename_js_value == "") {
    
    	document.getElementById("fstate").innerHTML="Please Enter State  !";
        
        $(function(){
            $("#from_state").focus() });
        

    }
    else
    {
    	count++;
    }
 }
function fcity()
{
    var cityname_js = document.getElementById('from_city').value;
    var cityname_js_value = cityname_js.trim();

    if (cityname_js_value == null || cityname_js_value == "") {
    
    	document.getElementById("fcity").innerHTML="Please Enter City  !";
        $(function(){
            $("#from_city").focus() });
        

    }
    else
    {
    	count++;
    }
}
function fmail()
{
	
    // validation for email_address
    var email_address_js = document.getElementById('from_email').value;
    var email_address_js_value = email_address_js.trim();

    if (email_address_js_value == null || email_address_js_value == "") {
        	document.getElementById("fmail").innerHTML="Email must be filled out !";
     $(function(){
            $("#from_email").focus() });
    
    } else if (is_valid = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email_address_js_value)) {
        	document.getElementById("fmail").innerHTML="Email must have format xyz@domain.com !";
        $(function(){
            $("#from_email").focus() });        
        
    }
    else
    {
    	count++;
    }
}
function fflat()
{
// validation for Flat,Apt,Suite,etc..
    var house_number_plot_number_js = document.getElementById('from_floor').value;
    var house_number_plot_number_js_value = house_number_plot_number_js.trim();
    if (house_number_plot_number_js_value == null || house_number_plot_number_js_value == "") {
        	document.getElementById("fflat").innerHTML="Flat,Apt,Suite,etc.. must be filled out !";
            $(function(){
            $("#from_floor").focus() });        
        
            
        }
     else if (is_valid = !/^[a-zA-Z0-9#-/ ]+$/.test(house_number_plot_number_js_value)) {
    
    	 document.getElementById("fflat").innerHTML="Flat,Apt,Suite,etc.. Number Alphanumeric alongwith / and -";
        $(function(){
            $("#from_floor").focus() });        
        
        
    } else if (house_number_plot_number_js_value.length > 25) {
        
        	document.getElementById("fflat").innerHTML="Flat,Apt,Suite,etc.. must have 25 characters only !";
        $(function(){
            $("#from_floor").focus() });        
        
        
    }
    else
    {
    	count++;
    }
 
}// validation for Flat,Apt,Suite,etc..
    //-----------------------------------

function faddress()
{
    // validation for street
    var street_js = document.getElementById('from_street').value;
    var street_js_value = street_js.trim();
    if (street_js_value == null || street_js_value == "") {
       	document.getElementById("faddress").innerHTML="Street must be filled out !";
            $(function(){
            $("#from_street").focus() });        
        
            
    }
    else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(street_js_value)) {
        	document.getElementById("faddress").innerHTML="Street Only characters and numerics";
       $(function(){
            $("#from_street").focus() });        
        
        
    } else if (street_js_value.length > 25) {
    
    	document.getElementById("faddress").innerHTML="Street must have 25 characters only !";
        $(function(){
            $("#from_street").focus() });        
        
        
    }
    else
    {
    	count++;
    }
}   // validation for street
    //-----------------------------------

 // validation for pin_code
function fpostal()
{
var pin_code_js = document.getElementById('from_post');
    var pin_code_js_value = pin_code_js.value.trim();
    if (pin_code_js_value == null || pin_code_js_value == "") {
       	document.getElementById("fpostal").innerHTML="Postal code must be filled out !";
        $(function(){
            $("#from_post").focus() });
        
    } else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(pin_code_js_value)) {
       	document.getElementById("fpostal").innerHTML="Postal code Only charecters and numerics";
        $(function(){
            $("#from_post").focus() });
        
    } else if (pin_code_js_value.length != 6) {
       	document.getElementById("fpostal").innerHTML="Postal code must have 6 digits only !";
        $(function(){
            $("#from_post").focus() });
        
    }
    else
    {
    	count++;
    }
}
    // validation for pin_code
    //-----------------------------------
function tname()
{
 var to_name_js = document.getElementById('to_name').value;
    var to_name_js_value = to_name_js.trim();
    var is_valid;
    if (to_name_js_value == null || to_name_js_value == "") {
        	document.getElementById("tname").innerHTML="Name must be filled out !";
        $(function(){
            $("#to_name").focus() });
        
    }
    else if (is_valid = !/^[a-z A-Z]+$/.test(to_name_js_value)) {
     	document.getElementById("tname").innerHTML="Name must have characters !";
        
    } else if (to_name_js_value.length > 30) {
        	document.getElementById("tname").innerHTML=" Name must have 30 characters !";
        
    }
    else
    {
    	count++;
    }
}
function tstate()
{
    var statename_js = document.getElementById('to_state').value;
    var statename_js_value = statename_js.trim();

    if (statename_js_value == null || statename_js_value == "") {
       	document.getElementById("tstate").innerHTML="Please Enter State  !";
        $(function(){
            $("#to_state").focus() });
        

    }
    else
    {
    	count++;
    }
}
function tcity()
{
    var cityname_js = document.getElementById('to_city').value;
    var cityname_js_value = cityname_js.trim();

    if (cityname_js_value == null || cityname_js_value == "") {
       	document.getElementById("tcity").innerHTML="Please Enter City  !";
        $(function(){
            $("#to_city").focus() });
        

    }
    else
    {
    	count++;
    }

}
    // validation for email_address
function tmail()
{
var email_address_js = document.getElementById('to_email').value;
    var email_address_js_value = email_address_js.trim();

    if (email_address_js_value == null || email_address_js_value == "") {
       	document.getElementById("tmail").innerHTML="Email must be filled out !";
     $(function(){
            $("#to_email").focus() });
    
    } else if (is_valid = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email_address_js_value)) {
       	document.getElementById("tmail").innerHTML="Email must have format xyz@domain.com !";
        $(function(){
            $("#to_email").focus() });        
        
    }
    else
    {
    	count++;
    }
}
// validation for Flat,Apt,Suite,etc..
function tflat()
{
var house_number_plot_number_js = document.getElementById('to_floor').value;
    var house_number_plot_number_js_value = house_number_plot_number_js.trim();
    if (house_number_plot_number_js_value == null || house_number_plot_number_js_value == "") {
        	 document.getElementById("tflat").innerHTML="Flat,Apt,Suite,etc.. must be filled out !";
            $(function(){
            $("#to_floor").focus() });        
        
           
        }
     else if (is_valid = !/^[a-zA-Z0-9#-/ ]+$/.test(house_number_plot_number_js_value)) {
        	 document.getElementById("tflat").innerHTML="Flat,Apt,Suite,etc.. Number Alphanumeric alongwith / and -";
        $(function(){
            $("#to_floor").focus() });        
        
       
    } else if (house_number_plot_number_js_value.length > 25) {
        
       	 document.getElementById("tflat").innerHTML="Flat,Apt,Suite,etc.. must have 25 characters only !";
        $(function(){
            $("#to_floor").focus() });        
        
        
    }
    else
    {
    	count++;
    }
}
    // validation for Flat,Apt,Suite,etc..
    //-----------------------------------


    // validation for street
function taddress()
{
var street_js = document.getElementById('to_street').value;
    var street_js_value = street_js.trim();
    if (street_js_value == null || street_js_value == "") {
        	document.getElementById("taddress").innerHTML="Street must be filled out !";
            $(function(){
            $("#to_street").focus() });        
        
            
    }
    else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(street_js_value)) {
       	document.getElementById("taddress").innerHTML="Street Only characters and numerics";
        $(function(){
           $("#to_street").focus() });        
        
       
    } else if (street_js_value.length > 25) {
       	 document.getElementById("taddress").innerHTML="Street must have 25 characters only !";
        $(function(){
            $("#to_street").focus() });        
        
        
    }
    else
    {
    	count++;
    }
}
    // validation for street
    //-----------------------------------

 // validation for pin_code
 function tpostal()
 {
 var pin_code_js = document.getElementById('to_post');
    var pin_code_js_value = pin_code_js.value.trim();
    if (pin_code_js_value == null || pin_code_js_value == "") {
       	document.getElementById("tpostal").innerHTML="Postal code must be filled out !";
        $(function(){
            $("#to_post").focus() });
        
    } else if (is_valid = !/^[a-zA-Z0-9 ]+$/.test(pin_code_js_value)) {
       	document.getElementById("tpostal").innerHTML="Postal code Only charecters and numerics";
        $(function(){
            $("#to_post").focus() });
       
    } else if (pin_code_js_value.length != 6) {
       	 document.getElementById("tpostal").innerHTML="Postal code must have 6 digits only !";
        $(function(){
            $("#to_post").focus() });
        
    }
    else
    {
    	count++;
    }
 }
    // validation for pin_code
    //-----------------------------------

   
function val()
{

	
	fname();
	faddress();
	fflat();
	fpostal();
	fcity();
	fstate();
	fmail();
	tname();
	taddress();
	tflat();
	tpostal();
	tcity();
	tstate();
	tmail();
	if(count===14)
{
	window.location='Address_info.jsp';
}
else
{
  return false;	
}
	
}
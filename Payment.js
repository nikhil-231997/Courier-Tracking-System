var count = 0;

function accno1(){
// validation for pin_code
    var accno1_js = document.getElementById('Sendelope_accno1');
    var accno1_js_value = accno1_js.value.trim();

    if (accno1_js_value == null || accno1_js_value == "") {
            	
        	document.getElementById("a").innerHTML= "Enter a 9 digit Sendelope Account No.";
        	
        	$(function(){
                $("#Sendelope_accno1").focus() });
             
    } 
    else if (accno1_js_value.length != 9) {
        
    	document.getElementById("a").innerHTML="Sendelope Account Number must have 9 digits only !";
        
    	$(function(){
            $("#Sendelope_accno1").focus() });
        
    }
    
    else {count++;}
}
   

function accno2(){
    
	var accno2_js = document.getElementById('Sendelope_accno2');
    var accno2_js_value = accno2_js.value.trim();

    if (accno2_js_value == null || accno2_js_value == "") {
        
              
       
        	document.getElementById("b").innerHTML= "Enter a 9 digit Sendelope Account No.";
       
        	$(function(){
        		$("#Sendelope_accno2").focus() });
        
    } else if (accno2_js_value.length != 9) {
        
    	document.getElementById("b").innerHTML="Sendelope Account Number must have 9 digits only !";
        
    	$(function(){
            $("#Sendelope_accno2").focus() });
        
    }
    else {count++;}
  
}


function val()
{
	
	accno1();
	accno2();
	
	
	if(count===2)
{
	window.location='Payment.jsp';
}
else
{
  return false;	
}
	
}

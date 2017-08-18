
var valid=0;

$(function(){$("#doc_desc").hide()});

$(document).ready(function(){
    $("input:radio").change(function(){
        if(($(this).val()) == "docs"){$("#doc_desc").show();}
    });
});

$(document).ready(function(){
    $("input:radio").change(function(){
        if(($(this).val()) == "products"){$("#doc_desc").hide();}
    });
});


function packageWeight(){

// validation for package_weight
    var package_weight_js = document.getElementById('weight');
    var package_weight_js_value = package_weight_js.value.trim();
    if (package_weight_js_value == null || package_weight_js_value == "") {
       
      
    	document.getElementById("a").innerHTML= "Package Weght cannot be empty";
           
    	$(function(){
            $("#weight").focus() });
    		
        
    } else if (package_weight_js_value < 0) {
        
    	document.getElementById("a").innerHTML= "Package weight must be positive !";
        $(function(){
            $("#weight").focus() });
        
    }
    else{valid++;}
}
    // validation for package_length
    //-----------------------------------

function packageLength(){

    var package_length_js = document.getElementById('L');
    var package_length_js_value = package_length_js.value.trim();
    if (package_length_js_value == null || package_length_js_value == "") {
        
       
    	document.getElementById("b").innerHTML="Dimensions cannot be empty";
    	
    	$(function(){
             $("#L").focus() });   
        
    } 
    else if (package_length_js_value < 0) {
        
    	document.getElementById("b").innerHTML="Package length must be positive !";
    
        $(function(){
            $("#L").focus() });
        
    }
    else{valid++;}
    // validation for package_length
    //-----------------------------------

}
// validation for package_width
    //-----------------------------------

function packageWidth(){

var package_width_js = document.getElementById('W');
    var package_width_js_value = package_width_js.value.trim();
    if (package_width_js_value == null || package_width_js_value == "") {
        
        

    	document.getElementById("b").innerHTML="Dimensions cannot be empty";
    	 $(function(){
             $("#W").focus() });  
            
        
    } else if (package_width_js_value < 0) {
        
    	document.getElementById("b").innerHTML="Package width must be positive !";
        
    	$(function(){
            $("#W").focus() });
        
    }
    else{valid++;}
    
    
}
    // validation for package_height
    //-----------------------------------

function packageHeight(){

var package_height_js = document.getElementById('H');
    var package_height_js_value = package_height_js.value.trim();
    if (package_height_js_value == null || package_height_js_value == "") {
        
    	document.getElementById("b").innerHTML="Dimensions cannot be empty";
   	 $(function(){
            $("#H").focus() });  
    	
        
    } else if (package_height_js_value < 0) {
        
    	document.getElementById("b").innerHTML="Package height must be positive !";
        
    	$(function(){
            $("#H").focus() });
        
    }
    else{valid++;}
    // validation for package_height
    //-----------------------------------
}

 // validation for package_invoice
    //-----------------------------------

function packageInvoice(){

var package_invoice_js = document.getElementById('invoice_value');
    var package_invoice_js_value = package_invoice_js.value.trim();
    if (package_invoice_js_value == null || package_invoice_js_value == "") {
       
    	document.getElementById("c").innerHTML="Invoice value cannot be empty";

        $(function(){
            $("#invoice_value").focus() });
        
    } else if (package_invoice_js_value < 0) {
        
    	document.getElementById("c").innerHTML=" Invoice must be positive !";
    	
        $(function(){
            $("#invoice_value").focus() });
        
    }
    else{valid++;}
}

// validation for package_carriage

function packageCarriage(){


var package_carriage_js = document.getElementById('Carriage');
    var package_carriage_js_value = package_carriage_js.value.trim();
    if (package_carriage_js_value < 0) {
    	
    	document.getElementById("d").innerHTML=" Carriage value must be positive !";
    	
        $(function(){
            $("#Carriage").focus() });
        
    }
    else{valid++;}

}
function val()
{
	
	packageWeight();
	packageLength();
	packageWidth();
	packageHeight();
	packageInvoice();
	packageCarriage();
	
	if(valid===6)
{
	return true;
}
else
{
  return false;	
}
	
}

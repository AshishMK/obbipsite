/**
Copyright © 2018, Nesote Technologies Private Limited (www.nesote.com).

This particular file 'market.js' and the software/application 'Inout Blockchain AltExchanger' are licensed strictly under the licensing terms and conditions of  the website  http://www.inoutscripts.com/, which can be found in the URL http://www.inoutscripts.com/terms.php

You are licensed to use this file and the software/application 'Inout Blockchain AltExchanger’ only if you have already obtained a valid license directly from Nesote Technologies Private Limited through the website Inout Scripts (http://www.inoutscripts.com/) to use the software/application 'Inout Blockchain AltExchanger’ in your website. Any such use shall be restricted only for the allowed use and in (and for) the allowed website (allowed by Nesote Technologies Private Limited), according to the terms and conditions of the license agreement (which can be found in  http://www.inoutscripts.com/terms.php ).

You shall not distribute this file and/or the software/application fully or partly to anyone.
*/
function setPriceFromDatatable(price)
{
         price=price.toFixed(roundfigure);
	 $("#price_Buy").val(price);
         gettotalbidprice(2);     
}
function setPriceFromDatatablesell(price)
{

         price=price.toFixed(roundfigure);
         $("#price_Sell").val(price);
         gettotalaskprice(2);     
}
function setUnitsFromDatatable(unit)
{
        unit=unit.toFixed(roundfigure);
        $("#quantity_Buy").val(unit);

	    gettotalbidprice(1);    
}
function setUnitsFromDatatablesell(unit)
{
        unit=unit.toFixed(roundfigure);

	$("#quantity_Sell").val(unit);
	gettotalaskprice(1);    
}
function setMaxUnitsToBuy()
{
	var total=$('#balencebasecoin').text();
	total=parseFloat(total);
	total=total.toFixed(roundfigure);
	$("#total_Buy").val(total);
		gettotalbidprice(3);
}
function setMaxUnitsSell()
{
	var total=$('#balencetradecoin').text();
	total=parseFloat(total);
	total=total.toFixed(roundfigure);
	$("#quantity_Sell").val(total);
	gettotalaskprice(1);
}
$('#priceconditionbuy').change(function() {
    var result=$(this).val();
    var val=result.split('_');
    if(val[1]==1)
    {
	    if(val[0]==1)
	    {
	    var price=$('#LastTransaction').text();
	    $("#price_Buy").val(price);
	    }
	    else if(val[0]==2)
	    {
	    var price=$('#LastBid').text();
	    $("#price_Buy").val(price);
	    }
	    else
	    {
	      var price=$('#LastAsk').text();
	    $("#price_Buy").val(price);
	    }
    }
});
$('#priceconditionsell').change(function() {
    var result=$(this).val();
    var val=result.split('_');
    if(val[1]==2)
    {
	    if(val[0]==1)
	    {
	    var price=$('#LastTransaction').text();
	    $("#price_Sell").val(price);
	    }
	    else if(val[0]==2)
	    {
	     var price=$('#LastBid').text();
	    $("#price_Sell").val(price);
	    }
	    else
	    {
	      var price=$('#LastAsk').text();
	    $("#price_Sell").val(price);
	    }
    }
});
function gettotalbidprice(type) 
{
var unit =$('#quantity_Buy').val();
var price=$('#price_Buy').val();
var total=$('#total_Buy').val();
if(type==1)
{
	if(unit!="" && unit!=0 && price!="" && price!=0)
	{
		var result = (unit * price);
		var commision=(parseFloat(result)*parseFloat(buy_profit_percentage))/100;
		$("#confirm_commisionset").val(commision);

		result=parseFloat(result)+parseFloat(commision);
		result=result.toFixed(roundfigure);
		$("#total_Buy").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#total_Buy").val(val);
		$("#confirm_commisionset").val(0);
		}
}
else if(type==2)
{
	if(unit!="" && unit!=0 && price!="" && price!=0)
	{
		var result = (unit * price);
		var commision=(parseFloat(result)*parseFloat(buy_profit_percentage))/100;
		$("#confirm_commisionset").val(commision);
		result=parseFloat(result)+parseFloat(commision);
		result=result.toFixed(roundfigure);
		$("#total_Buy").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#total_Buy").val(val);

		$("#quantity_Buy").val(val);
		$("#confirm_commisionset").val(0);
		}
}
else if(type==3)
{
	if(total!="" && total!=0 && price!="" && price!=0)
	{
		var commision=(parseFloat(total)*parseFloat(buy_profit_percentage))/100;		
		$("#confirm_commisionset").val(commision);
		total=parseFloat(total)-parseFloat(commision);
		result=total/price;
		result=result.toFixed(roundfigure);
		$("#quantity_Buy").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#quantity_Buy").val(val);
		
		}
}
}

function gettotalaskprice(type) 
{
var unit =$('#quantity_Sell').val();
var price=$('#price_Sell').val();
var total=$('#total_Sell').val();
if(type==1)
{
	if(unit!="" && unit!=0 && price!="" && price!=0)
	{
		var result = (unit * price);
		var commision=(parseFloat(result)*parseFloat(sell_profit_percentage))/100;
		$("#confirm_commisionset").val(commision);	
		result=parseFloat(result)-parseFloat(commision);
		result=result.toFixed(roundfigure);
		$("#total_Sell").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#total_Sell").val(val);
		}
}
else if(type==2)
{
	if(unit!="" && unit!=0 && price!="" && price!=0)
	{
		var result = (unit * price);
		var commision=(parseFloat(result)*parseFloat(sell_profit_percentage))/100;
		$("#confirm_commisionset").val(commision);
		result=parseFloat(result)-parseFloat(commision);
		result=result.toFixed(roundfigure);
		$("#total_Sell").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#total_Sell").val(val);
		$("#quantity_Sell").val(val);
		}
}
else if(type==3)
{
	if(total!="" && total!=0 && price!="" && price!=0)
	{
		var commision=(parseFloat(total)*parseFloat(sell_profit_percentage))/100;
		$("#confirm_commisionset").val(commision.toFixed(roundfigure));
		total=parseFloat(total)+parseFloat(commision);
		result=total/price;
		result=result.toFixed(roundfigure);
		$("#quantity_Sell").val(result);
	}
	else
		{
		var val=0;
		val=val.toFixed(roundfigure);
		$("#quantity_Sell").val(val);
		
		}
}

}
	
$("input[type='text']").each(function(){
  $(this).click(function(){
      $(".input-group").removeClass('has-error');
      $(".taberormsg").hide();
  });
});
$("input[type='email']").each(function(){
  $(this).click(function(){
      $(".input-group").removeClass('has-error');
      $(".taberormsg").hide();
  });
});	
$("input[type='password']").each(function(){
  $(this).click(function(){
      $(".input-group").removeClass('has-error');
      $(".taberormsg").hide();
  });
});

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}  
           


function updateTransactionDetails()
{
        $.ajax({
	url: installpath+'coins/refreshmarketdata/'+marketidsecret,
	success: function(dataresponse) { 
		dataresponse=dataresponse.trim();
		var data = JSON.parse(dataresponse);
	        if(!isEmpty(data)) 
	        {
           	   $('#LastTransaction').html(data[0].LastTransaction);
           	   $('#Volume').html(data[0].Volume);
           	   $('#LastBid').html(data[0].LastBid);
           	   $('#LastAsk').html(data[0].LastAsk);
           	   $('#HighestOfLastDay').html(data[0].HighestOfLastDay);
           	   $('#LowestOfLastDay').html(data[0].LowestOfLastDay);

           	  $('#balencebasecoinvaluenew').val(data[0].basecoinbalance);
           	  $('#balencetradecoinvaluenew').val(data[0].tradecoinbalance); 

		  $('#balencebasecoin').html(data[0].basecoinbalance);
		 $('#balencetradecoin').html(data[0].tradecoinbalance); 

                
               if(data[0].LastBidProgress==1) { var bidh4class="green-color"; var bidiclass="fa-arrow-up";} 
                                             else { var bidh4class="red-color"; var bidiclass="fa-arrow-down";}
               if(data[0].LastAskProgress==1) { var askh4class="green-color"; var askiclass="fa-arrow-up";} 
                                             else { var askh4class="red-color"; var askiclass="fa-arrow-down";}
               if(data[0].LastTransactionProgress==1) { var tradeh4class="green-color"; var tradeiclass="fa-arrow-up";} 
                                                     else { var tradeh4class="red-color"; var tradeiclass="fa-arrow-down";}

               $("#LastBidProgress h4").removeClass("green-color red-color").addClass(bidh4class);
               $("#LastBidProgress h4 i").removeClass("fa-arrow-up fa-arrow-down").addClass(bidiclass);

               $("#LastAskProgress h4").removeClass("green-color red-color").addClass(askh4class);
               $("#LastAskProgress h4 i").removeClass("fa-arrow-up fa-arrow-down").addClass(askiclass);

               $("#LastTransactionProgress h4").removeClass("green-color red-color").addClass(tradeh4class);
               $("#LastTransactionProgress h4 i").removeClass("fa-arrow-up fa-arrow-down").addClass(tradeiclass);
            
	     }	
	   }
	});
}

function useThisBidvalue(detailstr)
{
          
   if(loginstatus==0 ) gotologin();

           	   var details = detailstr.split('_');	 
           	   var quantity=details[4];
           	   var price=details[3];
           	   var total=quantity * price;
           	   total=total.toFixed(roundfigure);
           	   var ordertype=details[0];
           	   var conditiontype=details[1];
           
           	   conditiontype=1;

  	          
 if(ordertype=='bid')
 {
 type=2;
 }
 else
 {
 type=1;
 }

 var basecoinbalancecheck=$('#balencebasecoinvaluenew').val();
   	  
	           var result = (quantity * price);
	           var commision=(parseFloat(result)*parseFloat(buy_profit_percentage))/100;
	           commision=parseFloat(commision);
	           commision=commision.toFixed(roundfigure);

	           finaltotal=parseFloat(total)+parseFloat(commision);
	           finaltotal=finaltotal.toFixed(roundfigure);
	           

		        if(basecoinbalancecheck==0 || basecoinbalancecheck=="" || basecoinbalancecheck<0)  
		           {
		        	
		          	zeroval=0;
		        	quantity=zeroval.toFixed(roundfigure);
		        	commision=zeroval.toFixed(roundfigure);
		        	total=zeroval.toFixed(roundfigure);
		        	finaltotal=zeroval.toFixed(roundfigure);
		           }



               $('#confirm_marketname').html(marketname);
	           $('#confirm_quantity').val(quantity);
	           $('#confirm_price').val(price);
	           $('#confirm_subtotal').val(total);
	           $('#confirm_commision').val(commision);
	           $('#confirm_total').val(finaltotal);
	           $('#confirm_ordertype').val(type);
	           $('#confirm_conditiontype').val(conditiontype);
	           $('#confirm_ordercondition').val('');
		   if(ordertype=='ask')
		   {
		      $('#confirm_type').html('Limit Sell');
		      $('#confirm_type1').html('Limit Sell');
		   }
		   else
		   {
		      $('#confirm_type').html('Limit Buy');
		      $('#confirm_type1').html('Limit Buy');
		   }
	           $('#myModal').modal('show');       
  
}
function useThisAskvalue(detailstr)
{
	 
	if(loginstatus==0 ) gotologin();

	
	           var details = detailstr.split('_');	 
	           var quantity=details[4];
	           var price=details[3];
	           var total=quantity * price;
	           total=total.toFixed(roundfigure);
	           var ordertype=details[0];
	          
	           
	          
	           if(ordertype=='bid')
	           {
	             type=2;
 	           }
 	           else
 	           {
 	             type=1;
 	           }
 	           var conditiontype=details[1];
 
 
 	          conditiontype=1; 
 	           
 	
 
	          var result = (quantity * price);
	          var commision=(parseFloat(result)*parseFloat(sell_profit_percentage))/100;

	
	          commision=parseFloat(commision);
	          commision=commision.toFixed(roundfigure);
	      
	          finaltotal=parseFloat(total)-parseFloat(commision);
	          finaltotal=finaltotal.toFixed(roundfigure);

		var tradecoinbalancecheck=$('#balencetradecoinvaluenew').val();        
	        if(tradecoinbalancecheck==0 || tradecoinbalancecheck=="" || tradecoinbalancecheck<0)  
		           {
		        	
		          	zeroval=0;
		        	quantity=zeroval.toFixed(roundfigure);
		        	commision=zeroval.toFixed(roundfigure);
		        	total=zeroval.toFixed(roundfigure);
		        	finaltotal=zeroval.toFixed(roundfigure);
		           }
	           

              $('#confirm_marketname').html(marketname);
	          $('#confirm_quantity').val(quantity);
	          $('#confirm_price').val(price);
	          $('#confirm_subtotal').val(total);
	          $('#confirm_commision').val(commision);
	          $('#confirm_total').val(finaltotal);
	          $('#confirm_ordertype').val(type);
	          $('#confirm_conditiontype').val(conditiontype);
	          $('#confirm_ordercondition').val('');
		  if(ordertype=='ask')
		  {
		       $('#confirm_type').html('Limit Sell');
		       $('#confirm_type1').html('Limit Sell');
		  }
		  else
		  {
		        $('#confirm_type').html('Limit Buy');
		        $('#confirm_type1').html('Limit Buy');
		  }
	          $('#myModal').modal('show');

}

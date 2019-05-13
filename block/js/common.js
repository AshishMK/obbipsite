/**
Copyright © 2018, Nesote Technologies Private Limited (www.nesote.com).

This particular file 'common.js' and the software/application 'Inout Blockchain AltExchanger' are licensed strictly under the licensing terms and conditions of  the website  http://www.inoutscripts.com/, which can be found in the URL http://www.inoutscripts.com/terms.php

You are licensed to use this file and the software/application 'Inout Blockchain AltExchanger’ only if you have already obtained a valid license directly from Nesote Technologies Private Limited through the website Inout Scripts (http://www.inoutscripts.com/) to use the software/application 'Inout Blockchain AltExchanger’ in your website. Any such use shall be restricted only for the allowed use and in (and for) the allowed website (allowed by Nesote Technologies Private Limited), according to the terms and conditions of the license agreement (which can be found in  http://www.inoutscripts.com/terms.php ).

You shall not distribute this file and/or the software/application fully or partly to anyone.
*/


	
	function loginheight() {
		
	var docheight	= $('.loginpagewraper').height();
	var windowheight = $(window).height();	
		
		if(docheight > windowheight){
			$('.loginpagewraper').css({"height": docheight})
		}
		else{
			$('.loginpagewraper').height(windowheight);
		}
	}
		
	function heightadjust() {
		 $('.mainareawraper').attr("style","");
		var winheight = $(window).height();
		var contentheight = $('.mainareawraper').outerHeight(true);
		var footerheight = $('.commonfooter').outerHeight(true);
		var crntheight = contentheight + footerheight;
		var dynmcontenthgt = winheight - (70 + footerheight);
		
		if(crntheight< winheight){
			$('.mainareawraper').css({"min-height": dynmcontenthgt});
		}
		else{
			$('.mainareawraper').css({"min-height": 300});
		}
	}	
	
	
	function mobmenu(){
		 
		$('.mobile-menu').on("click", function(){
			$(this).toggleClass("active");
			$('.menuUl').toggleClass("active");
			$('.headeroverlay').toggleClass("menu-active");
			
		});
		
		$('.headeroverlay').on("click", function(){
			
		$('.mobile-menu').removeClass("active");
		$('.menuUl').removeClass("active");
		$('.headeroverlay').removeClass("menu-active");	
				
		});
		 
			 
	}
 

// ....................................


$(document).ready(function(){
	
mobmenu();
	
	heightadjust();
	
$('.custom-select').select2({});
	
});

$(window).resize(function(){
	heightadjust();
});

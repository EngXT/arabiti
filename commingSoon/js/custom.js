/**
Core script to handle the entire theme and core functions
**/
var Siva = function(){
	/* Search Bar ============ */
	var screenWidth = $( window ).width();
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
		// Add scrollspy to <body>
		$('body').scrollspy({target: ".navbar", offset: 50});   
		// Add smooth scrolling on all links inside the navbar
		$("#myNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		}  // End if
	  });
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	
	var handleCustomScroll = function(){
		/* all available option parameters with their default values */
		if($(".content").length > 0)
		{ 
			$(".content").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y"
			});	
		}
	}
	
	/* Left Menu ============ */
	var handleSideBarMenu = function(){
		$('.openbtn').on('click',function(e){
			e.preventDefault();
			if($("#mySidenav").length > 0 || $("#main").length > 0)
			{
				if(screenWidth <= 800)
				{
					document.getElementById("mySidenav").style.left = "0";
					document.getElementById("main").style.marginLeft = "100%";
				}
				else
				{
					document.getElementById("mySidenav").style.left = "0px";
					document.getElementById("main").style.marginLeft = "800px";
				}
			}				
		})
		
		$('.closebtn').on('click',function(e){
			e.preventDefault();
			if($("#mySidenav").length > 0 || $("#main").length > 0)
			{
				document.getElementById("mySidenav").style.left = "-800px";
				document.getElementById("main").style.marginLeft= "0";
			}
		})
	}
	
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear(); 
	/* Website Launch Date END */ 
	
	
	/* Function ============ */
	return {
		init:function(){
			onePageLayout();
			handleCountDown(WebsiteLaunchDate);
			handleSideBarMenu();
		},
		load:function(){
			handleCustomScroll();
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
  Siva.init();
});
/* Document.ready END */
/* Window Load START */
jQuery(window).on("load", function (e) {
	Siva.load();
});
/*  Window Load END */

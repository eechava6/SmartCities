$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	function includeHTML() {
		var z, i, elmnt, file, xhttp;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
		  elmnt = z[i];
		  /*search for elements with a certain atrribute:*/
		  file = elmnt.getAttribute("w3-include-html");
		  if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			  if (this.readyState == 4) {
				if (this.status == 200) {elmnt.innerHTML = this.responseText;}
				if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
				/* Remove the attribute, and call this function once more: */
				elmnt.removeAttribute("w3-include-html");
				includeHTML();
			  }
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		  }
		}
	  }
	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});
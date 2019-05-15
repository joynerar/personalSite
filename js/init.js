(function($){
  $(function(){
	$('.slider').slider({
		full_width: true, 
		indicators: false,
		height: 600
		});
	$('textarea#msg').characterCounter();
    $('.parallax').parallax();
	$('.sidenav').sidenav();
	$('.materialboxed').materialbox();
  }); // end of document ready
})(jQuery); // end of jQuery name space

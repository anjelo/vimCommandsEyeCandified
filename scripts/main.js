$(document).ready(function(){
	$('.tbl').hide(); 
	$('.hdr').click(function(){
		$(this).next().slideToggle('fast');
	});
	// $('.hexit').click(function (){
		// $('.tblExit').slideToggle('fast');
	// });
	// $('.hedit').click(function (){
		// $('.tblEdit').slideToggle('fast');
	// });
	

});
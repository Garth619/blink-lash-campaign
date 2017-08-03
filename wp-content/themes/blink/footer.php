</div><!-- wrapper -->

<?php if(is_front_page()):?>

<footer>
	
	<div class="contact_us footer_col">
		<a href="#myform">Contact Us</a>
	</div><!-- contact_us -->
	
	<div class="book_now_sticky footer_col">
		<span class="multi_location">Book Now</span>
	</div><!-- book_now -->
	
</footer>

<div class="book_now_overlay">
	
	<div class="book_now_inner_overlay">
		
		<span class="close">Close X</span>
		
		<img src="<?php bloginfo('template_directory');?>/images/logo.png"/>
		
		<span class="overlay_title">To book an appointment, select a location below:</span>
		
		<span class="overlay_location_title">Mission Valley</span><!-- overlay_location_title -->
		
		<a class="book_now" href="http://www.secure-booker.com/blinksandiego/MakeAppointment/Search.aspx" target="_blank">Book Now</a><!-- book_now -->
		
		<span class="overlay_location_title">Solana Beach</span><!-- overlay_location_title -->
		
		<a class="book_now" href="http://www.secure-booker.com/blinksolana/MakeAppointment/Search.aspx" target="_blank">Book Now</a><!-- book_now -->
		
	</div><!-- book_now_inner_overlay -->
	
	
</div><!-- book_now_overlay -->

<?php endif; ?>



<?php wp_footer();?>

</body>
</html>

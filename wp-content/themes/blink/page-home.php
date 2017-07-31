<?php 
	
/* Template Name: Home */	
	
get_header(); ?>



<section class="section_one">
	
	<div class="inner_wrapper">
	
		<div class="col col_left">
			
			<img class="logo" src="<?php bloginfo('template_directory');?>/images/logo.png"/>
			
			<span class="tagline">San Diego’s Premiere Lash Boutique</span><!-- tagline -->
			
			<img class="intro" src="<?php bloginfo('template_directory');?>/images/intro.jpg"/>
			
		</div><!-- col -->
		
		<div class="col col_right">
			
			<div class="form_wrapper">
				
				<span class="learn_more">Learn More Today!</span><!-- learn_more -->
				
				<a class="call" href="6199646082">619.964.6082</a>
				
				<?php gravity_form(1, false, false, false, '', true, 12); ?>
				
				
			</div><!-- form_wrapper -->
			
		</div><!-- col -->
	
	</div><!-- inner_section_one -->
	
</section><!-- section_one -->

<section class="section_two">
	
	<div class="inner_wrapper">
	
		<img src="<?php bloginfo('template_directory');?>/images/b.jpg"/>
	
		<h1>Why Blink Lash Boutique?</h1>
	
		<p>Welcome to Blink Lash Boutique, where Eyelash Extensions are our passion!  It is our mission to provide you with the highest degree of client service in a beautiful and welcoming setting.  We have been dedicated to the fine skill and art of Eyelash Extension application since 2006.  All of our Lash Stylists undergo extensive training and must meet all of the licensing requirements by the state of CA, as well as demonstrate their skilled technique to Blink’s owners.  This is to ensure that you, our valued client, will have the best application of Eyelash Extensions anywhere.</p>
	
		<a class="book_now" href="">Book Now</a><!-- book_now -->
	
	</div><!-- inner_wrapper -->

	
</section><!-- section_two -->



<?php get_footer(); ?>


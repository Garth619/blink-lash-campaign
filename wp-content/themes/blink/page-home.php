<?php 
	
/* Template Name: Home */	
	
get_header(); ?>



<section class="section_one">
	
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
	
	
</section><!-- section_one -->



<?php get_footer(); ?>


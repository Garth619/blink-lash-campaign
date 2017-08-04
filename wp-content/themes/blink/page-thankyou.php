<?php 
	
/* Template Name: Thank You */	
	
get_header(); ?>


<div class="thankyou">
	
	<img src="<?php bloginfo('template_directory');?>/images/logo.png"/>
	
	<?php get_template_part( 'loop', 'index' );?>
	
</div><!-- thankyou -->


<?php get_footer(); ?>


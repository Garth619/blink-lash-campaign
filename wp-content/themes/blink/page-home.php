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
				
				<a class="call" href="tel:6199646082">619.964.6082</a>
				
				<?php gravity_form(1, false, false, false, '', true, 12); ?>
				
				
			</div><!-- form_wrapper -->
			
		</div><!-- col -->
	
	</div><!-- inner_section_one -->
	
</section><!-- section_one -->

<section class="section_two">
	
	<div class="inner_wrapper">
	
		<img src="<?php bloginfo('template_directory');?>/images/b.jpg"/>
		
		<div class="sec_two_content">
	
		<h1>Why Blink Lash Boutique?</h1>
	
		<p>Welcome to Blink Lash Boutique, where Eyelash Extensions are our passion!  It is our mission to provide you with the highest degree of client service in a beautiful and welcoming setting.  We have been dedicated to the fine skill and art of Eyelash Extension application since 2006.  All of our Lash Stylists undergo extensive training and must meet all of the licensing requirements by the state of CA, as well as demonstrate their skilled technique to Blink’s owners.  This is to ensure that you, our valued client, will have the best application of Eyelash Extensions anywhere.</p>
	
		<a class="book_now" href="">Book Now</a><!-- book_now -->
		
		</div><!-- sec_two_content -->
	
	</div><!-- inner_wrapper -->

	
</section><!-- section_two -->


<section class="section_three">
	
	<div class="inner_wrapper">
	
	<h1>The Benefits of Blink Lash Boutique</h1>
	
	<div class="slideshow">
		
		<div class="buttons">
			
			<div class="back single_button">
				<img src="<?php bloginfo('template_directory');?>/images/left.png"/>
			</div><!-- back -->
			
			<div class="next single_button">
				<img src="<?php bloginfo('template_directory');?>/images/right.png"/>
			</div><!-- next -->
			
		</div><!-- buttons -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
		<div class="slide">
			
			<img src="<?php bloginfo('template_directory');?>/images/slide.jpg"/>
			
		</div><!-- slide -->
		
	</div><!-- slideshow -->
	
	<div class="sec_three_content">
		
		
		<p>At Blink Lash Boutique we do not cut corners.  We use the finest products available and are dedicated to taking the utmost care to ensure the health of your natural lashes.  We use our artistry and skill so that each set applied is perfect for your eyes, the length of your natural lashes, and the look you are going for.</p> 

<p>It is our guarantee that you will leave with the most flawless and beautiful set of Eyelash Extensions that will leave you wondering how you ever lived without them!</p>
		
	<a class="book_now" href="">Book Now</a><!-- book_now -->

	</div><!-- sec_three_content -->
	
	</div><!-- inner_wrapper -->
	
	
</section><!-- section_three -->



<?php get_footer(); ?>


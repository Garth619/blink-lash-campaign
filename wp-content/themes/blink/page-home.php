<?php 
	
/* Template Name: Home */	
	
get_header(); ?>



<section class="section_one">
	
	<div class="inner_wrapper">
	
		<div class="col col_left">
			
			<img class="logo" src="<?php bloginfo('template_directory');?>/images/logo.png" alt="Blink Lash Botuique Logo"/>
			
			<span class="tagline"><?php the_field( 'tagline' ); ?></span><!-- tagline -->
			
			<img class="intro" src="<?php the_field( 'intro_image' ); ?>" alt="Blink Lash Botuique Model"/>
			
		</div><!-- col -->
		
		
	
	</div><!-- inner_section_one -->
	
</section><!-- section_one -->

<section class="section_two">
	
	<div class="inner_wrapper">
	
		<img src="<?php bloginfo('template_directory');?>/images/b.jpg" alt="Blink Lash Botuique Intro"/>
		
		<div class="sec_two_content">
	
		<h1><?php the_field( 'section_1_title' ); ?></h1>
	
		<?php the_field( 'section_1_content' ); ?>
	
		<span class="book_now multi_location"><?php the_field( 'book_now_button_verbiage' ); ?></span><!-- book_now -->
		
		</div><!-- sec_two_content -->
	
	</div><!-- inner_wrapper -->

	
</section><!-- section_two -->


<section class="section_three">
	
	<div class="inner_wrapper">
	
	<h1><?php the_field( 'section_2_title' ); ?></h1>
	
	<div class="slideshow">
		
		<div class="buttons">
			
			<div class="back single_button">
				<img src="<?php bloginfo('template_directory');?>/images/left.png" alt="back"/>
			</div><!-- back -->
			
			<div class="next single_button">
				<img src="<?php bloginfo('template_directory');?>/images/right.png" alt="next"/>
			</div><!-- next -->
			
		</div><!-- buttons -->
		
		
		
		<?php if(get_field('before_and_after_slides')): ?>
		 
			<?php while(has_sub_field('before_and_after_slides')): ?>
		 
					<div class="slide">
			
						<img src="<?php the_sub_field( 'slides' ); ?>" alt="Before and After Slides"/>
			
					</div><!-- slide -->
		    
			<?php endwhile; ?>
		 
		<?php endif; ?>
		

				
				
	</div><!-- slideshow -->
	
	<div class="sec_three_content">
		
		
		<?php the_field( 'section_2_content' ); ?>
		
				
	<span class="book_now multi_location"><?php the_field( 'book_now_button_verbiage' ); ?></span><!-- book_now -->

	</div><!-- sec_three_content -->
	
	</div><!-- inner_wrapper -->
	
	
</section><!-- section_three -->


<section class="section_four">
	
	<div class="inner_wrapper">
	
		<h1><?php the_field( 'section_3_title' ); ?></h1>
		
		<div class="location">
			
			<img src="<?php the_field( 'location_1_image' ); ?>" alt="Mission Valley"/>
			
			<div class="location_content">
				
				
				
				<span class="pink"><?php the_field( 'location_1_title' ); ?></span><!-- pink -->
		
				<a class="address" href="<?php the_field( 'location_1_address_link' ); ?>" target="_blank"><?php the_field( 'location_1_address' ); ?></a>
					

				<ul class="hours">
					
					
					<?php if(get_field('location_1_hours')): ?>
					 
						<?php while(has_sub_field('location_1_hours')): ?>
					 
							<li><?php the_sub_field( 'new_line_item' ); ?></li>
					
					    
						<?php endwhile; ?>
					 
					<?php endif; ?>
					
					
				</ul>
				
				<a class="tel" href="tel:<?php the_field( 'location_1_phone' ); ?>"><?php the_field( 'location_1_phone' ); ?></a>
		
				<a class="email" href="mailto:<?php the_field( 'location_1_email' ); ?>"><?php the_field( 'location_1_email' ); ?></a>
			
			</div><!-- location_content -->
			
			
			
			<a class="book_now desktop_book_now" href="<?php the_field( 'mission_valley_book_now_link' ); ?>" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
			<a class="book_now mobile_book_now" href="<?php the_field( 'mobile_-_mission_valley_book_now_link' ); ?>" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
		</div><!-- location -->
		
		<div class="location">
			
			<img src="<?php bloginfo('template_directory');?>/images/location2.jpg" alt="Solana Beach"/>
			
			<div class="location_content">
				
				
				
				<span class="pink"><?php the_field( 'location_2_title' ); ?></span><!-- pink -->
		
				<a class="address" href="<?php the_field( 'location_2_address_link' ); ?>" target="_blank"><?php the_field( 'location_2_address' ); ?></a>
					

				<ul class="hours">
					
					
					<?php if(get_field('location_2_hours')): ?>
					 
						<?php while(has_sub_field('location_2_hours')): ?>
					 
							<li><?php the_sub_field( 'new_line_item' ); ?></li>
					
					    
						<?php endwhile; ?>
					 
					<?php endif; ?>
					
					
				</ul>
				
				<a class="tel" href="tel:<?php the_field( 'location_2_phone' ); ?>"><?php the_field( 'location_2_phone' ); ?></a>
		
				<a class="email" href="mailto:<?php the_field( 'location_2_email' ); ?>"><?php the_field( 'location_2_email' ); ?></a>
			
			</div><!-- location_content -->
			
			<a class="book_now desktop_book_now" href="<?php the_field( 'solana_beach_book_now_link' ); ?>" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
			
			<a class="book_now mobile_book_now" href="<?php the_field( 'mobile_-_solana_beach_book_now_link' ); ?>" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
		</div><!-- location -->
	
	</div><!-- inner_wrapper -->
	
</section><!-- section_four -->

<section class="section_five">
	
	<div class="inner_wrapper">
		
		<h1><?php the_field( 'section_4_title' ); ?></h1>
		
		<div class="testi">
			
			<img src="<?php the_field( 'section_4_image' ); ?>" alt="Kiana C."/>
			
			<span class="name"><?php the_field( 'section_4_name' ); ?></span><!-- name -->
			
			<p><?php the_field( 'section_4_content' ); ?></p>
			
		</div><!-- testi -->
		
		<div class="testi">
			
			<img src="<?php the_field( 'section_4_image_2' ); ?>" alt="Alexandra G."/>
			
			<span class="name"><?php the_field( 'section_4_name_2' ); ?></span><!-- name -->
			
			<p><?php the_field( 'section_4_content_2' ); ?>.</p>
			
		</div><!-- testi -->
		
	</div><!-- inner_wrapper -->
	
</section><!-- section_five -->

<section class="section_six">
	
	
	<div id="myform" class="form_wrapper">
				
		<h1><?php the_field( 'form_call_to_action' ); ?></h1>
				
		<a class="call" href="tel:<?php the_field( 'phone_number' ); ?>"><?php the_field( 'phone_number' ); ?></a>
				
		<?php gravity_form(1, false, false, false, '', true, 12); ?>
				
				
	</div><!-- form_wrapper -->
	
	
</section><!-- section_six -->



<?php get_footer(); ?>


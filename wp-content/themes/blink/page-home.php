<?php 
	
/* Template Name: Home */	
	
get_header(); ?>



<section class="section_one">
	
	<div class="inner_wrapper">
	
		<div class="col col_left">
			
			<img class="logo" src="<?php bloginfo('template_directory');?>/images/logo.png"/>
			
			<span class="tagline"><?php the_field( 'tagline' ); ?></span><!-- tagline -->
			
			<img class="intro" src="<?php the_field( 'intro_image' ); ?>"/>
			
		</div><!-- col -->
		
		<div class="col col_right">
			
			<div id="myform" class="form_wrapper">
				
				<span class="learn_more"><?php the_field( 'form_call_to_action' ); ?></span><!-- learn_more -->
				
				<a class="call" href="tel:<?php the_field( 'phone_number' ); ?>"><?php the_field( 'phone_number' ); ?></a>
				
				<?php gravity_form(1, false, false, false, '', true, 12); ?>
				
				
			</div><!-- form_wrapper -->
			
		</div><!-- col -->
	
	</div><!-- inner_section_one -->
	
</section><!-- section_one -->

<section class="section_two">
	
	<div class="inner_wrapper">
	
		<img src="<?php bloginfo('template_directory');?>/images/b.jpg"/>
		
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
				<img src="<?php bloginfo('template_directory');?>/images/left.png"/>
			</div><!-- back -->
			
			<div class="next single_button">
				<img src="<?php bloginfo('template_directory');?>/images/right.png"/>
			</div><!-- next -->
			
		</div><!-- buttons -->
		
		
		
		<?php if(get_field('before_and_after_slides')): ?>
		 
			<?php while(has_sub_field('before_and_after_slides')): ?>
		 
					<div class="slide">
			
						<img src="<?php the_sub_field( 'slides' ); ?>"/>
			
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
			
			<img src="<?php the_field( 'location_1_image' ); ?>"/>
			
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
			
			
			
			<a class="book_now" href="<?php the_field( 'mission_valley_book_now_link' ); ?>" onclick="goog_report_conversion ('<?php the_field( 'mission_valley_book_now_link' ); ?>')" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
		</div><!-- location -->
		
		<div class="location">
			
			<img src="<?php bloginfo('template_directory');?>/images/location2.jpg"/>
			
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
			
			<a class="book_now" href="<?php the_field( 'solana_beach_book_now_link' ); ?>" onclick="goog_report_conversion ('<?php the_field( 'solana_beach_book_now_link' ); ?>')" target="_blank"><?php the_field( 'book_now_button_verbiage' ); ?></a><!-- book_now -->
			
		</div><!-- location -->
	
	</div><!-- inner_wrapper -->
	
</section><!-- section_four -->

<section class="section_five">
	
	<div class="inner_wrapper">
		
		<h1>WHat Others Are Saying</h1>
		
		<div class="testi">
			
			<img src="<?php bloginfo('template_directory');?>/images/test1.jpg"/>
			
			<span class="name">Kiana C.</span><!-- name -->
			
			<p>I was referred to go here by a friend and boy was I happy I went! All the girls are sweet as can be. Not to mention the decor and vibe is adorable and very relaxing. Their lashes, technique, and products are top of the line. My fiancé loves when I get my lashes done here, they look so natural and flawless! I constantly recieve complimaints. It's definitely worth the time and money to pamper ourselves with the best out there! Without a doubt I would recommend going to Blink Lask Boutique in either location, you won't regret&nbsp;it!</p>
			
		</div><!-- testi -->
		
		<div class="testi">
			
			<img src="<?php bloginfo('template_directory');?>/images/test2.jpg"/>
			
			<span class="name">Alexandra G.</span><!-- name -->
			
			<p>Throughout my entire life my eyelashes, or lack thereof, have always been my biggest insecurity. Ever since I discovered Blink Lash, my life has truly turned around. I started going to Blink a little over two years ago, and I have been hooked ever since. I would highly recommend booking an appointment at their Mission Valley location! Not only is it convenient to get there, the process is very comfortable and relaxing, all at a great price point. I promise, if you visitBlink Lash in Mission Valley then you will not be&nbsp;disappointed.</p>
			
		</div><!-- testi -->
		
	</div><!-- inner_wrapper -->
	
</section><!-- section_five -->



<?php get_footer(); ?>


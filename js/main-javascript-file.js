// stiky header start 
	window.onscroll = function() {myFunction()};

	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}
// stiky header end

// loader start
	$(window).on('load', function(){
		setTimeout(function(){
	  $('.loaderMain').addClass('hideLoader');
		},3000);
	});


// loader end
	jQuery(document).ready(function(){
		// $(".mobile-menu-container").hide();
		  $(".mobile-menu-container").css("right","-100%");

		$(".menu-open").click(function(){
		  $(".mobile-menu-container").css("right","0");
		});
		$(".menu-close").click(function(){
		  $(".mobile-menu-container").css("right","-100%");
		  $(".menu-open").show();
		});
	});
//  contact-from-01
	jQuery(document).ready(function(){
		$(".contact-us-from-section").hide();

		$(".contact-btn-from").click(function(){
		  $(".contact-us-from-section").show(500);
		  $(".menu-open").hide();
		});
		$(".from-menu-close").click(function(){
		  $(".contact-us-from-section").hide(500);
		  $(".menu-open").show();
		});
	});

//  contact-from end

// owl-carousel start
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    nav: true,
		    loop:true,
		    dot:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true
		});
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[1500])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
	});
// owl-carousel end// 


// counter start	

// const counters = document.querySelectorAll('.value');
// 	const speed = 5000;

// 	counters.forEach( counter => {
// 	   const animate = () => {
// 	      const value = +counter.getAttribute('cont');
// 	      const data = +counter.innerText;
	     
// 	      const time = value / speed;
// 	     if(data < value) {
// 	          counter.innerText = Math.ceil(data + time);
// 	          setTimeout(animate, 500);
// 	        }else{
// 	          counter.innerText = value;
// 	        }
	     
// 	   }
	   
// 	   animate();
// 	});
// owl-carousel end

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});
	// end hamburger menu

	// This is the pop-up gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	var allPanels = $('.accordion > dd').hide();

		$('.accordion > dt > a').click(function() {

			allPanels.slideUp();

	    $(this).filter('.open').removeClass('open').addClass('closing')
	    $('.accordion > dt > a').removeClass('open');
	  $(this).not(".closing").addClass('open').parent().next().slideDown();
	    $('.accordion > dt > a').removeClass('closing');

	    return false;
		});

	// end accordian

	// Slick Slider
	$('.slick-blog-loop').slick({
		autoplay: false
	});

});


$(function() {
	AOS.init({
		delay: 100,
		offset: 100,
		mirror: true,
		duration: 1000
	});

	window.addEventListener('load', AOS.refresh);

});



// Nav bar appear and dissapear on scroll

var lastScrollTop = 0;

$(window).scroll(function () {

var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $('.nav-bar ').fadeIn();
        } else {
          $('.nav-bar ').fadeOut();
        }
        lastScrollTop = st;
  })

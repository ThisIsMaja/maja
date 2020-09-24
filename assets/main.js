
$(document).ready(function() {

		$("#expand-menu").click(function(){
			$("#expand-menu").toggleClass('active');
		  $("#expand-nav").slideToggle();
		});

});


$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle().toggleClass('active');

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
		autoplay: true,
  	autoplaySpeed: 5000
	});

	$('.slick-loop').slick({
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.slick-product-loop').slick({
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.slick-compare-loop').slick({
		autoplay: true,
		autoplaySpeed: 4000
	});

	$('.slick-gallery-loop').slick({
		autoplay: true,
		autoplaySpeed: 4000
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
//
// var lastScrollTop = 0;
// var delayOpen;
//
// $(window).scroll(function () {
//
//   if (delayOpen) {clearTimeout( delayOpen )};
//
//   var st = $(this).scrollTop();
//
//   if (st < lastScrollTop){
//     $('.nav-bar ').fadeIn();
//   } else {
//     $('.nav-bar ').fadeOut()
//   };
//
//   function reset(){
//
//     delayOpen = setTimeout(function(){ $('.nav-bar ').fadeIn(); }, 500);
//   };
//
//   reset()
//
//   lastScrollTop = st;
//
// })

// End Nav Bar

// JQuery filtering for shop page

$(document).ready(function(){
  /* filtering */

  $('nav#product-filter a').click(function(e){
    e.preventDefault();

    /* make this link class active and remove class 'active' from any other links */
    $('nav#product-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().replace(' ','-').toLowerCase().replace(' ','-');



    $('#product-loop .shop-item').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
				};
    });

});


$('nav#blog-filter a').click(function(e){
	e.preventDefault();

	/* make this link class active and remove class 'active' from any other links */
	$('nav#blog-filter .active').removeClass('active');
	$(this).addClass('active');

	/* get the name of the cateory from this link */
	var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();
	$('#blog-loop .masonry-item').each(function() {
			if(filterVal == 'all'){
				$(this).removeClass('hidden');
				$('#read-more').removeClass('hidden');
			}else{
				if(!$(this).hasClass(filterVal)) {
					$(this).addClass('hidden'); // hide those that don't have the filter
				}else{
					$(this).removeClass('hidden'); // show those that do have the filter
				}
			$('#read-more').addClass('hidden');
			AOS.refresh();
			};
	});

});


});


// Google Lazy Loading for videos

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});


document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});

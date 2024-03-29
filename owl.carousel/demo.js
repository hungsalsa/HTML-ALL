$('.owl-carousel').owlCarousel({
	items: 1,
    itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false,
      loop:true,
      margin:0,
      nav:true,
      lazyLoad : true,
        // dotsSpeed:true,
        autoplay:true,
        autoplayTimeout:69000,
        navigation: true,
        singleItem: true,
        pagination: false,
        rewindSpeed: 500,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
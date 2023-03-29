var service = $('.service-carousel');

service.owlCarousel({
    margin:10,
    loop:true,
    dotsContainer: '#service-dots',
    autoWidth:true,
    items:3
});

// Go to the next item
$('.service-next').click(function() {
    service.trigger('next.owl.carousel');
})
// Go to the previous item
$('.service-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    service.trigger('prev.owl.carousel', [300]);
})

var hero = $('.hero-carousel');
hero.owlCarousel({
    margin:500,
    loop:true,
    dots:false,
    items:1
});

// Go to the next item
$('.hero-next').click(function() {
    hero.trigger('next.owl.carousel');
})
// Go to the previous item
$('.hero-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    hero.trigger('prev.owl.carousel', [300]);
})


var project = $('.project-carousel');
project.owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    dots: false,
    items: 4,
    onChanged: function(event) {
      var current = event.item.index + 1;
      $('#project-dots .owl-dot span').removeClass('active');
      $('#project-dots .owl-dot:nth-child('+current+') span').addClass('active');
    }
});
  
$('#project-dots .owl-dot').click(function() {
    var index = $(this).index();
    project.trigger('to.owl.carousel', [index, 300]);
});
  
$('#project-dots .owl-dot:first-child span').addClass('active');

$('#project-dots .owl-dot').click(function() {
    $('#project-dots .owl-dot span').removeClass('active');
    $(this).find('span').addClass('active');
    var index = $(this).index();
    project.trigger('to.owl.carousel', [index, 300]);
});

var client = $('.client-carousel');
client.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
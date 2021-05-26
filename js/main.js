$(document ).ready(function() {

    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");

// contact page toogles
$("#contact-mapClick").click(function () {
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");
});
$("#contact-carClick").click(function () {
    $('#contact-map').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-car').show();
    $("#contact-carClick").addClass("active");
});
$("#contact-busClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bus').show();
    $("#contact-busClick").addClass("active");
});
$("#contact-bikeClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bike').show();
    $("#contact-bikeClick").addClass("active");
});
$("#contact-phoneClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-phone').show();
    $("#contact-phoneClick").addClass("active");
});



$("#contact-mailClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");

    $('#contact-mail').show();
    $("#contact-mailClick").addClass("active");
});
//google map
var map;
  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(26.905780, 75.744604),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});   

$(document).ready(function(){
   
var $animation_elements = $('#about_content');

var $window = $(window);

function check_if_in_view() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
	var animation='fadeInLeft';
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      	  $element.addClass('animated ' + animation); 
	  
	  } else {
      $element.removeClass('animated ' + animation);
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});

$(document).ready(function(){
   
var $animation_elements = $('#about_content1');

var $window = $(window);

function check_if_in_view() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
	var animation='fadeInRight';
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      	  $element.addClass('animated ' + animation); 
	  
	  } else {
      $element.removeClass('animated ' + animation);
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});

$(document).ready(function(){
   
var $animation_elements = $('#about_content2');

var $window = $(window);

function check_if_in_view() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
	var animation='fadeIn';
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      	  $element.addClass('animated ' + animation); 
	  
	  } else {
      $element.removeClass('animated ' + animation);
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});
   
$(document).ready(function(){
   
var $animation_elements1 = $('#about_image');

var $window = $(window);

function check_if_in_view1() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements1, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
	var animation='slideInRight';
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      	  $element.addClass('animated ' + animation); 
	  
	  } else {
      $element.removeClass('animated ' + animation);
    }
  });
}

$window.on('scroll resize', check_if_in_view1);
$window.trigger('scroll');
});
 


 });

 $(document).ready(function(){
	 
	 function footerHeight() {
  var $footer = $("footer").outerHeight();
  $(".main").css('margin-bottom', $footer + 'px');
}

$(window).on('load resize', footerHeight);
 });

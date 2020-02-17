import 'jquery'
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

$(document).ready(function(){
  $('.works-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    аccessibility: true,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left prev-arrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right next-arrow" aria-hidden="true"></i>'
  });
});
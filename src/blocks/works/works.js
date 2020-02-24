import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30
      },
      360: {
        items: 1.5
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    navText: ["<i class='fa fa-chevron-left prev-arrow' aria-hidden='true'></i>", "<i class='fa fa-chevron-right next-arrow' aria-hidden='true'></i>"],
  });
});

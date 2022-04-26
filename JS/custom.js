// JavaScript Document

$(document).ready(function(){
	$(".btn-menu").click(function(){
		$(".menu").slideToggle()
	})
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:5000,
	smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function openProduct(evt, productName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
	
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";	
}
	document.getElementById("defaultOpen").click();







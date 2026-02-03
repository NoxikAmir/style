/* 
  Theme Name: Echoroukonline Mngez Style
  Theme URI: https://www.mngez.com/
  Description: Echoroukonline Mngez Style
  Version: 0.1
  Author: شركة منجز لخدمات الإنترنت
  Author URI: https://www.mngez.com/
  Tags: host, design, domain
*/

// Scroll To Top
$(document).ready(function(){
 $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
   $('.scrollup').fadeIn();
  } else {
   $('.scrollup').fadeOut();
  }
 });
 $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600); return false;
 });
});


// Mobail Menu
$(document).ready(function(){
  $('#headermob button.buttonmenu').on('click',function(){
    $('#sidebarmob').toggleClass('menuisopen');
  });
  $('#sidebarmob button.closemenu').on('click',function(){
    $('#sidebarmob').toggleClass('menuisopen');
  });
});
$(document).ready(function(){
  $("#sidebarmob .userarea button").click(function(){
    $("#sidebarmob .userarea button, #sidebarmob .userarea ul").toggleClass("openlist");
  });
});

// Tabs
$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $(this).parent().parent().find('.tabs li').removeClass('current');
        $(this).parent().parent().find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})


// Get the modal
var modal = document.getElementById('Loginform');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Highligh Table row on selection
$(function() {
    $('td:first-child input').change(function() {
    $(this).closest('tr').toggleClass("checked", this.checked);
    });
});
 

 //Tooltip 
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function(){
    $('[data-toggle=tooltip-active]').tooltip({trigger: 'manual'}).tooltip('show');
});

jQuery(function($) {

    $('[data-toggle=tooltip]').hover(function() {
        $('[data-toggle=tooltip-active]').tooltip('destroy'); 
    }, function() {
        $('[data-toggle=tooltip-active]').tooltip({trigger: 'hover'}); 
    });

});


// SMOOTHER HOVER ON NAVBAR
//jQuery('ul.nav li.dropdown').hover(function() {
//  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
//}, function() {
//  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
//});

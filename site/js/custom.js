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

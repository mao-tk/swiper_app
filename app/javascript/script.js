/* global $*/

let title = "javascriptが使えました";
alert(title);

$(function(){
  $('.jquery').on('click', function(){
    $(this).css('color', 'red');
  });
});
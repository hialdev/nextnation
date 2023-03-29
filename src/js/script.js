const menu = $('.menu');
const open = $('.btn-menu.open');
const close = $('.btn-menu.close');

open.click(function(){
    menu.addClass('active');
})
close.click(function(){
    menu.removeClass('active');
})
var navOffset = $('#mainNav').height();
$('body').scrollspy({ target: ".navbar", offset: 500 });
$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
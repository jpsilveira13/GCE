$('#openMenu').on('click',function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('#menu').toggleClass('is-menu-visible');


});


$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var $videoSrc;
$('.video-btn').click(function() {

    $videoSrc = $(this).data( "src" );
});


// when the modal is opened autoplay it
$('#modalVideo').on('shown.bs.modal', function (e) {

// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1" );
})


// stop playing the youtube video when I close the modal
$('#modalVideo').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc);
})


$('.languageSelect').on('click',function (e) {
    e.preventDefault();
    var locale = $(this).data('value');

    $.ajax({
        url: '/language',
        type:'POST',
        data:{locale:locale},
        dataType: 'json',
        success:function (data) {

        },
        error:function (data) {

        },
        complete:function (data) {
            window.location.reload(true);
        }
    });

});
$('.owl-latest').owlCarousel({
    loop:false,

    dots:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,
            margin:10,
        },
        1000:{
            items:3,
            margin:10,
        }
    }
});
$('.owl-investor').owlCarousel({
    loop:false,

    dots:true,
    responsive:{
        0:{
            items:2,
            margin:10,
        },
        600:{
            items:2,
            margin:10,
        },
        1000:{
            items:4,
            margin:10,
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,

    dots:true,
    responsive:{
        0:{
            items:1,
            loop:false
        },
        600:{
            items:1
        },
        1000:{
            items:1

        }
    }
});





$('.btnAll').click(function () {
    var cat = $(this).data('value');
    if(cat === "all"){
        $('.row .search-employee').fadeIn('fast');
    }
    $('.search-employee').each(function() {
        if($(this).hasClass(cat)){
            $(this).fadeIn('fast');

        }else{
            $(this).fadeOut('fast');
        }

    });
});

$(window).scroll(function(){
    if ($("#team").offset().top < $(window).scrollTop()){

        $('.timer').countTo('start');
    }
});
function successDiv(){
    return '<div id="successDiv"><p style="color: #fff">The message was successfully sent!</p></div>'
}
$('#newsLetterSubmit').submit(function (e) {
    e.preventDefault();

    $.ajax({
        type:'POST',
        url: 'add-newsletter',
        data: $(this).serialize(),
        success:function (data) {
            if(data.fail){
                swal(
                    'Ops!',
                    data.me,
                    'error'
                )
            }else{
                $('.numberAlter').html(data.quantify);
                swal(
                    data.mh,
                    data.mb,
                    'success'
                );
                $('#formHideSuccess').empty();
                $('.newsletter-form').append(successDiv());
            }
        },error:function (data) {
            console.log(data);
            swal(
                'Ops!',
                data.me,
                'error'
            )
        }
    });
});


$('#btnReadMore').click(function (e) {
    e.preventDefault();
    $('#roadmap .owl-carousel .owl-stage-outer').css('height','auto');
    $(this).hide();
});



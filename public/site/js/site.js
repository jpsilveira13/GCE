$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



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
$('.owl-carousel').owlCarousel({

    nav:true,
    loop:true,
    navigation : true,
    dots:true,

    responsive:{
        0:{
            items:3,
            margin:10,
        },
        600:{
            items:5,
            margin:25,
        },
        1024:{
            items:7,
            margin:75,


        }
    }
});



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





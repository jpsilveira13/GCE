<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mundo Gamer Token</title>

    <!-- Bootstrap core CSS -->
    <link href="{{asset('site/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('site/css/owl.carousel.min.css')}}" rel="stylesheet">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Custom fonts for this template -->
    <script src="https://use.fontawesome.com/9a93b47e91.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800|Open+Sans" rel="stylesheet">

    <!-- Plugin CSS -->

    <!-- Custom styles for this template -->
    <link href="{{asset('site/css/gce.min.css')}}" rel="stylesheet" />

    @yield('site-css')
    <link href="{{asset('site/css/site.css')}}" rel="stylesheet" />
    <link href="{{asset('site/css/menu.css')}}" rel="stylesheet" />
    <link rel="shortcut icon" type="image/png" href="{{url('site/img/favicon.ico')}}" />

</head>
<body id="page-top" class="">

<!-- header -->

@yield('header')

<!-- main -->

@yield('content')

<!-- footer -->

@yield('footer')


<script src="{{asset('site/js/jquery.min.js')}}"></script>
<script src="{{asset('site/js/bootstrap.bundle.min.js')}}"></script>

<!-- Plugin JavaScript -->
<script src="{{asset('site/js/jquery.easing.min.js')}}"></script>
<script src="{{asset('site/js/jquery.magnific-popup.min.js')}}"></script>
<script src="{{asset('site/js/owl.carousel.min.js')}}"></script>

<!-- Custom scripts for this template -->

<script src="{{asset('site/js/cge.min.js')}}"></script>


<script src="{{asset('site/js/site.js')}}"></script>


@yield('site-js')

<script src="{{asset('site/js/menu.js')}}"></script>
<!--
<div id="menu">
    <a href="#" class="close"></a>
    <ul>

        <li> <a href="{{route('logout')}}">Logout</a> </li>
    </ul>
</div>
-->
<script>
    $('.close').on('click',function (e) {
        e.preventDefault();

        $('#menu').removeClass('is-menu-visible');

    });
    $('#menu').click(function( e ){
        e.stopPropagation();
    });
    $('body').click(function(){
        $('#menu').removeClass("is-menu-visible")
    });
</script>
</body>

</html>

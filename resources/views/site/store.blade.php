@extends('site.index')
@section('header')
    @include('site.contents.header')
@endsection
@section('content')
   <!-- include da parte do site sobre -->
    @include('site.includes.sobre')
   <!-- include da parte do site portfolio -->
    @include('site.includes.portfolio')
   <!-- include da parte do site cliente -->
   @include('site.includes.clientes')
@endsection
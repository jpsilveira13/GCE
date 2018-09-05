<?php

namespace gce\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;


class LanguageController extends Controller
{
    public function changeLanguage(Request $request){
        if($request->ajax()){
            $request->session()->put('locale',$request->locale);

        }
    }
}

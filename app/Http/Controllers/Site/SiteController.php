<?php

namespace gce\Http\Controllers\Site;

use Illuminate\Http\Request;
use gce\Http\Controllers\Controller;

class SiteController extends Controller
{
    public function index(){
        return view('site.store');
    }
}

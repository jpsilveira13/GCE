<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/','Site\SiteController@index');

Route::group(['middleware' => 'auth', 'where' => ['id' => '[0-9]+']], function () {

    Route::name('logout')->get('logout','Admin\AdminController@getLogout');
});

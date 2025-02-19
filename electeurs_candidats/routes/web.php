<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/DashbordCandidat', function () {
    return view('Dashbord.candidat');
});

Route::get('/DashbordElecteur', function () {
    return view('Dashbord.electeur');
});

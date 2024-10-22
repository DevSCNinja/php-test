<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/overview/{name}', function (Request $request, string $name) {
    return Inertia::render('Detail', [
        'pokemonName' => $name
    ]);
});

require __DIR__.'/auth.php';

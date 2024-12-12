<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware('api')->group(function () {
    Route::get('/blogs', [BlogController::class, 'index']); 
    Route::post('/addblog', [BlogController::class, 'store']); 
    Route::get('/blogs/{blog}', [BlogController::class, 'show']); 
    Route::put('/blogs/{blog}', [BlogController::class, 'update']); 
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy']); 
    
});
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware('api')->group(function () {
    Route::get('/blogs', [BlogController::class, 'index']); // List all blogs
    Route::post('/addblog', [BlogController::class, 'store']); // Create a new blog
    Route::get('/blogs/{blog}', [BlogController::class, 'show']); // Get a single blog
    Route::put('/blogs/{blog}', [BlogController::class, 'update']); // Update a blog
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy']); // Delete a blog
    
});
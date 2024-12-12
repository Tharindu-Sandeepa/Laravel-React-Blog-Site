<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    
    public function index()
    {
        $blogs = Blog::all();
        return response()->json(['blogs' => $blogs], 200);
    }

   
    public function store(Request $request)
    {
        $data = $request->validate([
            'topic' => 'required|string|max:255',
            'content' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048'
        ]);


         // Handle image upload
         if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/img');
            $imageUrl = asset('storage/img/' . basename($imagePath));
        } else {
            return response()->json(['error' => 'No image uploaded'], 400);
        }

        // Create blog entry with the image URL
        $newBlog = Blog::create([
            'topic' => $data['topic'],
            'content' => $data['content'],
            'description' => $data['description'],
            'image' => $imageUrl,
        ]);


        return response()->json(['blog' => $newBlog], 201);
    }

   
    public function show(Blog $blog)
    {
        return response()->json(['blog' => $blog], 200);
    }

   
    public function update(Request $request, Blog $blog)
    {
        $data = $request->validate([
            'topic' => 'required|string|max:255',
           
            'content' => 'required|string',
            'description' => 'required|string'
        ]);

        $blog->update($data);

        return response()->json(['message' => 'Blog updated successfully', 'blog' => $blog], 200);
    }

   
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return response()->json(['message' => 'Blog deleted successfully'], 200);
    }
}
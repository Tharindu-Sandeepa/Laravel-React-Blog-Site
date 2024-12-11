<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json(['products' => $products], 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'qty' => 'required|numeric',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable'
        ]);

        $newProduct = Product::create($data);

        return response()->json(['product' => $newProduct], 201);
    }

    public function show(Product $product)
    {
        return response()->json(['product' => $product], 200);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required',
            'qty' => 'required|numeric',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable'
        ]);

        $product->update($data);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
        return Inertia::render(
            "admin/categories/index",
            ["categories" => $categories]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("admin/categories/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string'
        ]);

        $slug = Str::slug($request->name);

        if (Category::where('slug', $slug)->exists()) {
            return back()->with('message', ['slug' => 'The slug must be unique.']);
        }
        Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => $slug,
        ]);
        return to_route('categories.index')->with('message', 'Category created successfully.');
    }
    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return Inertia::render('admin/categories/show', [
            'category' => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render('admin/categories/edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string'
        ]);

        $slug = Str::slug($request->name);
        if (Category::where('slug', $slug)->where('id', '!=', $category->id)->exists()) {
            return back()->with('message', ['slug' => 'Category name already exists!']);
        }

        $category->update([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => $slug,
        ]);

        return back()->with('message', 'Category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return to_route('categories.index')->with('message', 'Category deleted.');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with("categories")->get();
        $categories = Category::all();
        return Inertia::render(
            "welcome",
            [
                "articles" => $articles,
                "categories"=> $categories,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        $categories = Category::all();
        return Inertia::render('articles/show', [
            'article' => $article,
            'user' => [
                'id' => $article->user->id,
                'name' => $article->user->name,
            ],
            'current_categories' => $article->categories,
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with('categories', 'user')->get()->map(function ($article) {
            return [
                'id' => $article->id,
                'title' => $article->title,
                'content' => $article->content,
                'user' => [
                    'id' => $article->user->id,
                    'name' => $article->user->name,
                ],
                'categories' => $article->categories->pluck('name')->toArray(),
                'created_at' => $article->created_at,
                'updated_at' => $article->updated_at,
            ];
        });

        return Inertia::render('admin/articles/index', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('admin/articles/create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'categories' => 'required|array|exists:categories,id',
        ]);
        $slug = Str::slug($request->title);
        $article =  Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'slug' => $slug,
            'user_id' => auth()->id(),
        ]);
        $article->categories()->attach($request->categories);
        return to_route('articles.index')->with('message', 'Article published.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article, User $user)
    {

        return Inertia::render('admin/articles/show', [
            'article' => $article,
            'user' => [
                'id' => $article->user->id,
                'name' => $article->user->name,
            ],
            'categories' => $article->categories->pluck('name')->toArray(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
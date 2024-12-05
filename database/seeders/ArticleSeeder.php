<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $article1 = DB::table('articles')->insertGetId([
            'title' => 'First Article',
            'slug' => 'first-article',
            'content' => 'This is the content of the first article.',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now(),
            'user_id' => 1,
        ]);
        $article2 = DB::table('articles')->insertGetId([
            'title' => 'Second Article',
            'slug' => 'second-article',
            'content' => 'This is the content of the second article.',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now(),
            'user_id' => 1,
        ]);

        DB::table('article_category')->insert([
            'article_id' => $article1,
            'category_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),

        ]);
        DB::table('article_category')->insert([
            'article_id' => $article2,
            'category_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),

        ]);
    }
}

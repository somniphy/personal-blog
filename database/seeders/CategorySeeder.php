<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Web development encompasses all tasks related to building websites.'
            ],
            [
                'name' => 'Software Development',
                'slug' => 'software-development',
                'description' => 'Software development is the process of creating software applications.'
            ],
            [
                'name' => 'React',
                'slug' => 'react',
                'description' => 'React is a JavaScript library for building user interfaces.'
            ],
            [
                'name' => 'PHP',
                'slug' => 'php',
                'description' => 'PHP is a popular general-purpose scripting language that is especially suited to web development.'
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}

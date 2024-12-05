<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "slug",
        "content",
        "user_id",
    ];

    //default article image if none was uploaded
    public function image()
    {
        return Attribute::make(
            get: fn($image): string => $image
                ? asset('storage/' . ltrim(str_replace('public/', '', $image) . '/'))
                : 'https://placehold.co/600x400'
        );
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

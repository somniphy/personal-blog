<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Spatie\Permission\Models\Role;


class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->roles->pluck('name')->toArray(),
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ];
        });

        return Inertia::render('admin/users/index', [
            'users' => $users,
        ]);
    }

    public function show(User $user)
    {
        return Inertia::render('admin/users/show', [
            'user' => $user,
            'roles' => $user->roles
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;



class RoleController extends Controller
{
    public function index(){
       return Inertia::render('admin/roles/index', [
         'roles' => Role::get(),
       ]);
    }

    public function show(Role $role){
        return Inertia::render('admin/roles/show', [
            'role' => $role,
            'permissions' => $role->permissions
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'role' => 'required|string|max:255',
 
        ]);
    }
}

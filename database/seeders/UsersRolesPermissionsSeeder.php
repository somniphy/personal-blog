<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UsersRolesPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'Admin']);
        $userRole = Role::create(['name' => 'User']);

        $permissions = [
            ['name' => 'view article'],
            ['name' => 'create article'],
            ['name' => 'edit article'],
            ['name' => 'delete article'],
            ['name' => 'view category'],
            ['name' => 'create category'],
            ['name' => 'edit category'],
            ['name' => 'delete category'],

        ];

        foreach ($permissions as $permission) {
            Permission::create($permission);
        }

        $adminRole->givePermissionTo(Permission::all());
        $userRole->givePermissionTo(['view article','view category']);

         // Create admin user
         $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@user.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
            'updated_at' => now(),
            'created_at' => now(),
        ]);
        $user->assignRole('Admin');

        // Create user
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@user.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
            'updated_at' => now(),
            'created_at' => now(),
        ]);
        $user->assignRole('User');

    }
}

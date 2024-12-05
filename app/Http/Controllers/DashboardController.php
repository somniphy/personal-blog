<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\User;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {

        $monthlyUsers = User::select(DB::raw("strftime('%m', created_at) as month"), DB::raw('count(*) as count'))
            ->where('created_at', '>=', Carbon::now()->subMonths(6))
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->map(function ($item) {
              
                $monthName = Carbon::createFromFormat('m', $item->month)->format('M');
                return [
                    'month' => $monthName,
                    'count' => $item->count
                ];
            });

        $totalUsers = User::count();
        $latestUsers = User::latest()->take(5)->get();
        $growth = User::where('created_at', '>=', Carbon::now()->subMonth())->count();

        return Inertia::render('dashboard', [
            'users' => [
                'total' => $totalUsers,
                'list' => $latestUsers,
                'growth' => $growth,
                'monthly' => $monthlyUsers
            ]
        ]);
    }
}




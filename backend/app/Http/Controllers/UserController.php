<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request){
        $formFields = $request->validate([
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|string|confirmed|max:255',
        ]);

        $formFields['password'] = bcrypt($formFields['password']);

        
        
        try {
            $user = User::create($formFields);
            return response()->json([
            'created' => 'true', 
            'user' => $user
        ], 201);
        
        } catch (\Exception $e) {
            return response()->json([
                'created' => 'false', 
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

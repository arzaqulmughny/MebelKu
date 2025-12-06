<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthRepository
{
    public function login(array $credentials): ?string
    {
        $token = Auth::attempt($credentials);
        return $token ?: null;
    }

    public function getExpiresIn(): int
    {
        return Auth::factory()->getTTL() * 60;
    }

    public function register(array $data)
    {
        try {
            return User::create($data);
        } catch (\Exception $exception) {
            throw new \Exception($exception->getMessage());
        }
    }
}


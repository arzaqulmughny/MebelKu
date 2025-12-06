<?php

use App\Models\User;
use App\Repositories\AuthRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;

pest()->use(RefreshDatabase::class);

test('login', function () {
    $user = User::create([
        'name' => 'User',
        'username' => 'user',
        'email' => 'user@example.com',
        'password' => bcrypt('password'),
    ]);

    $authRepository = new AuthRepository();
    $token = $authRepository->login([
        'email' => $user->email,
        'password' => 'password',
    ]);

    expect($token)->toBeString();
});

test('login with wrong password', function () {
    $user = User::create([
        'name' => 'User',
        'username' => 'user',
        'email' => 'user@example.com',
        'password' => bcrypt('password'),
    ]);

    $authRepository = new AuthRepository();
    $token = $authRepository->login([
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    expect($token)->toBeNull();
});

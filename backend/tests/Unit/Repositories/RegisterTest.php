<?php

use App\Models\User;
use App\Repositories\AuthRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;

pest()->use(RefreshDatabase::class);

test('register', function () {
    $authRepository = new AuthRepository();
    $user = $authRepository->register([
        'name' => 'User',
        'username' => 'user',
        'email' => 'user@example.com',
        'password' => 'password',
    ]);

    expect($user)->toBeInstanceOf(User::class);
});
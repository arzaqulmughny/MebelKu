<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Repositories\AuthRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   private AuthRepository $authRepository;

   public function __construct(AuthRepository $authRepository)
   {
      $this->authRepository = $authRepository;
   }

   /**
    * Authenticate an user
    */
   public function login(UserLoginRequest $request)
   {
      $token = $this->authRepository->login($request->validated());

      if (!$token) {
         return response()->json(['error' => 'Unauthorized'], 401);
      }

      return response()->json([
         'access_token' => $token,
         'token_type' => 'bearer',
         'expires_in' => $this->authRepository->getExpiresIn()
      ]);
   }

   /**
    * Register an user
    */
   public function register(UserRegisterRequest $request)
   {
      try {
         $user = $this->authRepository->register($request->validated());
         return response()->json([
            'user' => $user,
            'message' => 'User registered successfully',
         ], 201);
      } catch (\Exception $exception) {
         return response()->json(['error' => $exception->getMessage()], 400);
      }
   }
}

@extends('layouts.index')

@section('title', 'Connexion - SunuParrainage')

@section('content')
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-3xl font-bold text-center text-blue-700">Connexion</h2>
            <p class="text-gray-600 text-center mt-2">Connectez-vous pour accéder à votre espace.</p>

            <!-- Formulaire de connexion -->
            <form action="{{ route('login') }}" method="POST" class="mt-6">
                @csrf

                <!-- Email -->
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-200">
                </div>

                <!-- Mot de passe -->
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Mot de passe</label>
                    <input type="password" id="password" name="password" required
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-200">
                </div>

                <!-- Confirm Password -->
                <div class="mt-4">
                    <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

                    <x-text-input id="password_confirmation" class="block mt-1 w-full" type="password"
                        name="password_confirmation" required autocomplete="new-password" />

                    <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
                </div>

                <!-- Rester connecté -->
                <div class="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" class="text-blue-600">
                    <label for="remember" class="ml-2 text-gray-700 text-sm">Se souvenir de moi</label>
                </div>

                <!-- Bouton de connexion -->
                <button type="submit"
                    class="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                    Se connecter
                </button>
            </form>

            <!-- Liens secondaires -->
            <div class="mt-4 text-center">
                <a href="#" class="text-blue-600 hover:underline text-sm">Mot de passe oublié ?</a>
                <p class="text-gray-600 text-sm mt-2">Pas encore inscrit ?
                    <a href="{{ route('register') }}" class="text-blue-600 hover:underline">Créer un compte</a>
                </p>
            </div>
        </div>
    </div>
@endsection

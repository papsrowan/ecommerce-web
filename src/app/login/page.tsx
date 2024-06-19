"use client"

import { loginService } from '@/services/login';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
    const [userNAme, setUserNAme] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== 'emilyspass') {
            setError('Mot de passe incorrect');
            return;
        }
        setError('');
        // Logique pour rediriger l'utilisateur après connexion réussie
        loginService.login(userNAme, password).then((user) => {
            console.log(user)
            localStorage.setItem("user", JSON.stringify(user))
            console.log('Connexion réussie avec:', userNAme);
            Router.push('/')
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connexion à votre compte</h2>
                </div>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="user-name" className="sr-only">
                                User name
                            </label>
                            <input
                                id="user-name"
                                name="userNAme"
                                type="text"
                                autoComplete="userNAme"
                                required
                                value={userNAme}
                                onChange={(e) => setUserNAme(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="User name"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                            {error}
                        </p>
                    )}

                    <div>
                        <button

                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

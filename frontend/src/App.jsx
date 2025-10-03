export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl text-center max-w-md">
                <h1 className="text-4xl font-bold mb-4">🚀 Bienvenue sur mon projet Vite + React + Tailwind !</h1>
                <p className="text-lg mb-6">
                    Tout est bien installé et prêt à l’emploi. Vous pouvez commencer à coder tranquillement 😎
                </p>
                <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100 transition">
                    Commencer
                </button>
            </div>
        </div>
    );
}

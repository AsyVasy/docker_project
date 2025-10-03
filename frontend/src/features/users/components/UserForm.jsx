export const UserForm = (handleSubmit, editingUser, error, cancelEdit, name, setName, email, setEmail) => {
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
            <h2 className="text-lg font-semibold mb-2">
                {editingUser ? 'Modifier' : 'Créer'} un utilisateur
            </h2>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            <div className="mb-3">
                <label className="block text-sm font-medium">Nom</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    required
                />
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {editingUser ? 'Mettre à jour' : 'Créer'}
                </button>
                {editingUser && (
                    <button
                        type="button"
                        onClick={cancelEdit}
                        className="text-gray-600 hover:underline"
                    >
                        Annuler
                    </button>
                )}
            </div>
        </form>
    )
}


import React from 'react'

export const UserList = ({users, handleEdit, handleDelete}) => {

    return (
        <ul className="space-y-3">
            {users.map(user => (
                <li
                    key={user.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded"
                >
                    <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleEdit(user)}
                            className="text-blue-600 hover:underline"
                        >
                            Modifier
                        </button>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="text-red-600 hover:underline"
                        >
                            Supprimer
                        </button>
                    </div>
                </li>
            ))}
        </ul>

    )
}
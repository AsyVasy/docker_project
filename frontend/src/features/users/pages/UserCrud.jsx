import React, {useEffect, useState} from 'react'
import axios from '../../../api/axiosInstance'
import {UserForm} from '../components/UserForm.jsx'
import {UserList} from '../components/UserList.jsx'
import Loader from "../../../components/Loader.jsx";

const UserCrud = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [editingUser, setEditingUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Load all users
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const res = await axios.get('/users')
            setUsers(res.data)
        } catch (err) {
            setError('Erreur de chargement des utilisateurs.')
        } finally {
            setLoading(false)
        }
    }

    // Create or update user
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            if (editingUser) {
                const res = await axios.put(`/users/${editingUser.id}`, {name, email})
                setUsers(users.map(u => (u.id === res.data.id ? res.data : u)))
                setEditingUser(null)
            } else {
                const res = await axios.post('/users', {name, email})
                setUsers([...users, res.data])
            }
            setName('')
            setEmail('')
        } catch (err) {
            setError("Erreur lors de l'enregistrement.")
        }
    }

    // Delete user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/users/${id}`)
            setUsers(users.filter(user => user.id !== id))
        } catch (err) {
            setError("Erreur lors de la suppression.")
        }
    }

    // Edit user
    const handleEdit = (user) => {
        setEditingUser(user)
        setName(user.name)
        setEmail(user.email)
    }

    // Cancel edit
    const cancelEdit = () => {
        setEditingUser(null)
        setName('')
        setEmail('')
    }


    return (<div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gestion des utilisateurs</h1>

        <UserForm
            handleSubmit={handleSubmit}
            editingUser={editingUser}
            error={error}
            cancelEdit={cancelEdit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
        />

        {loading ?
            <Loader/>
            :
            <UserList
                users={users}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />}
    </div>)
}

export default UserCrud

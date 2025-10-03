// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCrud from "./features/users/pages/UserCrud.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserCrud />} />
            </Routes>
        </Router>
    );
}

export default App;

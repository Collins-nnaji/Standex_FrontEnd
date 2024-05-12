import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import Community from './pages/Community';
import Login from './pages/Login';
import './App.css';  // Make sure the CSS file is referenced correctly if you have additional styles.

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />

                    <Route path="/community" element={<Community />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


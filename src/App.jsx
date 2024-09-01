import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                {/* Add your page content here */}
                <h1>Welcome to the Website</h1>
            </div>
        </div>
    );
}

export default App;

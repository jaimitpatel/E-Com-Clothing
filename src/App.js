import React from 'react';
import './style.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Homepage />
            </div>
        </div>
    );
}

export default App;

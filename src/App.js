import React from 'react'

import { Navbar, Brand, CTA } from './components';
import { Footer, Blog, Possibility, Features, WhatIterate, Header } from './containers';

import './App.css';

const App = () => {
    return (
        <div className="App" >
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <WhatIterate />
        </div>
    )
}

export default App
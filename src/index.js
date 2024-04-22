import { createRoot } from 'react-dom/client';
import React from 'react'
import App from './App';
import './index.css'
import { HashRouter as Router } from "react-router-dom";



// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <Router>
        <App />
    </Router>
);
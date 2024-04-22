import { createRoot } from 'react-dom/client';
import React from 'react'
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom";



// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
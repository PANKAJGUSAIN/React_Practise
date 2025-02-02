import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </StrictMode>
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/ZyloDrive/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

// Initial render.
root.render(<App tab="home" />);
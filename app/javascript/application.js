// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
// import 'react-dom';
// import 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app';

const domNode = document.getElementById('app_root');
const root = createRoot(domNode);
root.render(<App />);

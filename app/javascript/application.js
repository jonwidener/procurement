// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
// import 'react-dom';
// import 'react-router-dom';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('app_root');
const root = createRoot(domNode);
root.render(<h1>Hello World</h1>);

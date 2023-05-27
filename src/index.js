import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';

const root = createRoot(document.getElementById('root'));
const app = <div>这个是文本哦</div>;
console.log(root);
debugger;
root.render(app);

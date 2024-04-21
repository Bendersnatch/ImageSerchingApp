import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import SearchBar from './components/SearchBar';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);


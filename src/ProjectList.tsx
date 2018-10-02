import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ComponentsDemo } from './app/kit/Demo';
import './main.scss';

const componentsDemo = <ComponentsDemo />
    
const root = document.getElementById('root');

ReactDOM.render(componentsDemo, root);
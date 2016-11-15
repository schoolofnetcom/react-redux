import React from 'react';
import { render } from 'react-dom';
import router from './utils/router';

import '../styles/styles.scss';

const rootElement = document.getElementById('app');

render(router, rootElement);
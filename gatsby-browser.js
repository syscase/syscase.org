'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

// Global styles
require('normalize.css');
require('./src/styles/reset.css');
require('./src/styles/typography.css');

// Expose React and ReactDOM for debugging
window.React = React;
window.ReactDOM = ReactDOM;

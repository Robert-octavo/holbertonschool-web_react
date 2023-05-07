/*
mport jQuery, and add the logo and the H1 title to the header.js file (with content Holberton Dashboard). Add a console.log printing Init header*/

import $ from 'jquery';
import './header.css';

$("body").append("<div id=logo></div>")
$("body").append(`<h1>Holberton Dashboard</h1>`);
console.log("Init header")

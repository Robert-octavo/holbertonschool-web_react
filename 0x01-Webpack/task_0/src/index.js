/*
The file should import jquery and add three different
paragraphs to the page body: (refer to this link under the
Babel section for importing jQuery)
*/

import $ from 'jquery';

const $body = $('body');

const $p1 = $('<p></p>').text('Holberton Dashboard');
const $p2 = $('<p></p>').text('Dashboard data for the students');
const $p3 = $('<p></p>').text('Copyright - Holberton School');

$body.append($p1, $p2, $p3);

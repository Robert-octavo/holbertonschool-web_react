/*
The file should import jquery and add the below elements in the following order:

    Paragraph element: Holberton Dashboard
    Paragraph element: Dashboard data for the students
    Button element with the text Click here to get started
    Add a paragraph element as so <p id='count'></p>
    Add another paragraph: Copyright - Holberton School
*/

import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyrigth - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter));

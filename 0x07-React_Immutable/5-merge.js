/*
Create a function named concatElements

    It accepts two arguments page1 and page2. Both are arrays
    It should return a List containing the values of the two pages

Create a function named mergeElements

    It accepts two arguments page1 and page2. Both are objects
    It should return a List containing the values of the two pages
    If two values are the same, page2 values should be used.
*/

import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  return List(page1).concat(List(page2));
}

export const mergeElements = (page1, page2) => {
  return Map(page1).merge(Map(page2));
}

const page1 = ['one', 'two', 'three'];
const page2 = ['four', 'five', 'six'];

console.log(concatElements(page1, page2));

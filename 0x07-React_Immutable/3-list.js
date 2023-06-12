import { List } from 'immutable';

export const getListObject = (array) => {
  return List(array);
}

export const addElementToList = (list, element) => {
  return list.push(element);
}

const list = getListObject(['one', 'two', 'three']);
console.log(addElementToList(list, 'four'));

import { Map } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => {
  return Map(page1).mergeDeep(Map(page2));
}

const page1 = {
  one: 'one',
  two: {
    three: 'three',
  },
};

const page2 = {
  one: 'one',
  two: {
    four: 'four',
  },
};

console.log(mergeDeeplyElements(page1, page2).toJS());

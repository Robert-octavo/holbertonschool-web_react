import { Map, is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
};

const map1 = Map({
  one: 'one',
  two: 'two',
  three: 'three',
});

const map2 = Map({
  one: 'one',
  two: 'two',
  three: 'three',
});

console.log(areMapsEqual(map1, map2));

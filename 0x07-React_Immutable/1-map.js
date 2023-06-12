import { Map } from 'immutable';

export default function getImmutableObject(obj) {
  return Map(obj);
}

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

console.log(getImmutableObject(obj));

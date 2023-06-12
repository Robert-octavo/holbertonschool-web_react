/*
create a function getImmutableObject that accepts object
as a parameter and converts it into an immutable Map using
fromJS of the Immutable.js library*/

import { fromJS } from 'immutable';

const getImmutableObject = (obj) => fromJS(obj);

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

console.log(getImmutableObject(obj));

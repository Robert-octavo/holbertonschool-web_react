import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = Map(object);
  return map.getIn(array, undefined);
}

const obj = accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva"
  }
}, ['name', 'first'])

console.log(obj);

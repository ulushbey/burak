//MIT TASK P
function objectToArray(obj : any) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

console.log(objectToArray({ a: 10, b: 20 }));

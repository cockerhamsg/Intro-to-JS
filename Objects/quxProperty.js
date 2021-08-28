/* Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets: */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myProtoObj);

/* Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype. Thus, it logs: */

/* let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
}); */


/* for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj. Thus, snippet 2 logs: */
/* We can add a conditional to snippet 2 to get the same output from for..in: all we need to do is check whether the key is myObj's own property: */

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) { // this is the addition for snippet 2
    console.log(key);
  }
}

myObj.qux = 3;
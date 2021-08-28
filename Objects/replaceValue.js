// Write some code to replace the value 6 in the following object with 606:

let obj = {
  foo: { a: 'hello', b: 'world' },
  bar: ['example', 'mem', null, { xyz: 6 }, 88],
  quz: [4, 8, 12]
};

// soln 1
obj.bar[3].xyz = 606;

// soln 2
obj['bar'][3]['xyz'] = 606;
## What is JavaScript?

- JavaScript (JS) is a high-level, interpreted programming language.

- It is one of the core technologies of the web (along with HTML & CSS).

- Initially created to make web pages interactive (in 1995 by Brendan Eich).

- Today, JavaScript can run everywhere: browsers, servers (Node.js), mobile apps, desktop apps, even IoT.

## What is JavaScript used for?

1. Web Development (Frontend)

    - Make websites dynamic & interactive.

    - Example: form validation, animations, dropdown menus, slideshows.

    - Frameworks: React, Angular, Vue.

2. Backend Development

    - Using Node.js, JavaScript runs on servers.

    - Example: APIs, real-time apps (chat apps, gaming servers).

3. Mobile App Development

    - Frameworks like React Native, Ionic allow building cross-platform apps (Android + iOS) using JS.

4. Desktop Applications

    - With Electron.js, JavaScript can make apps like VS Code, Slack, Discord.

5. Game Development

    - Libraries like Phaser.js, Three.js help build browser-based 2D/3D games.

6. Machine Learning & AI

    - With TensorFlow.js, JS can run ML models directly in the browser.


## Explain Event Loop in JS

- JS is single-threaded (only one thing executes at a time).

- Event loop manages how synchronous code and asynchronous tasks (setTimeout, fetch, promises) run.

- Flow:

1. Call Stack executes synchronous code.

2. Asynchronous tasks (callbacks, promises) go to Task Queue or Microtask Queue.

3. Event Loop continuously checks if Call Stack is empty → if yes, pushes queued tasks back into execution.

Example:

```
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


Output:

Start
End
Promise   // microtasks run before macrotasks
Timeout
```

## What is Hoisting?

- Hoisting = JS behavior where variable and function declarations are moved to the top of their scope at compile phase.

- But only declarations are hoisted, not initializations.

Example:

```
console.log(a);  // undefined
var a = 10;

foo();  // works, because function declarations are hoisted
function foo() {
  console.log("Hello");
}


But with let / const:

console.log(x); // ReferenceError (TDZ - Temporal Dead Zone)
let x = 5;
```

## Explain Promises

- A Promise is an object representing the eventual completion or failure of an asynchronous operation.

- States:

1. Pending

2. Fulfilled

3. Rejected

Example:

```
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 1000);
});

fetchData
  .then((res) => console.log(res))   // "Data received"
  .catch((err) => console.error(err))
  .finally(() => console.log("Done"));
```

✅ Promises avoid “callback hell” and are the base for async/await.

## What is Currying?

- Currying = converting a function that takes multiple arguments into a sequence of functions that each take one argument.

- Useful for function reuse and partial application.

Example:

```
// Normal function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Curried function
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}
console.log(curryAdd(2)(3)); // 5
```

✅ Interview short answer:

- Currying transforms a multi-argument function into nested single-argument functions, enabling partial application and reusability.

## What are Closures?

- A closure = when a function remembers the variables from its lexical scope, even after the outer function has finished executing.

Example:

```
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

Here, `inner` still has access to `count` from `outer`, even though `outer` is done.

✅ Interview short answer:

- A closure is a function that remembers variables from its outer scope, even after that scope has closed.

## Explain Call, Apply, and Bind (with examples)

All three are used to control this context in JS.

```
const person = {
  name: "Nandan",
  greet: function (city, country) {
    console.log(`Hi, I’m ${this.name} from ${city}, ${country}`);
  },
};

const another = { name: "John" };

// 1. call: invoke immediately, pass args one by one
person.greet.call(another, "Delhi", "India");
// Hi, I’m John from Delhi, India

// 2. apply: invoke immediately, pass args as array
person.greet.apply(another, ["New York", "USA"]);
// Hi, I’m John from New York, USA

// 3. bind: returns a new function with this bound
const boundFn = person.greet.bind(another, "London", "UK");
boundFn(); // Hi, I’m John from London, UK
```

✅ Interview short answer:

- call → calls function with a given this and args (separately).

- apply → same as call, but args as an array.

- bind → returns a new function with this bound, to be called later.


## What is Async/Await?

- async/await is syntactic sugar over Promises.

- Makes async code look synchronous and more readable.

- async → always returns a promise.

- await → pauses execution until the promise resolves/rejects.

Example:
```
function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data received"), 1000)
  );
}

async function getData() {
  console.log("Start");
  const data = await fetchData();
  console.log(data); // "Data received"
  console.log("End");
}
getData();
```

✅ Interview short answer:
Async/await is a cleaner way to handle promises in JS. await pauses execution until the promise settles.
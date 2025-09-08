## What is JavaScript?

- JavaScript (JS) is a high-level, interpreted programming language.

- It is one of the core technologies of the web (along with HTML & CSS).

- Initially created to make web pages interactive (in 1995 by Brendan Eich).

- Today, JavaScript can run everywhere: browsers, servers (Node.js), mobile apps, desktop apps, even IoT.

---

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

---

## Explain Event Loop in JS

- JS is single-threaded (only one thing executes at a time).

- Event loop manages how synchronous code and asynchronous tasks (setTimeout, fetch, promises) run.

- Flow:

1. Call Stack executes synchronous code.

2. Asynchronous tasks (callbacks, promises) go to Task Queue or Microtask Queue.

3. Event Loop continuously checks if Call Stack is empty → if yes, pushes queued tasks back into execution.

Example:

```js
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
---


## What is Hoisting?

- Hoisting = JS behavior where variable and function declarations are moved to the top of their scope at compile phase.

- But only declarations are hoisted, not initializations.

Example:

```js
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
---
## Explain Promises

- A Promise is an object representing the eventual completion or failure of an asynchronous operation.

- States:

1. Pending

2. Fulfilled

3. Rejected

Example:

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 1000);
});

fetchData
  .then((res) => console.log(res))   // "Data received"
  .catch((err) => console.error(err))
  .finally(() => console.log("Done"));
```

✅ Promises avoid “callback hell” and are the base for async/await.

----
## What is Currying?

- Currying = converting a function that takes multiple arguments into a sequence of functions that each take one argument.

- Useful for function reuse and partial application.

Example:

```js
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

---

## What are Closures?

- A closure = when a function remembers the variables from its lexical scope, even after the outer function has finished executing.

Example:

```js
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

---

## Explain Call, Apply, and Bind (with examples)

All three are used to control this context in JS.

```js
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

---

## What is Async/Await?

- async/await is syntactic sugar over Promises.

- Makes async code look synchronous and more readable.

- async → always returns a promise.

- await → pauses execution until the promise resolves/rejects.

Example:

```js
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

---

## `this` in Normal Functions

- The value of this depends on how the function is called, not where it’s defined.

- Cases:

  1. In global scope (non-strict mode):

```js
console.log(this); // window (in browsers), global object (in Node)
```

2. Inside a normal function (non-strict mode):

```js
function normalFunc() {
  console.log(this);
}
normalFunc(); // window (in browsers)
```

3. Inside a normal function (strict mode):

```js
"use strict";
function normalFunc() {
console.log(this);
}
normalFunc(); // undefined
```

4. As a method inside an object:

```js
const obj = {
name: "Nandan",
greet: function() {
console.log(this.name);
}
};
obj.greet(); // "Nandan" (this = obj)
```

5. Method extracted:

```js
const greetFn = obj.greet;
greetFn(); // undefined (strict) or window (non-strict)
```

👉 Summary: In normal functions, this is dynamic and depends on how the function is called.

---

## `this` in Arrow Functions

- Arrow functions do not have their own this.

- Instead, they lexically inherit this from the surrounding scope (the place where they are defined).

Example:

```js

const obj = {
  name: "Nandan",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (arrow doesn't bind `this`, so `this` refers to global/window)

```

But if defined inside a method:

```js
const obj = {
  name: "Nandan",
  greet: function() {
    const arrowFn = () => {
      console.log(this.name);
    };
    arrowFn();
  }
};
obj.greet(); // "Nandan" (arrow function inherits `this` from greet’s scope)
```

👉 Summary:

- Normal function: this is determined at call-time.

- Arrow function: this is determined at definition-time (lexical scope).

🔹 Example Comparison

```js
const user = {
  name: "Nandan",
  normalFn: function() {
    console.log("Normal:", this.name);
  },
  arrowFn: () => {
    console.log("Arrow:", this.name);
  }
};

user.normalFn(); // Normal: Nandan
user.arrowFn();  // Arrow: undefined
```

✅ Quick Mnemonic:

- Normal function → this depends on how you call it.

- Arrow function → this depends on where you write it.

---

## Shallow Copy vs Deep Copy

### 1. Shallow Copy

- Copies the first-level properties of an object/array.

- If the property is a primitive value (string, number, boolean, etc.), it gets copied by value.

- If the property is a reference type (object, array, function), only the reference (memory address) is copied, not the actual nested object.

- ❌ Changes in nested objects affect both copies.

Example:

```js
const original = { name: "Nandan", address: { city: "Delhi" } };

// Shallow copy using spread
const shallowCopy = { ...original };

shallowCopy.name = "John";
shallowCopy.address.city = "Mumbai";

console.log(original.name);      // "Nandan" ✅ not affected
console.log(original.address.city); // "Mumbai" ❌ affected (shared reference)
```

### 2. Deep Copy

- Creates a true copy of the object, including all nested objects/arrays.

- No references are shared — completely independent objects.

- ✅ Changes in one object do not affect the other.

Example (using JSON):

```js
const original = { name: "Nandan", address: { city: "Delhi" } };

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = "John";
deepCopy.address.city = "Mumbai";

console.log(original.name);      // "Nandan" ✅ not affected
console.log(original.address.city); // "Delhi" ✅ not affected
```

🔹 Key Differences

| Aspect          | Shallow Copy                                                   | Deep Copy                                                        |
|-----------------|----------------------------------------------------------------|------------------------------------------------------------------|
| **Definition**  | Copies only first-level values, nested objects share reference | Creates a full independent clone (nested included)               |
| **Nested Objects** | Shared between copies                                        | Duplicated independently                                         |
| **Performance** | Faster (less work)                                             | Slower (more memory & processing)                                |
| **Use Cases**   | When object is flat/simple                                     | When object has nested objects/arrays and independence is needed |

---

🔹 Ways to Create

- Shallow Copy:

  - Spread operator ({...obj})

  - Object.assign({}, obj)

  - Array.slice(), Array.concat()

- Deep Copy:

  - JSON.parse(JSON.stringify(obj) (⚠️ loses methods, undefined, Date, etc.)

  - Libraries like Lodash (\_.cloneDeep(obj))

  - Custom recursive function

✅ Interview Short Answer:

- Shallow copy copies only one level, nested objects are shared references.

- Deep copy duplicates everything, including nested objects, making them independent.

---
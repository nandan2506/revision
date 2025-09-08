## Working of NodeJS & Single Threaded Nature

- NodeJS is built on Chrome’s V8 engine (JavaScript runtime).

- It is event-driven and non-blocking using the event loop.

- Even though it is single-threaded (only one main thread runs JS code), it can handle multiple requests using async I/O.

- Heavy tasks (like file I/O, DB queries, network calls) are delegated to libuv thread pool or the OS, and when done, results are pushed back via the event loop.

👉 So NodeJS doesn’t block while waiting — it can serve thousands of requests concurrently.

----
## What is JWT (JSON Web Token)?

- A compact, URL-safe token format used for authentication & authorization.

- Structure:
```js
Header.Payload.Signature
```

Example:
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOjEyMywiZW1haWwiOiJuYW5kYW4ifQ.
h1D9XrC7ZqNnZTyV9OB7d3SGBm5b8t8XYG
```

- Header → metadata (algorithm, type).

- Payload → user data (claims).

- Signature → ensures token integrity (using secret key).

Use case:

- After login → server generates JWT → sends to client → client stores in localStorage/cookie → sends with each request → server verifies & grants access.

---
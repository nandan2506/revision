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

## 🌐 What is a REST API?

REST API = Representational State Transfer Application Programming Interface
It’s a set of rules for how two systems (client & server) communicate over HTTP.

📌 Key Principles of REST

1. Stateless

    - Each request is independent.

    - Server does not remember previous requests (no session stored).

2. Client-Server Separation

    - Client = frontend (React, Angular, etc.).

    - Server = backend (Node.js, Django, etc.).

    - Both are independent.

3. Uniform Interface

    - REST uses standard HTTP methods (GET, POST, PUT, DELETE).

    - Resource is represented by a URL (endpoint).

4. Resource-Based

    - Everything is treated as a resource (user, product, book).

    - Identified by a unique URL.

📌 HTTP Methods in REST API

| HTTP Method | Purpose              | Example                          |
|-------------|----------------------|----------------------------------|
| GET         | Fetch data           | `GET /users` → get all users     |
| POST        | Create new data      | `POST /users` → create a new user|
| PUT         | Update entire data   | `PUT /users/1` → replace user 1  |
| PATCH       | Update partial data  | `PATCH /users/1` → update user 1’s email |
| DELETE      | Delete data          | `DELETE /users/1` → remove user 1|

📌 Example: REST API for Books

Base URL: https://api.booknest.com

| Request        | Action                     |
|----------------|----------------------------|
| GET /books     | Get all books              |
| GET /books/5   | Get book with id = 5       |
| POST /books    | Add a new book             |
| PUT /books/5   | Update book with id = 5    |
| DELETE /books/5| Delete book with id = 5    |


📌 REST API Response (JSON)

Request:
```js
GET /books/1
```

Response:
```js
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "available": true
}
```

✅ Interview Short Answer:
- A REST API is a way for clients and servers to communicate over HTTP using resources (like users, books, orders). It follows principles like statelessness, resource-based URLs, and standard methods (GET, POST, PUT, DELETE).
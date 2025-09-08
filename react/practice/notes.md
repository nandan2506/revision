## JWT
- A compact, self-contained, URL-safe token used for authentication and authorization.

- Structure:
    - Header → algorithm & token type
    - Payload → user info & claims (e.g., user ID, roles)
    - Signature → verifies authenticity (signed with secret/private key)
- Authentication:
    - User logs in → server creates JWT → client stores it → sends JWT in requests.
    - Server verifies JWT’s signature to confirm identity.
- Authorization:
    - JWT payload can include roles/permissions.
    - Server checks claims to allow or deny access.
- Stateless:
    - No server-side session storage needed → info is in the token.
    - Useful for scalable, distributed systems.
- Interoperability:
    - Works across platforms & languages.
    - Can be sent via headers, query params, or request body.
- Flexibility:
    - Custom claims can be added (e.g., email, subscription level).
- Performance:
    - Faster since no frequent DB lookups.
    - Great for microservices and APIs.

👉 In short: JWT = secure, stateless, portable way to handle authentication & authorization.
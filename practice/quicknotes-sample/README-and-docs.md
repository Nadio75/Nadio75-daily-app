# QuickNotes signup — practice documentation

## Setup

    npm install

Requires a `db` object exposing `.users.find()` and `.users.insert()`, a
`bcrypt` library, and a `sendEmail(to, message)` function — this package
assumes those are provided by the host app, not bundled here.

## Usage

```javascript
const result = signup('reader@example.com', 'hunter22');

if (result.error) {
  // handle 'invalid', 'weak', or 'exists'
} else {
  // result.id is the new user's ID — they're unverified until
  // they click the confirmation link sent to their email
}
```

## Endpoint doc

**POST /api/signup**

Creates a new, unverified user account and sends a confirmation email.

**Request body**
```json
{
  "email": "reader@example.com",
  "password": "hunter2222"
}
```

**Response — success (201)**
```json
{ "id": "usr_abc123" }
```

**Response — error (400)**
```json
{ "error": "invalid" }
```
Possible `error` values: `invalid` (malformed email), `weak` (password
under 8 characters), `exists` (email already registered).

**Auth requirements**: none — public, unauthenticated endpoint.

## ADR, Hash passwords with bcrypt at 10 rounds

**Status**: Accepted

**Context**: Signup needs to store passwords without keeping them in
plaintext. bcrypt is a standard choice, but the cost factor (rounds)
trades off security against request latency.

**Decision**: Use `bcrypt.hashSync(password, 10)` — bcrypt's commonly
recommended default, balancing brute-force resistance with acceptable
request latency (~50-100ms on typical hardware).

**Consequences**: Signup requests incur a small, deliberate latency
cost. If hardware gets faster or attacks get cheaper, the round count
should be revisited — this isn't a "set once forever" value.
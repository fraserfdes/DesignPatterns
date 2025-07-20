# 🧰 Circuit Breaker Demo (Node.js + Opossum)

This demo shows how the **Circuit Breaker Pattern** and the **Short-Circuit Pattern** work using Node.js. We'll simulate a failing API, use a circuit breaker to handle it, and demonstrate how JavaScript's short-circuit logic makes your code cleaner and safer.

---

## 🚦 Part 1: Circuit Breaker Pattern

### 📌 What It Is

The Circuit Breaker Pattern prevents your system from making requests to a service that is likely to fail — saving resources and avoiding cascading failures.

---

### ⚙️ Key Concepts

| Term         | Meaning                                              |
|--------------|------------------------------------------------------|
| Closed       | Normal state – all requests go through               |
| Open         | Too many failures – no calls are made                |
| Half-Open    | One test call is allowed after a timeout             |
| Timeout      | Max wait time per call before it's counted as failed |
| Fallback     | Default response when call fails or breaker is open  |

---

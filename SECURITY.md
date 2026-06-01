# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by opening an issue with the label `security` or contact the repository maintainer directly. Do **not** disclose the vulnerability publicly until it has been addressed.

## Security Measures

### 1. Environment Variables & Secrets
- All sensitive configuration (database credentials, API keys) must be set via environment variables
- Never commit `.env` files or hardcoded secrets to the repository
- Use `process.env.*` to access configuration at runtime

### 2. Database Security
- All SQL queries use **parameterized statements** to prevent SQL injection
- Passwords are hashed using **bcrypt** (cost factor 10) before storage
- Database credentials are configured through environment variables:
  ```
  MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_PORT
  ```

### 3. HTTP Security Headers
- **Helmet** is used to set secure HTTP headers (CSP, HSTS, X-Frame-Options, etc.)
- **CORS** is restricted to origins defined in the `CORS_ORIGINS` environment variable
- Rate limiting is enabled (200 requests per 15 minutes per IP)

### 4. Input Validation
- All user inputs are validated before processing
- Request body size is limited to 10MB to prevent DoS attacks
- Login credentials are validated on the server side

### 5. Error Handling
- Error messages exposed to clients are generic and do not leak stack traces
- Internal errors are logged server-side only

### 6. Dependency Management
- Automated dependency updates via Renovate (weekly)
- Dependabot configured for npm and GitHub Actions
- Dependencies are pinned in production deployments

## OWASP Top 10 (2021) Compliance

| # | Category | Status |
|---|----------|--------|
| A01 | Broken Access Control | Implement authorization checks |
| A02 | Cryptographic Failures | Passwords hashed with bcrypt |
| A03 | Injection | Parameterized queries for all SQL |
| A04 | Insecure Design | Input validation on all endpoints |
| A05 | Security Misconfiguration | Helmet headers, CORS, rate limiting |
| A06 | Vulnerable & Outdated Components | Automated dependency updates |
| A07 | Identification & Auth Failures | Bcrypt password verification |
| A08 | Software & Data Integrity | No integrity failures |
| A09 | Security Logging & Monitoring | Request logging with Morgan |
| A10 | SSRF | No server-side fetch from user input |

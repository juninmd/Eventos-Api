# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

Report vulnerabilities by opening an issue with the `security` label or emailing the maintainers.

## Security Measures

### Secrets Management
- Environment variables for all sensitive data
- `.env` files in `.gitignore`
- No hardcoded credentials in source code

### Database Security
- Parameterized queries prevent SQL injection
- No raw string concatenation in SQL
- Credentials from environment variables only

### API Security
- Input validation on all endpoints
- CORS with allowed origins whitelist
- Security headers (HSTS, X-Frame-Options, XSS Protection, etc.)
- Rate limiting configured
- Request body size limited to 1MB

### Authentication
- Basic input validation on login

### Error Handling
- User-friendly error messages without stack traces
- No sensitive information leakage in responses

### Dependency Management
- Automated dependency updates via Renovate
- Dependabot configured for npm, pip, GitHub Actions, Docker
- Weekly `npm audit` scheduled
- Dependency review on PRs

## OWASP Top 10 Coverage

1. **Broken Access Control** - CORS restrictions
2. **Cryptographic Failures** - No hardcoded secrets
3. **Injection** - Parameterized SQL queries
4. **Insecure Design** - Input validation
5. **Security Misconfiguration** - Security headers, disabled x-powered-by
6. **Vulnerable Components** - Automated dependency updates
7. **Authentication Failures** - Basic input validation
8. **Software Integrity** - Dependency pinning with Renovate
9. **Logging & Monitoring** - Request logging via Morgan
10. **SSRF** - Database credentials not exposed

# Security

> **Purpose:** Document security considerations, current posture, and known gaps.
> **Last updated:** 2025-07-20

## Attack Surface

The site is a **static SPA** with no backend, no database, no user input, and no forms. This dramatically reduces the attack surface.

| Component | Risk | Mitigation |
|---|---|---|
| GitHub Pages CDN | Low | Managed by GitHub; HTTPS enforced |
| Angular framework | Low | Regular framework updates |
| Third-party npm deps | Medium | `npm audit` in CI (not yet blocking) |
| DNS (bybyte.diy) | Low | Standard DNS security |
| GitHub Actions | Medium | GITHUB_TOKEN scoped per workflow |

## Current Security Controls

| Control | Status | Details |
|---|---|---|
| HTTPS | ✅ Enforced | GitHub Pages + custom domain + Enforce HTTPS |
| HSTS | ✅ Via GitHub Pages | Included in GitHub Pages response headers |
| Subresource Integrity | ❌ Not implemented | Script/style tags loaded without SRI |
| Content Security Policy | ❌ Not configured | Cannot set custom headers on GitHub Pages without CDN proxy |
| X-Content-Type-Options | ✅ Via GitHub Pages | Included in GitHub Pages default headers |
| Dependency scanning | ⚠️ Partial | `npm audit` available but not as CI failure gate |

## GitHub Security

### Repository Access

- **Write access:** Restricted to core maintainers
- **Read access:** Public repository
- **GitHub token:** `GITHUB_TOKEN` auto-provisioned with minimal scopes per workflow
- **Secrets:** No sensitive secrets stored (no API keys, no database credentials)

### GitHub Actions Security

- Workflows use `actions/checkout` with default token (read-only for triggering event)
- Deploy workflows use `GITHUB_TOKEN` with `pages: write` permission
- No third-party actions with excessive permissions
- PRs from forks do not have access to repository secrets

## Dependency Security

| Measure | Status |
|---|---|
| `npm audit` in CI | ⚠️ Not yet as blocking check |
| Dependabot | ❌ Not configured |
| Regular `npm update` | ⚠️ Manual |
| Lockfile (`package-lock.json`) | ✅ Committed |
| `node_modules` | ❌ Not committed (`.gitignore`) |

## Content Security

- Lesson content is Markdown rendered via `ngx-markdown`
- Angular's sanitization applies to template bindings
- No user-generated content is accepted or displayed
- Content authors must have write access to ByByteLessons repo

## Known Gaps

1. **No CSP headers** — Cannot mitigate XSS via inline scripts or CDN compromise
2. **No SRI** — CDN-served scripts could be tampered with (only Angular CDN deps, minimal)
3. **No Dependabot** — No automated vulnerability alerts for npm dependencies
4. **No security.txt** — No security contact information published
5. **No automated SAST** — No static analysis scanning in CI

## Recommendations

1. Add CSP via GitHub Pages custom header workaround (Cloudflare Worker or similar)
2. Enable Dependabot for automated dependency security updates
3. Add `npm audit` as a blocking step in CI
4. Consider GitHub CodeQL scanning for the repository
5. Add `security.txt` file at `/.well-known/security.txt`

## See Also

- [`RELIABILITY.md`](RELIABILITY.md) — Error handling and failure modes
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — System boundaries and trust model

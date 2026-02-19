# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2026-02-19

### Added

- Astro Starlight docs site scaffolded with bun
- Site configured for `myfzf.mikenavales.xyz`
- 5 sidebar sections: Start Here, Usage, Commands, Architecture, Troubleshooting
- 15 content pages covering all 334 my-fzf commands
- Start Here: getting started, installation, dependencies
- Usage: naming convention (composable `f + scope + action + type` pattern), examples
- Commands: overview + 5 category pages (core, scoped, variants, extensions, file operations)
- Architecture: overview (entry point, helpers, design decisions), modules (6 lib modules and load order)
- Troubleshooting: common issues and verification steps
- Splash landing page with my-backpack logo, feature CardGrid, and hero actions
- Hero buttons: "Getting Started" (primary) + "there's more in my-backpack >>>" (accent-colored, opens new tab)
- Custom SocialIcons component overriding Starlight default (all links open in new tab)
- GitHub social link in header pointing to `mayknxyz/my-fzf`
- mikenavales.xyz social link in header with custom globe/www icon
- "Edit this page" links pointing to GitHub repo
- Geist Mono font self-hosted (WOFF2, 3 weights: Regular, Medium, SemiBold)
- Pure black dark mode background (page, sidebar, nav)
- Backpack logo as favicon and site logo in nav
- Cloudflare Pages deployment config (`wrangler.json`)
- `deploy` and `preview:cf` scripts in `package.json`
- `.gitignore` for Astro, Cloudflare, and Node artifacts
- Pagefind search index (built-in with Starlight)
- Sitemap generation
- `CLAUDE.md` project configuration for Astro framework
- `CHANGELOG.md` following Keep a Changelog format
- `README.md` with dev and deploy instructions

[Unreleased]: https://github.com/mayknxyz/my-fzf-site/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/mayknxyz/my-fzf-site/releases/tag/v0.0.1

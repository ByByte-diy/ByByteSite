# Lesson content

Lesson markdown files are **not stored in this directory**.

They live in the git submodule:

```
submodules/ByByteLessons/content/
```

## Setup

```bash
git submodule update --init --recursive
npm run generate-index
```

At build time, Angular serves content from the submodule via `angular.json` assets mapping to `assets/content/`.

The lesson index (`index.json`) is generated into `src/generated/content/` and is not committed to git.

See [docs/BYTEBYTELESSONS-SETUP.md](../../docs/BYTEBYTELESSONS-SETUP.md) for details.

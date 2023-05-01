# skeleton-typescript-project

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![CI](https://github.com/raphaaj/skeleton-typescript-project/actions/workflows/ci.yml/badge.svg)](https://github.com/raphaaj/skeleton-typescript-project/actions/workflows/ci.yml)

A skeleton project for typescript projects.

## Setup

- Update package information:
  - Name
  - Version
  - Description
  - Main entry
  - Author
  - Keywords
  - Repository
  - Bugs
  - License
  - Homepage
- Update repository actions
  - [Dependabot](.github/dependabot.yml): automatic dependencies update
  - [CI](.github/workflows/ci.yml): tests and build validation
  - [Commitlint](.github/workflows/commitlint.yml): Lint commit messages
  - [Dependabot auto merge](.github/workflows/dependabot-auto-merge.yml): Enable auto-merge on dependabot's pull requests
    - For this action to work properly it is necessary to allow auto-merge on the repository settings
- Setup git hooks to enable [commitizen](https://github.com/commitizen/cz-cli) on `git commit`:
  - `./setup-git-hooks.sh`
- Review TypeScript configurations at [tsconfig.json](tsconfig.json)
- Review ESLint configurations at [.eslintrc.js](.eslintrc.js)
- Review Prettier configurations at [.prettierrc.json](.prettierrc.json)

## Functionalities

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://prettier.io/)
- [Commitizen](https://github.com/commitizen/cz-cli)

## Scripts

- `build`: Compile the typescript project into the `build` folder.
- `build:clean`: Remove the build folder
- `test`: Run jest tests
- `test:coverage`: Run jest tests with coverage report
- `test:clean`: Remove the tests coverage result
- `lint`: Lint codebase
- `lint:fix`: Lint codebase and fix problems
- `prettier:check`: Check if files in the `src` and `tests` folders are formatted according to the prettier configurations.
- `prettier:write`: Format files in the `src` and `tests` folders according to the prettier configurations.

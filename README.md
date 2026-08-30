# rn-boilerplate

An [Expo](https://expo.dev) app using [file-based routing](https://docs.expo.dev/router/introduction) via [Expo Router](https://docs.expo.dev/router/introduction), with linting, formatting, commit hooks, and per-environment env files set up out of the box.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Copy the env template and fill in values

   ```bash
   cp .env.example .env
   ```

3. Start the app

   ```bash
   npm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can also target a platform directly:

```bash
npm run android
npm run ios
npm run web
```

## Project structure

```txt
src/app/          Expo Router routes and layouts
src/features/     product modules
src/components/   shared UI components
src/theme/        design tokens
src/constants/    stable app values and options
src/config/       runtime config and feature flags
src/providers/    app-wide provider composition
src/hooks/        shared hooks
src/lib/          API, storage, analytics, notifications
src/i18n/         translations
src/utils/        pure helpers
src/types/        shared TypeScript types
tests/            shared test examples
```

Rule of thumb:

- `app/` is for routing.
- `features/` is for product logic.
- `components/ui/` is for reusable design.
- `lib/` is for infrastructure.

Every module currently contains a minimal placeholder — fill each in as the corresponding feature is built, or delete what you don't need. See [docs/structure.md](docs/structure.md) for the full write-up.

### Path aliases

Configured in [tsconfig.json](tsconfig.json) and resolved by Metro at runtime (no extra config needed):

| Alias           | Resolves to          |
| --------------- | -------------------- |
| `@/*`           | `./src/*`            |
| `@/assets/*`    | `./assets/*`         |
| `@app/*`        | `./src/app/*`        |
| `@components/*` | `./src/components/*` |
| `@config/*`     | `./src/config/*`     |
| `@constants/*`  | `./src/constants/*`  |
| `@features/*`   | `./src/features/*`   |
| `@hooks/*`      | `./src/hooks/*`      |
| `@i18n/*`       | `./src/i18n/*`       |
| `@lib/*`        | `./src/lib/*`        |
| `@providers/*`  | `./src/providers/*`  |
| `@theme/*`      | `./src/theme/*`      |
| `@types/*`      | `./src/types/*`      |
| `@utils/*`      | `./src/utils/*`      |

## Environment variables

Env files are loaded by [Expo's built-in support](https://docs.expo.dev/guides/environment-variables/) for local dev, and via [`dotenv-cli`](https://www.npmjs.com/package/dotenv-cli) for other environments. Only vars prefixed `EXPO_PUBLIC_` are readable in client code.

- `cp .env.example .env` — local development (auto-loaded by `npm start`)
- `.env.staging` — used by `npm run start:staging`
- `.env.production` — used by `npm run start:production`

None of these files are committed except `.env.example`.

## Code quality

| Command                | What it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `npm run lint`         | ESLint via `expo lint` ([eslint.config.js](eslint.config.js)) |
| `npm run typecheck`    | `tsc --noEmit`                                                |
| `npm run format`       | Prettier, writes fixes ([.prettierrc.json](.prettierrc.json)) |
| `npm run format:check` | Prettier, check only                                          |

### Git hooks

Set up with [Husky](https://typicode.github.io/husky/) (installed automatically via the `prepare` script on `npm install`):

- **`pre-commit`** — runs [`lint-staged`](package.json) (ESLint `--fix` + Prettier on staged files), then a full `npm run typecheck`.
- **`commit-msg`** — runs [`commitlint`](commitlint.config.js) against the commit message.

### Commit messages

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/): `type: subject`, where `type` is one of:

`feat` `fix` `docs` `style` `refactor` `perf` `test` `chore` `revert`

```bash
git commit -m "feat: add login screen"
git commit -m "fix: correct token refresh timing"
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# rn-boilerplate

An [Expo](https://expo.dev) app using [file-based routing](https://docs.expo.dev/router/introduction) via [Expo Router](https://docs.expo.dev/router/introduction), with linting, formatting, commit hooks, and per-environment env files set up out of the box.

## Get started

1. Use the pinned Node version ([.nvmrc](.nvmrc)) and install dependencies

   ```bash
   nvm use
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

### Architecture rules

- `src/app/` is for routes and layouts only — no business logic.
- `src/features/` is for feature-specific screens, hooks, components, and local logic.
- `src/components/ui/` is for reusable UI primitives.
- `src/lib/` is for infrastructure code such as storage, API clients, analytics, and notifications.
- `src/theme/` owns design tokens and theme resolution.
- `src/i18n/` owns translations and locale selection.

Route files stay thin on purpose — they just point to a screen component inside a feature module, so routing and business logic never collapse into the same file (see [(auth)/welcome.tsx](<src/app/(auth)/welcome.tsx>) → [features/auth/screens/welcome.tsx](src/features/auth/screens/welcome.tsx)).

Every module currently contains a minimal placeholder marked `// TODO` — fill each in as the corresponding feature is built, or delete what you don't need. See [docs/structure.md](docs/structure.md) for the full write-up.

## Included examples

Everything below is scaffolded as a working but empty placeholder — the point is the wiring, not the content. Replace the `// TODO` in each file as you build the real thing.

### Routing

- [`(auth)`](<src/app/(auth)>) public route group — `welcome`, `login`, `signup`
- [`(main)`](<src/app/(main)>) protected route group
- [`(main)/(tabs)`](<src/app/(main)/(tabs)>) tab layout — `index` (home), `components`, `settings`
- [`+not-found.tsx`](src/app/+not-found.tsx) catch-all route
- root auth boundary in [`_layout.tsx`](src/app/_layout.tsx) using `Stack.Protected`, switching between `(auth)` and `(main)` on a signed-in flag

### Auth

A stub session context, not a real auth flow — wire in a real provider (Firebase, Clerk, your own API, etc.) when you're ready.

- [`features/auth/auth-session.tsx`](src/features/auth/auth-session.tsx) — `SessionProvider` / `useSession`, currently hardcoded to signed-out
- [`features/auth/hooks/use-auth-form.ts`](src/features/auth/hooks/use-auth-form.ts)
- [`features/auth/screens/welcome.tsx`](src/features/auth/screens/welcome.tsx), [`login.tsx`](src/features/auth/screens/login.tsx), [`signup.tsx`](src/features/auth/screens/signup.tsx)

### UI components

[`src/components/ui`](src/components/ui) has empty-shell versions of common primitives, each typed but unstyled:

`Alert` `AppText` `AppToaster` `Avatar` `Badge` `Button` `Card` `CheckboxRow` `Divider` `EmptyState` `HeroPanel` `IconButton` `Icon` `Input` `ListRow` `LoadingIndicator` `ProgressBar` `Screen` `SectionHeader` `SegmentedControl` `StatCard` `ToggleRow`

The [`/components`](<src/app/(main)/(tabs)/components.tsx>) tab is meant to become a gallery of these once they're built out — right now it's a placeholder screen.

### Theme

[`src/theme`](src/theme) has empty token files (`colors`, `spacing`, `radius`, `typography`, `motion`) and a [`theme-provider.tsx`](src/theme/theme-provider.tsx) hardcoded to `light`. Fill in the tokens and wire up light/dark/system resolution when you have a design direction.

### Internationalization

[`src/i18n`](src/i18n) has an empty [`i18n-provider.tsx`](src/i18n/i18n-provider.tsx) and empty `en.ts` / `es.ts` dictionaries under [`translations/`](src/i18n/translations). No locale-switching logic exists yet.

### Infrastructure examples

[`src/lib`](src/lib) shows where infra code should live, each file a thin stub:

- [`api/workspace-api.ts`](src/lib/api/workspace-api.ts) — API client shape
- [`analytics/`](src/lib/analytics) — client + event name constants
- [`notifications/`](src/lib/notifications) — client + content templates
- [`storage/`](src/lib/storage) — `app-storage.ts` (key/value wrapper), `preferences-storage.ts`
- [`toast/app-toast.ts`](src/lib/toast/app-toast.ts)

None of these call a real backend or vendor SDK — they're deliberately empty so you can drop in whichever service you actually use.

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

## Customizing this template

After cloning, you'll usually want to:

1. Rename the app in [`app.json`](app.json) and [`package.json`](package.json).
2. Replace the stub `SessionProvider` in [`features/auth/auth-session.tsx`](src/features/auth/auth-session.tsx) with your real auth provider.
3. Replace `features/component-showcase` with your first real feature.
4. Fill in tokens in [`src/theme`](src/theme) to match your brand.
5. Fill in translations under [`src/i18n/translations`](src/i18n/translations), or delete `i18n/` if you don't need it.
6. Replace placeholder assets in [`assets/images`](assets/images).

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

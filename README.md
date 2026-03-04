# Strata

A React component library with Tailwind CSS, designed with warmth and intention.

## Components

- **Animate** — Fade, scale, spin, and shimmer effects. Trigger on mount, scroll, hover, or tap. Respects reduced motion preferences.
- **Body** — Typography component with size variants (lg, base, sm, caption).
- **Button** — Primary, secondary, success, info, and error variants with icon support.
- **Heading** — Semantic headings with display and size options.
- **Icon** — Material Icons integration with configurable sizes.
- **Spinner** — Loading indicator in small, medium, and large sizes.
- **StreamingText** — Character- or word-by-word streaming text for AI-style UIs.

## Get Started

```bash
npm install
# or
pnpm install
```

## Scripts

| Script         | Description                                      |
|----------------|--------------------------------------------------|
| `dev`          | Start Storybook on port 6006                     |
| `build`        | Build Storybook as a static site                 |
| `build:lib`    | Build the component library (dist/)              |
| `test`         | Run tests with Vitest                            |
| `test:watch`   | Run tests in watch mode                          |
| `lint`         | Run ESLint                                       |
| `format`       | Format code with Prettier                        |
| `deploy`       | Build Storybook and deploy to GitHub Pages       |

## Usage

```tsx
import { Button, StreamingText, Animate } from 'strata';
import 'strata/css';

<Animate variant="fadeUp">
  <Button variant="primary" icon="add">Add item</Button>
  <StreamingText speed={25}>Your AI response streams here.</StreamingText>
</Animate>
```

## License

MIT

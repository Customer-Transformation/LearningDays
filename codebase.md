# .npmrc

```
engine-strict=true

```

# .prettierignore

```
# Package Managers
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lock
bun.lockb

# Miscellaneous
/static/

```

# .prettierrc

```
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}

```

# eslint.config.js

```js
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);

```

# package.json

```json
{
	"name": "app",
	"private": true,
	"version": "0.0.1",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"format": "prettier --write .",
		"lint": "prettier --check . && eslint ."
	},
	"devDependencies": {
		"@eslint/compat": "^1.2.5",
		"@eslint/js": "^9.18.0",
		"@sveltejs/adapter-auto": "^6.0.0",
		"@sveltejs/adapter-static": "^3.0.9",
		"@sveltejs/kit": "^2.22.0",
		"@sveltejs/vite-plugin-svelte": "^6.0.0",
		"eslint": "^9.18.0",
		"eslint-config-prettier": "^10.0.1",
		"eslint-plugin-svelte": "^3.0.0",
		"globals": "^16.0.0",
		"prettier": "^3.4.2",
		"prettier-plugin-svelte": "^3.3.3",
		"svelte": "^5.0.0",
		"svelte-check": "^4.0.0",
		"typescript": "^5.0.0",
		"typescript-eslint": "^8.20.0",
		"vite": "^7.0.4"
	},
	"dependencies": {
		"ai-digest": "^1.4.1"
	}
}

```

# README.md

```md
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

\`\`\`sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
\`\`\`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

\`\`\`sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
\`\`\`

## Building

To create a production version of your app:

\`\`\`sh
npm run build
\`\`\`

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```

# src\app.d.ts

```ts
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

```

# src\app.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="%sveltekit.assets%/favicon.svg" type="image/svg+xml" sizes="any">
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

# src\globalStyles.css

```css
body {
    margin: 0; padding: 0;
}

:root {
    --background-color: #000;
    --primary-color: #4C00FF;
}

*, *::before, *::after {
    margin: 0; padding: 0;
    list-style: none;
    text-decoration: none;
    color: white;
    box-sizing: border-box;
}

@font-face {
  font-family: 'KPMGBold';
  src: url("./lib/assets/fonts/KPMG-BOLD.TTF") format("TTF");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

# src\lib\assets\favicon.svg

This is a file of the type: SVG Image

# src\lib\assets\fonts\KPMG-BOLD.TTF

This is a binary file of the type: Binary

# src\lib\assets\fonts\UNIVERSFORKPMG-BOLD.TTF

This is a binary file of the type: Binary

# src\lib\assets\fonts\UNIVERSFORKPMG.TTF

This is a binary file of the type: Binary

# src\lib\index.ts

```ts
// place files you want to import through the `$lib` alias in this folder.

```

# src\routes\+layout.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import "../globalStyles.css"
	let { children } = $props();
</script>

<main>
	<header>
		<img src={asset("/favicon.svg")} alt="">
	</header>

	{@render children?.()}
</main>



<style>
	main { height: 100dvh; width: 100dvw; position: relative; padding-top: 80px; }
	header { position: absolute; inset: 0; height: 80px; padding: 20px; }
	img { width: 48px; height: 20px; object-fit: cover; }
</style>
```

# src\routes\+layout.ts

```ts
export const prerender = true;
```

# src\routes\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";

    const pages = [
        // { name: "welcome", link: "/" },
        // { name: "menu", link: "/menu" },
        { name: "crew", link: "/crew" },
        { name: "prep", link: "/prep" },
        { name: "agenda", link: "/agenda" },
        { name: "dinner", link: "/dinner" },
        { name: "explore", link: "/explore" }
    ]
</script>

<menu>
    {#each pages as page}
    <button onpointerdown={() => goto(resolve(page.link as any))}>
		<span>{page.name}</span>
		<img src={asset("/favicon.svg")} alt="">
	</button>
    {/each}
</menu>

<style>
    :global(main) {
        background-color: #000;
    }

    menu {
        padding: 0px 20px;
        display: flex; flex-direction: column;
    }
    
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid white;

		padding-bottom: 4px;
		display: flex; justify-content: space-between; align-items: end;
    }

	span {
		font-size: 88px;
		text-align: start;
		line-height: 88px;
        color: var(--primary-color);
        font-family: "KPMGBold";
	}

	img {
		width: 40px; height: 40px;
	}
</style>

```

# src\routes\agenda\+page.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import { onMount } from "svelte";

    type Item = {
        time: string
        place: string
        activity: string
    }

    let loading = $state(true)
    let scheduleThursday = $state<Item[]>([])
    let scheduleFriday = $state<Item[]>([])

    async function fetchSchedules() {
        loading = true

        try {
            const response = await fetch(asset("/scheduleThursday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleThursday = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleFriday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleFriday = await response.json()
        } catch (e) {

        } finally {
            loading = false
        }
    }

    onMount(fetchSchedules)
</script>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleThursday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleFriday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    th {
        border: 1px solid;
    }

    td {
     border: 1px solid;
    }
</style>
```

# src\routes\crew\+page.svelte

```svelte
contacts
```

# src\routes\dinner\+page.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import { onMount } from "svelte";

    type Item = {
        time: string
        place: string
        activity: string
    }

    let loading = $state(true)
    let scheduleThursday = $state<Item[]>([])
    let scheduleFriday = $state<Item[]>([])

    async function fetchSchedules() {
        loading = true

        try {
            const response = await fetch(asset("/scheduleThursday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleThursday = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleFriday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleFriday = await response.json()
        } catch (e) {

        } finally {
            loading = false
        }
    }

    onMount(fetchSchedules)
</script>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleThursday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleFriday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    th {
        border: 1px solid;
    }

    td {
     border: 1px solid;
    }
</style>
```

# src\routes\explore\+page.svelte

```svelte

```

# src\routes\menu\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";

    const pages = [
        // { name: "welcome", link: "/" },
        // { name: "menu", link: "/menu" },
        { name: "crew", link: "/crew" },
        { name: "prep", link: "/prep" },
        { name: "agenda", link: "/agenda" },
        { name: "dinner", link: "/dinner" },
        { name: "explore", link: "/explore" }
    ]
</script>

<menu>
    {#each pages as page}
    <button onpointerdown={() => goto(resolve(page.link as any))}>{page.name}</button>
    {/each}
</menu>

<style>
    menu {
        height: 100dvh;
        background-color: #111;
        display: grid; grid-auto-rows: 1fr;
    }
    
    button {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid white;
    }
</style>

```

# src\routes\prep\+page.svelte

```svelte

```

# src\routes\welcome\+page.svelte

```svelte

```

# static\.nojekyll

```

```

# static\events.json

```json
[
    {
        "slug": "opening-night",
        "title": "Opening Night",
        "date": "2025-09-01",
        "time": "18:00",
        "location": "Main Hall",
        "description": "Kickoff with welcome drinks."
    },
    {
        "slug": "keynote",
        "title": "Keynote",
        "date": "2025-09-02",
        "time": "10:00",
        "location": "Auditorium A",
        "description": "Keynote by the special guest."
    }
]
```

# static\favicon.svg

This is a file of the type: SVG Image

# static\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# static\scheduleFriday.json

```json
[
    {
        "time": "12:10-12:40",
        "place": "Sandhamn Seglarhotell Restaurant",
        "activity": "Lunch"
    },
    {
        "time": "12:40-16:00",
        "place": "Conference room",
        "activity": "Conferende agenda"
    },
    {
        "time": "10:00-12:00",
        "place": "Cityterminalen",
        "activity": "Transport to Sandhamn"
    },
    {
        "time": "12:10-12:40",
        "place": "Sandhamn Seglarhotell Restaurant",
        "activity": "Lunch"
    },
    {
        "time": "12:40-16:00",
        "place": "Conference room",
        "activity": "Conferende agenda"
    },
    {
        "time": "23:00-00:00",
        "place": "Entrance",
        "activity": "Bus to Cityterminalen"
    }
]
```

# static\scheduleThursday.json

```json
[
    {
        "time": "10:00-12:00",
        "place": "Cityterminalen",
        "activity": "Transport to Sandhamn"
    },
    {
        "time": "12:10-12:40",
        "place": "Sandhamn Seglarhotell Restaurant",
        "activity": "Lunch"
    },
    {
        "time": "12:40-16:00",
        "place": "Conference room",
        "activity": "Conferende agenda"
    },
    {
        "time": "10:00-12:00",
        "place": "Cityterminalen",
        "activity": "Transport to Sandhamn"
    },
    {
        "time": "12:10-12:40",
        "place": "Sandhamn Seglarhotell Restaurant",
        "activity": "Lunch"
    },
    {
        "time": "12:40-16:00",
        "place": "Conference room",
        "activity": "Conferende agenda"
    }
]
```

# svelte.config.js

```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repo = "LearningDays";

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // build to 'docs' so GH Pages can serve from there (no actions needed)
            pages: 'docs',
            assets: 'docs',
            // SPA fallback so dynamic routes work on hard-refresh
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            // IMPORTANT for GitHub Pages subpath
            base: dev ? '' : `/${repo}`
        }
    }
};
```

# tsconfig.json

```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}

```

# vite.config.ts

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

```


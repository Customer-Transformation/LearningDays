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
:root {
    --gradient: linear-gradient(223deg, #FFD9D1 2.77%, #7042D2 27.03%, #000 48.7%);
    --primary-color: #4C00FF;
    --secondary-color: #75778B
}

*, *::before, *::after {
    margin: 0; padding: 0;
    list-style: none;
    text-decoration: none;
    color: white;
    box-sizing: border-box;
    border: none;
}

body {
  background-color: #000;
}

h1, h2 {
    font-family: "KPMGBold";
}

h3, h4, p, label, button, span, caption, th, td {
    font-family: "Univers";
    font-weight: 400;
    font-size: 16px;
}

@font-face {
  font-family: 'KPMGBold';
  src: url("./lib/assets/fonts/KPMG-BOLD.TTF") format("truetype");
}

@font-face {
  font-family: 'Univers';
  src: url("./lib/assets/fonts/UNIVERSFORKPMG.TTF") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: 'Univers';
  src: url("./lib/assets/fonts/UNIVERSFORKPMG-BOLD.TTF") format("truetype");
  font-weight: 700;
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

# src\lib\components\BulletInfo.svelte

```svelte
<script lang="ts">
    interface Props {
        img: string
        header: string
        body: string
    }

    let { img, header, body }: Props = $props()
</script>

<div class="bullet">
    <figure>
        <img class="icon" src={img} alt="">
        <h4>{header}</h4>
    </figure>
    <p>{body}</p>
</div>

<style>
    div {
        display: flex; flex-direction: column; gap: 10px;
    }

    figure {
        display: flex; gap: 10px;
    }

    img {
        width: 24px; height: 24px;
    }

    h4 {
        font-weight: 700;
        font-size: 16px;
    }
    p {
        font-size: 16px;
    }
</style>
```

# src\lib\components\DinnerSeating.svelte

```svelte
<div class="container">
 Seating
</div>

<style>
    .container {
        margin-top: 48px;
        
        height: 200px;
        background-color: var(--secondary-color);
    
    }
</style>
```

# src\lib\components\FooterNav.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";
	import type { Page } from "$lib/data/pages";
    
    let { previousPage, nextPage }: { previousPage?: Page, nextPage?: Page } = $props()
</script>

<footer>
    <div>
        {#if previousPage}
        <button onpointerdown={() => goto(resolve(previousPage.link as any))}>
            <img src={asset("/leftArrow.png")} alt="">
        </button>
        <label for="">{previousPage.name}</label>
        {/if}
    </div>
    <div>
        {#if nextPage}
        <label for="">{nextPage.name}</label>
        <button onpointerdown={() => goto(resolve(nextPage.link as any))}>
            <img class="right-arrow" src={asset("/leftArrow.png")} alt="">
        </button>
        {/if}
    </div>
</footer>

<style>
    footer {
        margin-top: 60px;

        display: flex; justify-content: space-between;

        div {
            display: flex; gap: 14px; align-items: center;
        }

        button {
            width: 50px; height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);

            display: grid; place-items: center;
        }

        img {
            width: 40px; height: 40px;
        }

        .right-arrow {
            transform: rotate(180deg);
        }
    }
</style>
```

# src\lib\components\MenuButton.svelte

```svelte
<script lang="ts">
    import { goto } from "$app/navigation"
	import { asset, resolve } from "$app/paths"

    let { name }: { name: string} = $props()
</script>

<button onpointerdown={() => goto(resolve("/menu"))}>
    <span>{name}</span>
    <img src={asset("/arrow-down-right.png")} alt="">
</button>

<style>
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-top: .8px solid var(--primary-color);
    
        padding-top: 4px;
        display: flex; justify-content: space-between; align-items: flex-start;
    }

	span {
		font-size: 100px;
		text-align: start;
		line-height: 94px;
        color: var(--primary-color);
        font-family: "KPMGBold";
	}

	img {
		width: 40px; height: 40px;
        transform: rotate(180deg);
	}
</style>
```

# src\lib\components\NavButton.svelte

```svelte
<script lang="ts">
    import { goto } from "$app/navigation"
	import { asset, resolve } from "$app/paths"
	import type { Page } from "$lib/data/pages";

    let { page = { name: "Welcome", link: "/welcome" } }: { page?: Page } = $props()
</script>

<button onpointerdown={() => goto(resolve(page.link as any))}>
    <span>{page.name}</span>
    <img src={asset("/arrow-down-right.png")} alt="">
</button>

<style>
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-bottom: .8px solid var(--primary-color);

		touch-action: manipulation;

		padding-bottom: 4px;
		display: flex; justify-content: space-between; align-items: flex-end;
    }

	span {
		font-size: 100px;
		text-align: start;
		line-height: 94px;
        color: var(--primary-color);
        font-family: "KPMGBold";
	}

	img {
		width: 40px; height: 40px;
	}
</style>
```

# src\lib\components\Person.svelte

```svelte
<script lang="ts">
    let { imgUrl, name } = $props()
</script>

<figure>
    <img src={imgUrl} alt="">
    <label for="">{name}</label>
</figure>

<style>
    figure {
        display: flex; flex-direction: column; gap: 12px;

        img {
            width: 115px; height: 144px;
            border: 1px dotted;
        }

        label {
            font-size: 12px;
            text-align: center;
        }
    }
</style>
```

# src\lib\components\TransportBullet.svelte

```svelte
<script lang="ts">
    interface Props {
        header: string
        body: string
        note?: string
    }
    let { header, body, note }: Props = $props()
</script>

<div class="bullet">
    <header>
        <h3>{header}</h3>
        <span>{note}</span>
    </header>
    <hr>
    <h2>{body}</h2>
</div>

<style>
    .bullet {
        display: flex; flex-direction: column; gap: 2px;
    }

    header {
        display: flex; justify-content: space-between;
    }
    
    h3 {
        font-size: 16px;
        line-height: 120%;
    }

    span {
        font-size: 14px;
    }

    hr {
        height: .8px;
        border: none;
        background-color: #75778B;
    }

    h2 {
        font-size: 64px;
        color: var(--primary-color);
        line-height: 100%;
    }
</style>
```

# src\lib\data\pages.ts

```ts
export type Page = {
    name: string
    link: string
}

export const pages = [
    { name: "Welcome", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Travel", link: "/travel" },
    { name: "Agenda", link: "/agenda" },
    { name: "Dinner", link: "/dinner" },
    { name: "Explore", link: "/explore" },
    { name: "Crew", link: "/crew" }
]
```

# src\lib\index.ts

```ts
// place files you want to import through the `$lib` alias in this folder.

```

# src\routes\+layout.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import { page } from "$app/state"
	import "../globalStyles.css"

	let { children } = $props()
</script>

<main class:welcome={page.url.pathname == "/"}>
	<header>
		<button onpointerdown={() => goto(resolve("/"))}>
			<img src={asset("/logo.png")} alt="">
		</button>
	</header>

	{@render children?.()}

	<footer class:reduced={page.url.pathname === "/" || page.url.pathname === "/menu"}>
		<span>Designed & built by Customer Team MC</span>
	</footer>
</main>

<style>
	main { min-height: 100dvh; width: 100dvw; position: relative; padding: 80px 20px 0px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 80px; padding: 20px; }
	button { width: 48px; height: 20px; background-color: transparent; }
	img { width: 100%; height: 100%; object-fit: cover; }
	footer { margin-top: 80px; margin-bottom: 75px; }
	.reduced { margin-top: 40px; }
	span { font-size: 12px; color: var(--secondary-color); font-style: italic; }
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
	import { resolve } from "$app/paths";


</script>

<div class="container">
    <h1>LEARNING<br>DAYS</h1>
    <hr>
    <h2>SAVE THE<br>DATE</h2>
    <hr>
    <div class="info">
        <div class="left">
            <h3>THURSDAY<br>AUGUST 28, 2025<br><br>FRIDAY<br>AUGUST 29, 2025</h3>
        </div>
        <div class="right">
            <h3>
                SKOGSHEM & WIJK<br>
                HUSTEGAVÄGEN 1<br>
                LIDINGÖ<br>
                181 24<br>
                STOCKHOLM
            </h3>
        </div>
    </div>
    <button onpointerdown={() => goto(resolve("/menu"))}>WHAT'S ON</button>
</div>

<style>
    .container {
        display: flex; flex-direction: column; gap: 12px;
    }

    h1, h2 {
        font-size: 110px;
        line-height: 74%;
    }

    h2 {
        color: var(--primary-color);
    }

    hr {
        height: .8px;
        background-color: #75778B;
    }

    .info {
        display: flex; justify-content: space-between;
    }

    h3 {
        font-size: 12px;
        line-height: 1.1;
    }

    .right {
        h3 {
            text-align: end;
        }
    }

    button {
        margin-top: 40px;
        height: 50px;
        background-color: var(--primary-color);
        border-radius: 4px;
        padding: 8px 10px;
        font-family: "Univers";
        font-size: 16px;
        font-weight: 700;
    }
</style>
```

# src\routes\agenda\+page.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
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

<MenuButton name="Agenda"/>

<div class="table-container">
    <table>
        <caption>THURSDAY 28TH</caption>
        <thead>
            <tr>
                <th>Time</th>
                <th>Activity</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleThursday as item}
            <tr>
                <th>{item.time}</th>
                <td>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
    
    <table>
        <caption>FRIDAY 29TH</caption>
        <thead>
            <tr>
                <th>Time</th>
                <th>Place</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleFriday as item}
            <tr>
                <th>{item.time}</th>
                <td>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    .table-container {
        margin-top: 40px;

        display: flex; flex-direction: column; gap: 48px;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        text-align: start;
    }

    thead {
        background-color: var(--primary-color);
        height: 30px;
    }

    tr {
        margin: 10px 0px;
    }

    th, td {
        font-size: 14px;
        text-align: start;
        padding: 10px;
        border-bottom: .8px solid;
        border-top: .8px solid;
        border-color: #75778B;
    }
</style>
```

# src\routes\crew\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import NavButton from "$lib/components/NavButton.svelte";
	import { pages } from "$lib/data/pages";
</script>

<div class="container">
    <MenuButton name="Crew" />

    <div class="mc">
        <h3>MANAGEMENT CONSULTING</h3>
        <ul class="top">
            <figure>
                <img src={asset("/cael.png")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">David Kåverud</label>
            </figure>
            <figure>
                <img src={asset("/nifo.png")} alt="">
                <label for="">Nicole Fogelgren Broberg</label>
            </figure>
        </ul>
        <ul class="bottom">
            <figure>
                <img src={asset("/elbe.png")} alt="">
                <label for="">Ellen Bergkrans</label>
            </figure>
            <figure>
                <img src={asset("/emis.png")} alt="">
                <label for="">Emil Isaksson Torgilsman</label>
            </figure>
        </ul>
    </div>

    <div class="fs">
        <h3>FINANCIAL SERVICES</h3>
        <ul class="top">
            <figure>
                <img src={asset("/stva.png")} alt="">
                <label for="">Stefan Varnelid</label>
            </figure>
            <figure>
                <img src={asset("/caev.png")} alt="">
                <label for="">Carl Evenbom</label>
            </figure>
            <figure>
                <img src={asset("/lial.png")} alt="">
                <label for="">Lina Almbladh</label>
            </figure>
        </ul>
        <ul class="bottom">
            <figure>
                <img src={asset("/lime.png")} alt="">
                <label for="">Linda Melander</label>
            </figure>
            <figure>
                <img src={asset("/nama.png")} alt="">
                <label for="">Natalie Mattsson</label>
            </figure>
        </ul>
    </div>
</div>

<FooterNav previousPage={pages[5]}/>

<style>
    .container {
        display: flex; flex-direction: column; gap: 40px;
    }

    .mc, .fs {
        display: flex; flex-direction: column; gap: 20px;

        h3 {
            font-size: 16px;
        }

        ul {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;
            max-width: 100%;

            figure {
                min-width: 100px; max-width: 140px;

                display: flex; flex-direction: column; gap: 12px; align-items: center;

                img {
                    height: auto; width: 100%;
                    border-radius: 4px;
                    object-fit: cover;
                    object-position: top;
                }

                label {
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
</style>
```

# src\routes\dinner\+page.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths"
	import DinnerSeating from "$lib/components/DinnerSeating.svelte";
	import FooterNav from "$lib/components/FooterNav.svelte"
	import MenuButton from "$lib/components/MenuButton.svelte"
    import { pages } from "$lib/data/pages"
</script>

<MenuButton name="Dinner" />

<div class="poster">
    <img src={asset("/dinner.png")} alt="">

    <div class="corner tl">
        <h2 class="corner-header">28</h2>
        <span>August</span>
    </div>
    <div class="corner tr">
        <h2 class="corner-header">20</h2>
        <span>Start</span>
    </div>
    <div class="corner bl">
        <h2 class="corner-header">3</h2>
        <span>Courses</span>
    </div>
    <div class="corner br">
        <h2 class="corner-header">1</h2>
        <span>Night</span>
    </div>

    <div class="center">
        <h2 class="center-header">The night is ours</h2>
        <p>Hosted by Fanny Taube Persson<br>& Adam Wiberg</p>
    </div>
</div>

<h4>Bring your best outfit & dancing shoes - leave the rest to us.</h4>

<div class="hosts">
    <h2>Hosted by</h2>
    <div class="people">
        <figure>
            <img src={asset("/fata.png")} alt="">
            <label for="">Fanny Taube Persson</label>
        </figure>
        <figure>
            <img src={asset("/adwi.png")} alt="">
            <label for="">Adam Wiberg</label>
        </figure>
    </div>
</div>

<DinnerSeating />

<FooterNav previousPage={pages[3]} nextPage={pages[5]}/>

<style>
    .poster {
        position: relative;
        height: 475px;
        background-color: var(--primary-color);
        margin-top: 40px;

        display: flex; justify-content: center;

        img {
            position: absolute;

            object-fit: cover; width: 100%; height: 100%;
        }
    }

    .corner {
        position: absolute;

        display: flex;

        &.tl {
            inset: -10px auto auto 10px;

            flex-direction: column;

            span {
                font-size: 14px;
                margin-top: -10px;
            }
        }

        &.tr {
            inset: -10px 10px auto auto;

            flex-direction: column; align-items: end;

            span {
                font-size: 14px;
                margin-top: -10px;
                margin-right: 4px;
            }
        }

        &.bl {
            inset: auto auto -10px 10px;

            flex-direction: column-reverse;

            span {
                font-size: 14px;
                margin-bottom: -20px;
            }
        }

        &.br {
            inset: auto 10px -10px auto;

            flex-direction: column-reverse; align-items: end;

            span {
                font-size: 14px;
                margin-bottom: -20px;
                margin-right: 4px;
            }
        }
    }

    .corner-header {
        font-size: 98px;
    }

    .center {
        margin-top: 185px; z-index: 1;

        display: flex; flex-direction: column; align-items: center; gap: 16px;

        p {
            line-height: 120%; text-align: center;
        }
    }

    .center-header {
        font-size: 56px; line-height: 90%;
    }

    h4 {
        margin: 64px 0px;
        font-size: 32px;
    }

    .hosts {
        display: flex; flex-direction: column; gap: 20px;
    }

    .people {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; align-items: start; justify-items: center;
    }

    figure {
        min-width: 100px; max-width: 250px;

        display: flex; flex-direction: column; gap: 6px;

        img {
            height: auto; width: 100%;
            border-radius: 4px;
            object-fit: cover;
        }

        label {
            font-size: 12px;
            text-align: center;
        }
    }
    
</style>
```

# src\routes\explore\+page.svelte

```svelte
<script>
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";

	const activities = [
		"SHUFFLEBOARD",
		"HEATED OUTDOOR POOL",
		"SAUNAS",
		"GYM",
		"POOL TABLE",
		"PING PONG TABLE",
		"INDOOR MINI GOLF",
		"BOARD GAMES",
		"SEA ACCESS WITH PRIVATE PIERS",
		"AIR HOCKEY",
		"KUBB"
	]

</script>
<MenuButton name="Explore"/>

<div class="activities">
	{#each activities as activity}
	<span class="activity">{activity}</span>
	{/each}
</div>

<div class="images">
	<img src={asset("/Pool.png")} alt="">
	<img src={asset("/Bastu.png")} alt="">
	<img src={asset("/Mingle.png")} alt="">
	<img src={asset("/Gym.png")} alt="">
	<img src={asset("/Cornhole.png")} alt="">
</div>

<p>If you want to do an activity that hasn’t already been set up, please go the the reception and they will help you get started.</p>

<FooterNav previousPage={pages[4]} nextPage={pages[6]}/>

<style>
	.activities {
		margin-top: 40px;
	}
	
	.activity {
		display: inline;
		font-size: 32px;
	}

	.activity:not(:last-child)::after{
		content:"";
		display:inline-block;        /* real, stylable circle */
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: white;
		vertical-align: middle;       /* align with text */
		margin: 0 10px;  /* control spacing */
	}

	.images {
		margin-top: 48px;

		display: flex; flex-direction: column; gap: 20px;
	}

	img {
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}

	p {
		margin-top: 48px;
	}
</style>
```

# src\routes\menu\+page.svelte

```svelte
<script lang="ts">
	import NavButton from "$lib/components/NavButton.svelte";
    import { pages } from "$lib/data/pages"
</script>

<menu>
    {#each pages as page}
    {#if (page.name !== "Menu" && page.name !== "Welcome")}
    <NavButton page={page}/>
    {/if}
    {/each}
</menu>

<style>
    menu {
        display: flex; flex-direction: column;
    }
</style>
```

# src\routes\travel\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import BulletInfo from "$lib/components/BulletInfo.svelte";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
	import { onMount } from "svelte";

    let rooms = $state<Room[]>([])
    let isLoading = $state(true)
    let searchString = $state<string>("")

    let filteredRooms: Room[] = $derived.by(() => {
        return searchString === "" ?
            rooms :
            rooms.filter(r =>
                r.people.some(p => {
                    const [first, last] = p.split(" ")
                    return (
                        first.toLowerCase().startsWith(searchString.toLowerCase()) ||
                        last.toLowerCase().startsWith(searchString.toLowerCase())
                    )
                })
            )
    })

    let filteredPeople: string[] = $derived.by(() => {
        const people = [""]
        if (searchString === "")
            return people
        return rooms
            .flatMap(r => r.people)
            .filter(p => {
                const [first, last] = p.split(" ")
                return first.toLowerCase().startsWith(searchString.toLowerCase()) || 
                    last.toLowerCase().startsWith(searchString.toLowerCase())
            })
    })

    type Room = {
        id: string
        people: string[]
    }

    type Match = {
        person: string, room: string, others: string[]
    }

    let matches: Match[] = $derived.by(() => {
        const q = searchString.trim().toLowerCase();
        if (!q) return [];

        return rooms.flatMap((r) =>
            r.people
                .filter((full) => {
                    const [first = "", last = ""] = full.split(" ");
                    return (
                        first.toLowerCase().startsWith(q) ||
                        last.toLowerCase().startsWith(q)
                    );
                })
                .map((person) => ({
                    person,
                    room: r.id,
                    others: r.people.filter((o) => o !== person)
                }))
        );
    });

    let matchi

    async function fetchRooms() {
        isLoading = true

        try {
            const response = await fetch(asset("/rooms.json"))
            if (!response.ok) throw new Error("failed to load rooms")
            rooms = await response.json()
        } catch (e) {
            console.log(e)
        } finally {
            isLoading = false
        }
    }

    onMount(fetchRooms)
</script>

<div class="container">
    <MenuButton name="Travel"/>

    <div class="welcome">
        <h3>Welcome to FSC and MC Learning Days</h3>
        <p>Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p>
    </div>

    <div class="card">
        <img class="card-img" src={asset("/travel.png")} alt="">
        <div class="fade"></div>
        
        <div class="card-info">
            <h3>Skogshem & Wijk</h3>
            <div class="info-figures">
                <figure class="info-figure">
                    <img class="icon" src={asset("/calendar-07.png")} alt="">
                    <span>28-29 August</span>
                </figure>
                <figure class="info-figure">
                    <img class="icon" src={asset("/marker-06.png")} alt="">
                    <span>Hustegavägen 1, Lidingö</span>
                </figure>
            </div>
        </div>
        <button class="card-button" onpointerdown={() => goto(resolve("/travel/directions"))}>TO & FROM</button>
    </div>

    <div class="info">
        <h3>Time reporting</h3>
        <p>96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p>
    </div>

    <div class="info">
        <h3>Meals</h3>
        <p>Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p>
    </div>

    <div class="info">
        <h3>Suggested pack list</h3>

        <BulletInfo 
            img={asset("/hanger.png")} 
            header="Festive dinner" 
            body="Business formal clothes for the festive dinner in the evening"
        />

        <BulletInfo 
            img={asset("/hanger.png")} 
            header="Conference" 
            body="Clothes and shoes for two days"
        />

        <BulletInfo 
            img={asset("/hanger.png")} 
            header="Pool / sauna" 
            body="Swimwear if you want to use the hotel's outdoor pool or sauna"
        />
    </div>

    <figure class="rooms">
        <input type="text" bind:value={searchString}>
        <ul>
            {#each matches as match}
            <li>
                <span class="room-person">{match.person}:</span>
                <span class="room-info">Room {match.room} with {match.others}</span>
            </li>
            {/each}
        </ul>
        <!-- {#each filteredRooms as room}
        <p>{room.people}</p>
        {/each} -->
    </figure>
</div>

<FooterNav previousPage={pages[1]} nextPage={pages[3]}/>

<style>
    .container {
        display: flex; flex-direction: column; gap: 40px;
    }

    .welcome {
        display: flex; flex-direction: column; gap: 10px;

    }

    h3 {
        font-size: 32px;
        letter-spacing: -.96px;
    }

    p {
        font-size: 16px;
        line-height: 120%;
    }

    .card {
        position: relative;
        height: 424px;
        border-radius: 8px;
        border: 1px solid #373946;

        padding: 20px 16px;
        
        .card-img {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }

        .card-info {
            position: absolute;
            inset: auto auto 94px 16px;

            .info-figures {
                display: flex; gap: 8px;
            }
        }
        
        .card-button {
            position: absolute;
            inset: auto auto 20px 16px;
            height: 50px; width: 186px;
            background-color: var(--primary-color);
            border-radius: 4px;
        }
    }
    
    .info-figure {
        display: flex; gap: 4px; align-items: center;

        span {
            font-size: 12px;
        }
    }
    
    .fade {
        border-radius: 8px;
        position: absolute;
        inset: 0;
        background: linear-gradient(0deg, #000 0%, #16171F 20%, rgba(22, 23, 31, 0.70) 30%, rgba(22, 23, 31, 0.00) 50%);
        pointer-events: none;
    }


    .info {
        margin-top: 8px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .icon {
        width: 24px; height: 24px;
    }

    .rooms {
        margin-top: 8px;
        height: 303px;
        border-radius: 8px;
        border: 1px solid #373946;
        background: linear-gradient(106deg, #16171F 0%, #000 100%);
        
        display: grid; place-items: center;

        input {
            color: #000;
        }

        ul {
            display: flex; flex-direction: column; gap: 8px;
        }

        li {
            display: flex; gap: 4px; align-items: center;
        }

        .room-person {
            font-weight: 700;
        }

        .room-info {

        }
    }
</style>
```

# src\routes\travel\directions\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";
	import BulletInfo from "$lib/components/BulletInfo.svelte";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import TransportBullet from "$lib/components/TransportBullet.svelte";
	import { pages } from "$lib/data/pages";


</script>

<div class="container">
    <button onpointerdown={() => goto(resolve("/travel"))}>
        <img src={asset("/arrow-down-right.png")} alt="">
    </button>

    <h2>To & from</h2>

    <div class="intro">
        <p>We have arranged transportation from Skogshem & Wijk from Stockholm Cityterminal through bus. See the schedule for the arranged transportation below.</p>
        <p>If you prefer to arrange your own transport from Stockholm to Skogshem & Wijk, <strong>please let us know as soon as possible.</strong></p>
        <p>Email: <a href="mailto:se-fmlearningfscmc" class="mail">se-fmlearningfscmc@kpmg.se</a></p>
    </div>

    <div class="bullet-container">
        <h3>From Stockholm</h3>
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
        <TransportBullet header="DESTINATION" body="SKOGSHEM & WIJK" />
        <TransportBullet header="GATHER" body="09:45" note="Be early - bus leaves on time!" />
        <TransportBullet header="DEPARTURE" body="10:00" />
        <TransportBullet header="ARRIVAL" body="10:30" />
    </div>

    <div class="bullet-container">
        <h3>Return Trip</h3>
        <TransportBullet header="MEETING POINT" body="SKOGSHEM & WIJK" />
        <TransportBullet header="DESTINATION" body="CITYTERMINALEN" />
        <TransportBullet header="DEPARTURE" body="15:45" />
        <TransportBullet header="ARRIVAL" body="16:15" />
    </div>

    <div class="other">
        <h3>Traveling form other cities</h3>
        <BulletInfo img={asset("/ticket-02.png")} header="Gothenburg / Malmö" body="The conference team will arrange your travel. You will receive your train tickets by email."/>
        <BulletInfo img={asset("/ticket-02.png")} header="Riga / Jönköping" body="Arrange your own travel to Stockholm. You need to be there at Cityterminalen no later than 09:45 on Aug 28th."/>
    </div>
</div>

<FooterNav previousPage={{ name: "Back to Travel", link: pages[2].link}} />

<style>
    button {
        width: 40px; height: 40px;
        background-color: transparent;

        img {
            width: 100%;
            transform: rotate(135deg);
        }
    }

    h2 {
        font-size: 64px;
        line-height: 100%;
    }

    .intro {
        margin-top: 40px;
        display: flex; flex-direction: column; gap: 16px;

        p {
            font-size: 16px;
        }
    }

    strong {
        color: var(--primary-color);
    }

    .bullet-container {
        margin-top: 48px;
        display: flex; flex-direction: column; gap: 20px;
    }

    h3 {
        font-size: 32px;
        line-height: 100%;
    }

    .other {
        margin-top: 48px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .mail {
        text-decoration: underline;
    }
</style>
```

# static\.nojekyll

```

```

# static\adwi.png

This is a binary file of the type: Image

# static\arrow-down-right.png

This is a binary file of the type: Image

# static\Bastu.png

This is a binary file of the type: Image

# static\cael.png

This is a binary file of the type: Image

# static\caev.png

This is a binary file of the type: Image

# static\calendar-07.png

This is a binary file of the type: Image

# static\Cornhole.png

This is a binary file of the type: Image

# static\dinner.png

This is a binary file of the type: Image

# static\elbe.png

This is a binary file of the type: Image

# static\emis.png

This is a binary file of the type: Image

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

# static\fata.png

This is a binary file of the type: Image

# static\favicon.svg

This is a file of the type: SVG Image

# static\Gym.png

This is a binary file of the type: Image

# static\hanger.png

This is a binary file of the type: Image

# static\leftArrow.png

This is a binary file of the type: Image

# static\lial.png

This is a binary file of the type: Image

# static\lime.png

This is a binary file of the type: Image

# static\logo.png

This is a binary file of the type: Image

# static\marker-06.png

This is a binary file of the type: Image

# static\Mingle.png

This is a binary file of the type: Image

# static\nama.png

This is a binary file of the type: Image

# static\nifo.png

This is a binary file of the type: Image

# static\Pool.png

This is a binary file of the type: Image

# static\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# static\rooms.json

```json
[
    {
        "id": "001",
        "people": ["Alfred Berg", "Robin Dafnäs"]
    },
    {
        "id": "002",
        "people": ["Zihan Persson", "Carina Elgendahl"]
    },
    {
        "id": "003",
        "people": ["Daniel Peng", "Alexander Örbratt"]
    }
]
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

# static\stva.png

This is a binary file of the type: Image

# static\ticket-02.png

This is a binary file of the type: Image

# static\travel.png

This is a binary file of the type: Image

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


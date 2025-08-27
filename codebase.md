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

# .vscode\settings.json

```json
{
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

html { -webkit-text-size-adjust: 100%; } /* prevents auto text inflation */

body {
  background-color: #000;
}

h1, h2 {
    font-family: "KPMGBold";
    font-weight: 700;
}

h3, h4, p, label, button, span, caption, th, td {
    font-family: "Univers";
    font-weight: 400;
    font-size: 16px;
}

p { line-height: 120%; }

@font-face {
    font-family: 'KPMGBold';
    src: url("./lib/assets/fonts/KPMG-BOLD.TTF") format("truetype");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Univers';
    src: url("./lib/assets/fonts/UNIVERSFORKPMG.TTF") format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Univers';
    src: url("./lib/assets/fonts/UNIVERSFORKPMG-BOLD.TTF") format("truetype");
    font-weight: 700;
    font-style: normal;
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
    .bullet {
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
</style>
```

# src\lib\components\DinnerSeating.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

	let { callback }: { callback: () => void } = $props();

    type Person = {
        id: string
        name: string
        roomMate: string
        table: string
    }

    let isLoading = $state(true)
    let isSearching = $state(true)
    let poeple = $state<Person[]>([])
    let searchString = $state<string>("")
    
    let matches: Person[] = $derived.by(() => {
        if (searchString == "") return []

        const queryTokens = tokenize(searchString)

        return poeple?.filter(person => {
            const tokenizedName = tokenize(person.name)
            return queryTokens.every(queryToken => tokenizedName.some(nameToken => nameToken.startsWith(queryToken)))
        })
    })

	function onfocus() {
		isSearching = true;
		callback();
	}
    
	function onblur() {
		isSearching = false;
	}

	function normalizeStr(s: string) {
		return s
			.toLowerCase()
			.normalize("NFD")
			.replace(/\p{M}/gu, "")
			.replace(/\s+/g, " ")
			.trim();
	}

	function tokenize(s: string) {
		const n = normalizeStr(s);
		return n ? n.split(" ") : [];
	}

    async function fetchPeople() {
        isLoading = true

        try {
            const response = await fetch(asset("/people.json"))
            if (!response.ok) throw new Error("failed to fetch people.json")

            const data: Omit<Person, "id">[] = await response.json()
            poeple = data.map(person => ({
                ...person,
                id: crypto.randomUUID()
            }))
        } catch (e) {
            // noop
        } finally {
            isLoading = false
        }
    }

    onMount(fetchPeople)
</script>

<label class="searchbar" class:active={isSearching}>
    <img src={asset("/search.svg")} alt="" class="icon">    
    <input type="text" bind:value={searchString} placeholder="Enter your name here" {onfocus} {onblur}>
</label>

{#if matches.length > 0}
<div class="results" transition:slide={{ duration: 120 }} onintroend={() => callback()}>
    {#each matches.slice(0, 5) as match}
    <p class="result"><span class="match-person">{match.name}</span> - Table {match.table}</p>
    {/each}
</div>
{/if}
    
<style>
    .searchbar {
        margin-top: 16px;
        width: 100%;
        height: 50px;
        outline: 1px solid var(--primary-color); border-radius: 4px;
        
        display: flex; align-items: center; gap: 10px;
        padding: 8px 10px;
        
    }

    .searchbar.active {
        outline: 2px solid var(--primary-color);
    }

    input {
        all: unset;
        font-family: "Univers";
        font-size: 16px;
        
        &::placeholder {
            color: white;
        }
    }

    .results {
        margin-top: 16px;

        outline: 2px solid var(--primary-color); border-radius: 4px;

        display: flex; flex-direction: column; gap: 10px;
        padding: 8px 10px;
    }
    
    p, span { font-size: 14px;  }
    p {
        color: var(--secondary-color);
        overflow: hidden; text-overflow: ellipsis; text-wrap: nowrap;
    }

</style>
```

# src\lib\components\FINALAGENDA.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

    const scheduleKeys = ["associate", "seniorAssociate", "manager", "seniorManager", "director", "partner"] as const
    type ScheduleKey = typeof scheduleKeys[number]

    type Item = {
        time: string
        style: string
        activity: string
    }

    type Schedule = {
        key: ScheduleKey
        label: string
        thursdayItems: Item[]
        fridayItems: Item[]
    }

    let loading = $state(true)
    let activeSchedule = $state<ScheduleKey|null>(null)
    let allSchedules = $state<Schedule[]>()
    let scheduleContainers = $state<HTMLLIElement[]>([])

    $inspect(activeSchedule, scheduleContainers)


    async function fetchSchedule() {
        loading = true

        try {
            const response = await fetch(asset("/schedule.json"))
            if (!response.ok) throw new Error("failed to load schedule")
            const data = await response.json()
            allSchedules = [
                { key: "associate", label: "ASSOCIATE", thursdayItems: data.associate.thursday, fridayItems: data.associate.friday },
                { key: "seniorAssociate", label: "SENIOR ASSOCIATE", thursdayItems: data.seniorAssociate.thursday, fridayItems: data.seniorAssociate.friday },
                { key: "manager", label: "MANAGER", thursdayItems: data.manager.thursday, fridayItems: data.manager.friday },
                { key: "seniorManager", label: "SENIOR MANGER", thursdayItems: data.seniorManager.thursday, fridayItems: data.seniorManager.friday },
                { key: "director", label: "DIRECTOR", thursdayItems: data.director.thursday, fridayItems: data.director.friday },
                { key: "partner", label: "PARTNER", thursdayItems: data.partner.thursday, fridayItems: data.partner.friday }
            ]
        } catch (e) {
            
        } finally {
            loading = false
        }
    }

    onMount(fetchSchedule)
</script>

<MenuButton name="Agenda"/>

<p>The MC & FS Learning days will be used to drive both learning & culture building. Here you will find detailed schedules for all our colleagues, select your role to find out more.</p>

{#if allSchedules}
<ul class="schedules">
    {#each allSchedules as { key, label, thursdayItems, fridayItems}, i}
    <li bind:this={scheduleContainers[i]}>
        <button onclick={() => activeSchedule === key ? activeSchedule = null : activeSchedule = key}>
            <span>{label}</span>
            <img src={activeSchedule === key ? asset("/minus.svg") : asset("/plus.svg")} alt="" class="icon">
        </button>

        {#if activeSchedule === key}
        <div class="schedule" transition:slide onintroend={() => scheduleContainers[i].scrollIntoView({ behavior: "smooth", block: "start" })}>
            <table>
                <caption>THURSDAY 28TH</caption>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>ACTIVITY</th>
                    </tr>
                </thead>
                <tbody>
                    {#each thursdayItems as item}
                    <tr>
                        <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                        <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            
            <table>
                <caption>FRIDAY 29TH</caption>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>ACTIVITY</th>
                    </tr>
                </thead>
                <tbody>
                    {#each fridayItems as item}
                    <tr>
                        <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                        <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>        
        {/if}
    </li>
    <hr>
    {/each}
</ul>
{/if}

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    p {
        margin-top: 40px;
    }

    ul {
        margin-top: 48px;
        width: 100%;

        display: flex; flex-direction: column; gap: 10px;
    }

    button {
        width: 100%;
        background-color: transparent;

        display: flex; justify-content: space-between; align-items: center;
    }

    .icon {
        width: 24px; height: 24px;
    }

    hr {
        background-color: var(--secondary-color);
        height: .8px;
    }
    
    .schedule {
        margin-top: 30px; margin-bottom: 10px;

        display: flex; flex-direction: column; gap: 48px;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        text-align: start;
        margin-bottom: 8px;
    }

    thead {
        background-color: var(--primary-color);
        height: 30px;
    }

    tbody {

        th {
            vertical-align: top;
            width: 110px;
        }
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
            <img src={asset("/arrow-left.svg")} alt="">
        </button>
        <label for="">{previousPage.name}</label>
        {/if}
    </div>
    <div>
        {#if nextPage}
        <label for="">{nextPage.name}</label>
        <button onpointerdown={() => goto(resolve(nextPage.link as any))}>
            <img class="right-arrow" src={asset("/arrow-left.svg")} alt="">
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

# src\lib\components\Icon.svelte

```svelte
<script lang="ts">
	import { draw } from "svelte/transition";

    let { width = 48, height = 20 } = $props()

    let isVisible = $state(false)

    $effect(() => { isVisible = true})
</script>

{#if isVisible}
<svg width={width} height={height} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path in:draw|global d="M5.14298 6.90176H14.7814M4.48524 1.4375V3.07698M15.3126 1.4375V3.07678M18.5001 6.07678L18.5001 17.5625C18.5001 19.2194 17.157 20.5625 15.5001 20.5625H4.50012C2.84327 20.5625 1.50012 19.2194 1.50012 17.5625V6.07678C1.50012 4.41992 2.84327 3.07678 4.50012 3.07678H15.5001C17.157 3.07678 18.5001 4.41992 18.5001 6.07678Z" stroke="#4C00FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{/if}

```

# src\lib\components\MenuButton.svelte

```svelte
<script lang="ts">
    import { goto } from "$app/navigation"
	import { asset, resolve } from "$app/paths"

    let { name }: { name: string} = $props()
</script>

<button onclick={() => goto(resolve("/menu"))}>
    <span>{name}</span>
    <img src={asset("/arrow-down-right.svg")} alt="">
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

<button onclick={() => goto(resolve(page.link as any))}>
    <span>{page.name}</span>
    <img src={asset("/arrow-down-right.svg")} alt="">
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

# src\lib\components\RoomFinder.svelte

```svelte
<script lang="ts">
	import { asset } from "$app/paths";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

	let { callback }: { callback: () => void } = $props();

    type Person = {
        id: string
        name: string
        roomMate: string
        table: string
    }

    let isLoading = $state(true)
    let isSearching = $state(true)
    let poeple = $state<Person[]>([])
    let searchString = $state<string>("")
    
    let matches: Person[] = $derived.by(() => {
        if (searchString == "") return []

        const queryTokens = tokenize(searchString)

        return poeple?.filter(person => {
            const tokenizedName = tokenize(person.name)
            return queryTokens.every(queryToken => tokenizedName.some(nameToken => nameToken.startsWith(queryToken)))
        })
    })

	function onfocus() {
		isSearching = true;
		callback();
	}
    
	function onblur() {
		isSearching = false;
	}

	function normalizeStr(s: string) {
		return s
			.toLowerCase()
			.normalize("NFD")
			.replace(/\p{M}/gu, "")
			.replace(/\s+/g, " ")
			.trim();
	}

	function tokenize(s: string) {
		const n = normalizeStr(s);
		return n ? n.split(" ") : [];
	}

    async function fetchPeople() {
        isLoading = true

        try {
            const response = await fetch(asset("/people.json"))
            if (!response.ok) throw new Error("failed to fetch people.json")

            const data: Omit<Person, "id">[] = await response.json()
            poeple = data.map(person => ({
                ...person,
                id: crypto.randomUUID()
            }))
        } catch (e) {
            // noop
        } finally {
            isLoading = false
        }
    }

    onMount(fetchPeople)
</script>

<label class="searchbar" class:active={isSearching}>
    <img src={asset("/search.svg")} alt="" class="icon">    
    <input type="text" bind:value={searchString} placeholder="Enter your name here" {onfocus} {onblur}>
</label>

{#if matches.length > 0}
<div class="results" transition:slide={{ duration: 120 }} onintroend={() => callback()}>
    {#each matches.slice(0, 5) as match}
    <p class="result"><span class="match-person">{match.name}</span> + {match.roomMate}</p>
    {/each}
</div>
{/if}
    
<style>
    .searchbar {
        margin-top: 16px;
        width: 100%;
        height: 50px;
        outline: 1px solid var(--primary-color); border-radius: 4px;
        
        display: flex; align-items: center; gap: 10px;
        padding: 8px 10px;
        
    }

    .searchbar.active {
        outline: 2px solid var(--primary-color);
    }

    input {
        all: unset;
        font-family: "Univers";
        font-size: 16px;
        
        &::placeholder {
            color: white;
        }
    }

    .results {
        margin-top: 16px;

        outline: 2px solid var(--primary-color); border-radius: 4px;

        display: flex; flex-direction: column; gap: 10px;
        padding: 8px 10px;
    }
    
    p, span { font-size: 14px;  }
    p {
        color: var(--secondary-color);
        overflow: hidden; text-overflow: ellipsis; text-wrap: nowrap;
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

<main class:welcome={page.route.id == "/"}>
	<header>
		<button onclick={() => goto(resolve("/"))}>
			<img src={asset("/logo.svg")} alt="">
		</button>
	</header>

	{@render children?.()}

	<footer class:welcome={page.route.id === "/"} class:menu={page.route.id === "/menu"} class:travel={page.route.id === "/travel"}>
		{#if page.route.id === "/"}
		<span>Designed & built by Customer Team MC</span>
		{:else}
		<p>
			Can't find what you're looking for?<br>
			Email us → <a href="mailto:se-fmlearningfscmc@kpmg.se">se-fmlearningfscmc@kpmg.se</a>
		</p>
		{/if}
	</footer>
</main>

<style>
	main { height: 100%; width: 100%; position: relative; padding: 60px 20px 0px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 60px; padding: 20px; }
	button { width: 48px; height: 20px; background-color: transparent; }
	img { width: 100%; height: 100%; object-fit: cover; }
	footer { margin-top: 100px; margin-bottom: 100px; }
	footer.welcome { margin-top: 24px; margin-bottom: 0px; }
	footer.menu { margin-top: 37px; margin-bottom: 0px; }
	footer.travel { margin-bottom: 280px; }
	span, p, a { font-size: 12px; color: var(--secondary-color); font-style: italic; }
	a { color: var(--primary-color); }
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
    <button onclick={() => goto(resolve("/menu"))}>WHAT'S ON</button>
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
        margin-top: 30px;
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
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
    
    type Item = {
        time: string
        style: string
        activity: string
    }
    
    const scheduleThursday: Item[] = [
        {
            time: "10:00 - 10:30",
            style: "grey",
            activity: "Transport to Skogshem & Wijk"
        },
        {
            time: "10:30 - 11:00",
            style: "grey",
            activity: "Arrival and baggage storage"
        },
        {
            time: "11:00 - 12:00",
            style: "-",
            activity: "Introduction & Speaker"
        },
        {
            time: "12:00 - 13:00",
            style: "grey",
            activity: "Lunch"
        },
        {
            time: "13:00 - 15:00",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "15:00 - 15:20",
            style: "grey",
            activity: "Break with coffee"
        },
        {
            time: "15:20 - 16:20",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "16:20 - 16:30",
            style: "grey",
            activity: "Break with coffee"
        },
        {
            time: "16:30 - 17:30",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "17:30 - 19:30",
            style: "grey",
            activity: "Check-in and free time"
        },
        {
            time: "19:30 - 20:00",
            style: "-",
            activity: "Pre-drinks"
        },
        {
            time: "20:00 - 22:30",
            style: "-",
            activity: "Festive 3-course dinner"
        },
        {
            time: "22:20 - 24:00",
            style: "-",
            activity: "Party!"
        }
    ]
    
    const scheduleFriday: Item[] = [
        {
            time: "07:00 - 08:15",
            style: "grey",
            activity: "Breakfast buffet"
        },
        {
            time: "08:15 - 10:00",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "10:00 - 10:15",
            style: "grey",
            activity: "Check-out and coffee break"
        },
        {
            time: "10:15 - 12:15",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "12:15 - 13:15",
            style: "grey",
            activity: "Lunch"
        },
        {
            time: "13:15 - 15:15",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "15:15 - 15:30",
            style: "-",
            activity: "Closing session"
        },
        {
            time: "15:30 - 15:45",
            style: "grey",
            activity: "Go to bus"
        },
        {
            time: "15:45 - 16:30",
            style: "grey",
            activity: "Transport to Cityterminalen"
        }
    ]

</script>

<MenuButton name="Agenda"/>

<p>The MC & FSC Learning days will be used to drive both learning & culture building. A detailed schedule for speakers and lectures will be published at a later time.</p>

<div class="schedule">
    <table>
        <caption>THURSDAY 28TH</caption>
        <thead>
            <tr>
                <th>TIME</th>
                <th>ACTIVITY</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleThursday as item}
            <tr>
                <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
    
    <table>
        <caption>FRIDAY 29TH</caption>
        <thead>
            <tr>
                <th>TIME</th>
                <th>ACTIVITY</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleFriday as item}
            <tr>
                <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    p {
        margin-top: 40px;
    }
    
    .schedule {
        margin-top: 30px; margin-bottom: 10px;

        display: flex; flex-direction: column; gap: 48px;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        text-align: start;
        margin-bottom: 8px;
    }

    thead {
        background-color: var(--primary-color);
        height: 30px;
    }

    tbody {

        th {
            vertical-align: top;
            width: 110px;
        }
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
	import { asset } from "$app/paths"
	import FooterNav from "$lib/components/FooterNav.svelte"
	import MenuButton from "$lib/components/MenuButton.svelte"
	import { pages } from "$lib/data/pages"
</script>

<div class="container">
    <MenuButton name="Crew" />

    <div class="intro">
        <p>This is the incredible team that has worked hard to bring this conference together and make everything happen!</p>
        <p>If you have any questions or concerns, don’t hesitate to reach out to any of us. We’re all here to make sure we have an incredible two days together.</p>
    </div>

    <div class="mc">
        <h3>MANAGEMENT CONSULTING</h3>
        <ul>
            <figure>
                <img src={asset("/cael.png")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/daka.png")} alt="">
                <label for="">David Kåverud</label>
            </figure>
            <figure>
                <img src={asset("/nifo.png")} alt="">
                <label for="">Nicole Fogelgren Broberg</label>
            </figure>
        </ul>
        <ul>
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
        <h3>FINANCIAL SERVICES CONSULTING</h3>
        <ul>
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
        <ul>
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

    <div class="ct">
        <h3>DESIGN & DEV TEAM (MC)</h3>
        <ul>
            <figure>
                <img src={asset("/roda.png")} alt="">
                <label for="">Robin Dafnäs</label>
            </figure>
            <figure>
                <img src={asset("/zipe.png")} alt="">
                <label for="">Zihan Persson</label>
            </figure>
            <figure>
                <img src={asset("/albe.png")} alt="">
                <label for="">Alfred Berg</label>
            </figure>
        </ul>
    </div>
</div>

<FooterNav previousPage={pages[5]}/>

<style>
    .intro {
        margin-top: 40px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .mc, .fs, .ct {
        margin-top: 48px;
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

<div class="seating">
    <!-- <h2>Dinner seating</h2>
    <div class="temp">
        <span>COMING SOON</span>
    </div> -->
    <DinnerSeating callback={() => { console.log("CALLBACK")}}/>
</div>

<FooterNav previousPage={pages[3]} nextPage={pages[5]}/>

<style>
    .poster {
        position: relative;
        height: 475px;
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

    h2 {
        font-size: 64px;
    }

    h4 {
        margin: 64px 0px;
        font-size: 32px;
        text-align: center;
        line-height: 110%;
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

    .seating {
        margin-top: 48px;
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
		"SAUNA",
		"GYM",
		"POOL TABLE",
		"PING PONG TABLE",
		"INDOOR MINI GOLF",
		"BOARD GAMES",
		"RELAX ON PRIVATE DOCKS",
		"AIR HOCKEY",
		"KUBB",
		"CORNHOLE",
		"BOULE",
		"GAME ROOM (DART, ARCADE GAMES, PS4, FLIPPER)",
		"OUTDOOR HOT TUB",
		"KARAOKE"
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
		letter-spacing: -3%;
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
		transform: translateY(-50%);
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
	import RoomFinder from "$lib/components/RoomFinder.svelte";
	import { pages } from "$lib/data/pages";

    let roomSharingDiv: HTMLDivElement

    function scrollToRoomSharing() {
        roomSharingDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    }
</script>

<div class="container">
    <MenuButton name="Travel"/>

    <div class="welcome">
        <h3>Welcome to FSC and MC Learning Days</h3>
        <p>Two days. One mission. FSC and MC are joining forces to break silos, build bridges, and spark game-changing conversations.</p>
    </div>

    <div class="card">
        <img class="card-img" src={asset("/travel.png")} alt="">
        <div class="fade"></div>

        <div class="card-info">
            <h3 class="card-header">Skogshem & Wijk</h3>
            <div class="info-figures">
                <figure class="info-figure">
                    <img class="icon" src={asset("/calendar.svg")} alt="">
                    <span>28-29 August</span>
                </figure>
                <figure class="info-figure">
                    <img class="icon" src={asset("/marker.svg")} alt="">
                    <span>Hustegavägen 1, Lidingö</span>
                </figure>
            </div>
        </div>
        <button class="card-button" onclick={() => goto(resolve("/travel/directions"))}>TRAVEL INFO</button>
    </div>

    <h2>General info</h2>

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
            img={asset("/hanger.svg")} 
            header="Festive dinner" 
            body="Business formal clothes for the festive dinner in the evening"
        />

        <BulletInfo 
            img={asset("/hanger.svg")} 
            header="Conference" 
            body="Business casual clothes and shoes for two days"
        />

        <BulletInfo 
            img={asset("/hanger.svg")} 
            header="Pool / sauna" 
            body="Swimwear if you want to use the hotel's outdoor pool or sauna"
        />

        <BulletInfo 
            img={asset("/luggage.svg")} 
            header="Necessities" 
            body="Work computer and charger"
        />
    </div>

    
    <div bind:this={roomSharingDiv} class="rooms">
        <h2>Room sharing</h2>
        <p>Here you can find more information about your stay at Skogshem & Wijk.</p>
        <!-- <div class="temp">
            <span>COMING SOON</span>
        </div> -->
        <RoomFinder callback={scrollToRoomSharing}/>
    </div>
</div>

<FooterNav previousPage={pages[1]} nextPage={pages[3]}/>

<style>
    .welcome {
        margin-top: 40px;
        display: flex; flex-direction: column; gap: 10px;
    }

    h2 {
        margin-top: 48px;
        font-size: 64px;
    }

    h3 {
        font-size: 32px;
        line-height: 110%;
        letter-spacing: -.96px;
    }

    p {
        font-size: 16px;
        line-height: 120%;
    }

    .card {
        margin-top: 40px;

        position: relative;
        height: 424px;
        border-radius: 8px;
        border: 1px solid #373946;

        padding: 20px 16px;
        
        .card-img {
            position: absolute; inset: 0;
            width: 100%; height: 94%;
            object-fit: cover;
            border-radius: 8px;
        }

        .card-info {
            position: absolute;
            inset: auto auto 94px 16px;

            .info-figures {
                margin-top: 8px;
                display: flex; gap: 8px;
            }
        }
        
        .card-button {
            position: absolute;
            inset: auto auto 20px 16px;
            height: 50px; width: 186px;
            background-color: var(--primary-color);
            border-radius: 4px;
            font-weight: 700;
        }

        .card-header {
            font-size: 28px; font-weight: 700; line-height: 120%;
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
        margin-top: 32px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .icon {
        width: 24px; height: 24px;
    }

    .rooms {
        margin-top: 48px;

        p {
            margin-top: 40px;
        }
    }




    /* .temp {
        margin-top: 16px;

        height: 50px; background-color: var(--primary-color);
        border-radius: 4px;
        display: grid; place-items: center;
    } */
</style>
```

# src\routes\travel\directions\+page.svelte

```svelte
<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import TransportBullet from "$lib/components/TransportBullet.svelte";
	import { pages } from "$lib/data/pages";


</script>

<div class="container">
    <button onclick={() => goto(resolve("/travel"))}>
        <img src={asset("/arrow-down-right.svg")} alt="">
    </button>

    <h2>Travel info</h2>

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
        <TransportBullet header="ARRIVAL" body="16:15 - 16:30" />
    </div>

    <div class="other">
        <h3>Traveling form other cities</h3>

        <div class="bullet">
            <figure>
                <img class="icon" src={asset("/ticket.svg")} alt="">
                <h4>Gothenburg / Malmö</h4>
            </figure>
            <p>The conference team will arrange your travel. You will receive your train tickets by email.</p>
            <p>If you have not received your tickets, reach out to the conference team as soon as possible, <a href="mailto:se-fmlearningfscmc@kpmg.se" class="mail">se-fmlearningfscmc@kpmg.se</a></p>
        </div>

        <div class="bullet">
            <figure>
                <img class="icon" src={asset("/ticket.svg")} alt="">
                <h4>Riga / Jönköping</h4>
            </figure>
            <p>Arrange your own travel to Stockholm. You need to be there at Cityterminalen <span>no later than 09:45 on Aug 28th</span></p>
        </div>
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
    }

    strong {
        color: var(--primary-color);
        text-transform: uppercase;
        font-weight: 400;
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

    .bullet {
        display: flex; flex-direction: column; gap: 10px;
        
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

        span {
            color: var(--primary-color);
        }
    }
</style>
```

# static\.nojekyll

```

```

# static\adwi.png

This is a binary file of the type: Image

# static\albe.png

This is a binary file of the type: Image

# static\arrow-down-right.svg

This is a file of the type: SVG Image

# static\arrow-left.svg

This is a file of the type: SVG Image

# static\Bastu.png

This is a binary file of the type: Image

# static\cael.png

This is a binary file of the type: Image

# static\caev.png

This is a binary file of the type: Image

# static\calendar.svg

This is a file of the type: SVG Image

# static\Cornhole.png

This is a binary file of the type: Image

# static\daka.png

This is a binary file of the type: Image

# static\dinner.json

```json
[
    {
        "person": "Alfred Berg",
        "table": "01"
    },
    {
        "person": "Zihan Persson",
        "table": "02"
    },
    {
        "person": "Daniel Peng",
        "table": "03"
    },
    {
        "person": "Emil Isaksson",
        "table": "04"
    },
    {
        "person": "Daniel Peng",
        "table": "05"
    },
    {
        "person": "Daniel Peng",
        "table": "06"
    },
    {
        "person": "Emil Isaksson",
        "table": "07"
    },
    {
        "person": "Emil Elefant",
        "table": "07"
    }
]
```

# static\dinner.png

This is a binary file of the type: Image

# static\elbe.png

This is a binary file of the type: Image

# static\emis.png

This is a binary file of the type: Image

# static\fata.png

This is a binary file of the type: Image

# static\favicon.svg

This is a file of the type: SVG Image

# static\Gym.png

This is a binary file of the type: Image

# static\hanger.svg

This is a file of the type: SVG Image

# static\lial.png

This is a binary file of the type: Image

# static\lime.png

This is a binary file of the type: Image

# static\logo.svg

This is a file of the type: SVG Image

# static\luggage.svg

This is a file of the type: SVG Image

# static\marker.svg

This is a file of the type: SVG Image

# static\Mingle.png

This is a binary file of the type: Image

# static\minus.svg

This is a file of the type: SVG Image

# static\nama.png

This is a binary file of the type: Image

# static\nifo.png

This is a binary file of the type: Image

# static\people.json

```json
[
    {
        "name": "Alfred Berg",
        "roomMate": "Robin Dafnäs",
        "table": "11"
    },
    {
        "name": "Robin Dafnäs",
        "roomMate": "Alfred Berg",
        "table": "3"
    },
    {
        "name": "Kalvin Berg",
        "roomMate": "Hobbin Dafnäs",
        "table": "8"
    },
    {
        "name": "Bergfred Färg",
        "roomMate": "Dafne Dandy",
        "table": "5"
    },
    {
        "name": "Kalvin Kango",
        "roomMate": "Mango Jango Dafnäs",
        "table": "8"
    },
    {
        "name": "Manito Greg",
        "roomMate": "Dafneddy Teddy",
        "table": "5"
    },
    {
        "name": "Karl Johan Kanto",
        "roomMate": "Hob-Robin Dafnäs",
        "table": "1"
    }
]
```

# static\plus.svg

This is a file of the type: SVG Image

# static\Pool.png

This is a binary file of the type: Image

# static\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# static\roda.png

This is a binary file of the type: Image

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
    },
    {
        "id": "004",
        "people": ["Emil Isaksson Torgilsman", "Emil Isaksson Torgilsman"]
    },
    {
        "id": "005",
        "people": ["Daniel Peng", "asd Örbratt"]
    },
    {
        "id": "006",
        "people": ["Daniel Peng", "Daniel Peng"]
    },
    {
        "id": "007",
        "people": ["Emil Isaksson Torgilsman", "Emma A"]
    },
    {
        "id": "007",
        "people": ["Emil Torgilsman", "Emma Sata"]
    }
]
```

# static\schedule.json

```json
{
    "associate": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Power BI Digital tools for efficiency"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Power BI"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "grey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 09:15",
                "style": "-",
                "activity": "Well-being lecture"
            },
            {
                "time": "09:15 - 10:00",
                "style": "-",
                "activity": "Sales"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 12:15",
                "style": "-",
                "activity": "Visualization Power BI"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 15:15",
                "style": "-",
                "activity": "Present with impact"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    },

    "seniorAssociate": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Ways of Working: Starting a project"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Ways of Working: Delivering / End a project"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "grey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 10:00",
                "style": "-",
                "activity": "Visualization Present with impact"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 12:15",
                "style": "-",
                "activity": "Present with impact Velocity"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 14:15",
                "style": "-",
                "activity": "Sales"
            },
            {
                "time": "14:15 - 15:15",
                "style": "-",
                "activity": "Well being"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    },

    "manager": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Ways of Working: Starting a project"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Ways of Working: Delivering / End a project"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "grey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 10:00",
                "style": "-",
                "activity": "Project Management"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 12:15",
                "style": "-",
                "activity": "Sales"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 14:15",
                "style": "-",
                "activity": "Well-being"
            },
            {
                "time": "14:15 - 15:15",
                "style": "-",
                "activity": "Visualization as CM Digital tools for efficiency"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    },

    "seniorManager": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Pricing"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Visualization as Change Management Alliances SAP"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "grey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 10:00",
                "style": "-",
                "activity": "Velocity (SM + P)"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 11:15",
                "style": "-",
                "activity": "Wellbeing (SM + P)"
            },
            {
                "time": "11:15 - 12:15",
                "style": "-",
                "activity": "Data analysis (SM + P)"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 15:15",
                "style": "-",
                "activity": "Sales (SM + P)"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    },

    "director": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Pricing"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Visualization as Change Management Alliances SAP"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "greyrey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 10:00",
                "style": "-",
                "activity": "Sales"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 11:15",
                "style": "-",
                "activity": "Data analysis"
            },
            {
                "time": "11:15 - 12:15",
                "style": "-",
                "activity": "Well being"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 15:15",
                "style": "-",
                "activity": "Velocity"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    },

    "partner": {
        "thursday": [
            {
                "time": "10:00 - 10:30",
                "style": "grey",
                "activity": "Transport to Skogshem & Wijk"
            },
            {
                "time": "10:30 - 11:00",
                "style": "grey",
                "activity": "Arrival and check-in"
            },
            {
                "time": "11:00 - 12:00",
                "style": "-",
                "activity": "Introduction & External inspirational speaker, Marcus Tungel, Head of Finance Swedbank"
            },
            {
                "time": "12:00 - 13:00",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:00 - 13:55",
                "style": "-",
                "activity": "Sector Outlooks (KPMG internaltional  speakers): Consumer & Retail (Isabelle Allen), Industrial & Manufacturing, Financial Services (Camiel van Steekelenburg)"
            },
            {
                "time": "14:00 - 15:00",
                "style": "-",
                "activity": "Power BI Digital tools for efficiency"
            },
            {
                "time": "15:00 - 15:20",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "15:20 - 16:20",
                "style": "-",
                "activity": "Visualization as Change Management Alliances SAP"
            },
            {
                "time": "16:20 - 16:30",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "16:30 - 17:30",
                "style": "-",
                "activity": "AI: Pär Edin lecture"
            },
            {
                "time": "17:30 - 19:30",
                "style": "grey",
                "activity": "Free time: spa / activities"
            },
            {
                "time": "19:30 - 20:00",
                "style": "-",
                "activity": "Pre-drinks"
            },
            {
                "time": "20:00 - 22:30",
                "style": "-",
                "activity": "Festive 3-course dinner"
            },
            {
                "time": "22:20 - 24:00",
                "style": "-",
                "activity": "Party!"
            }
        ],

        "friday": [
            {
                "time": "07:00 - 08:15",
                "style": "grey",
                "activity": "Breakfast buffet"
            },
            {
                "time": "08:15 - 10:00",
                "style": "-",
                "activity": "Velocity (SM P)"
            },
            {
                "time": "10:00 - 10:15",
                "style": "grey",
                "activity": "Break with coffee"
            },
            {
                "time": "10:15 - 11:15",
                "style": "-",
                "activity": "Well being (SM + P)"
            },
            {
                "time": "11:15 - 12:15",
                "style": "-",
                "activity": "Data analysis (SM + P)"
            },
            {
                "time": "12:15 - 13:15",
                "style": "grey",
                "activity": "Lunch"
            },
            {
                "time": "13:15 - 15:15",
                "style": "-",
                "activity": "Sales (SM + P)"
            },
            {
                "time": "15:15 - 15:30",
                "style": "-",
                "activity": "Closing session"
            },
            {
                "time": "15:30 - 15:45",
                "style": "grey",
                "activity": "Checkout / Go to bus"
            },
            {
                "time": "15:45 - 16:15",
                "style": "grey",
                "activity": "Transport to Cityterminalen"
            }
        ]
    }
}

```

# static\search.svg

This is a file of the type: SVG Image

# static\stva.png

This is a binary file of the type: Image

# static\ticket.svg

This is a file of the type: SVG Image

# static\travel.png

This is a binary file of the type: Image

# static\zipe.png

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


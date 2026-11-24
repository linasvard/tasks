# Tasks

[![Deploy](https://img.shields.io/github/actions/workflow/status/linasvard/tasks/deploy.yml?style=for-the-badge&label=deploy)](https://github.com/linasvard/tasks/actions/workflows/deploy.yml)
[![Live demo](https://img.shields.io/badge/demo-live-9666df?style=for-the-badge)](https://linasvard.github.io/tasks/)
![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A small to-do app built with Vue 3 and Vite while learning Vue. Add, edit, check
off and filter tasks. Everything is saved in the browser, so your list is still
there after a reload.

**🔗 Live demo:** https://linasvard.github.io/tasks/

![Screenshot of the app](screenshot.jpeg)

## Feautures

- Add, check off and delete tasks
- Double-click a task to edit (Enter saves, Esc cancels)
- Filter by all, active or done tasks, with a counter of tasks left
- Clear all done tasks at once
- Dark theme and responsive layout
- Automatic deployment on Github Pages with GitHub Actions

## What I practiced

- Reactivity with `ref`, `computed` and `watch`
- Template syntax: `v-model`, `v-for`, `v-if`, event and attribute bindings
- Splitting the UI into components with `props`, `emits` and `defineModel`
- Moving logic into reusable composable (`useTodos`)

## Run locally

Requires Node.js 20.19 or newer.

```bash
cd learning-vue
npm install
npm run dev
```

Then open the server address in the browser, usually `http://localhost:5173`.

## Built with

[Vue 3](https://vuejs.org) · [Vite](https://vite.dev) · GitHub Actions · GitHub
Pages

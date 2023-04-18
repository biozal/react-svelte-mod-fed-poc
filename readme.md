# Modular Federation with Vite

This repository is to showcase examples of how vite with Module Federation (vite-plugin-federation) can be used to share components between a React application and a Svelte application.

## How to build & run apps

1.  Clone the repository
2.  Run `npm install` in the `src/react-app` directory
3.  Run `npm run build` in the `src/react-app` directory
4.  Run `npm run make-types` in the `src/react-app` directory
5.  Run `npx serve dist --cors` in the `src/react-app` directory (caution: after this point you have to spawn another terminal for svelte app)
6.  Run `npm run fetch-types` in the `src/svelte-app` directory
7.  Run `npm run dev` in the `src/svelte-app` directory

## Information

More on the vite-plugin-federation can be found at this
[GitHub Repository](https://github.com/originjs/vite-plugin-federation)

## Typescript

Solution with typescript is inspired with [this library](https://www.npmjs.com/package/@pixability-ui/federated-types) – it takes all the exposed modules and takes & save their type definitions to specified directory. While both – shared resources and types are available on given address (in our case it's `http://localhost:3000`), it's possible to fetch types & use them in the svelte app.

## Learning Resources

- [Micro Frontends in 10 minutes](https://youtu.be/s_Fs4AXsTnA)
- [Micro Frontends Crash Course](https://youtu.be/lKKsjpH09dU)

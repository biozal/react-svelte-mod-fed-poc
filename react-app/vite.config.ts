import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
      name: 'sharedComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './ProjectList': "./src/components/project-list/project-list.tsx",
        './DatabaseList': "./src/components/database-list/database-list.tsx",
        './NewProject': "./src/components/new-project/new-project.tsx",
      },
      shared: {
        react: {
          requiredVersion: "^18.0.2",
        },
        "react-dom": {
          requiredVersion: "^18.0.2",
        },
      },
    }),
  ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})

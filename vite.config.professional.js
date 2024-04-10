import { resolve } from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/applications/professional", //where index.html entry file located
  publicDir:"../../../public",
  build: {
    outDir: '../../../dist/professional', // Target catalog for build
    emptyOutDir: true,
    rollupOptions: {
      input: {professional: "./src/applications/professional/index.html"},
      output: {  // here define naming pattern and directories for assets
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
  server: {
    port: 4001,
  },
  preview: {
    port: 4011,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias for common assets and components
      '@app': resolve(__dirname, 'src/applications/professional'), // Alias for application resources
    }
  }
})
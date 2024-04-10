import { resolve } from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/applications/personal", //where index.html entry file located
  publicDir:"../../../public",
  build: {
    outDir: '../../../dist/personal', // Target catalog for build
    emptyOutDir: true,
    rollupOptions: {
      input: {personal: "./src/applications/personal/index.html"},
      output: { // here define naming pattern and directories for assets
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
    port: 4000,
  },
  preview: {
    port: 4010,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias for common assets and components
      '@app': resolve(__dirname, 'src/applications/personal'), // Alias for application resources
    }
  }
})

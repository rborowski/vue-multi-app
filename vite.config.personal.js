import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   root: "./src/applications/personal",
  //base: "",
  build: {
    outDir: '../../../dist/personal', // Katalog docelowy dla plików zbudowanych
    emptyOutDir: true,
    //emptyOutDir: false, // Wyłączenie czyszczenia katalogu wynikowego przed budowaniem

    // Konfiguracja wejść (punkty wejścia) dla budowania
    //rollupOptions: {
      //input: 'src/applications/personal/index.html', // Punkt wejścia dla aplikacji personal
      // Definiujemy wyjścia dla każdej aplikacji
      // output: {
      //   dir: "dist",
      //   entryFileNames: '[name].[hash].js', // Nazwa pliku wejściowego
      //   chunkFileNames: 'assets/[name].[hash].js', // Katalog dla plików chunków
      //   assetFileNames: 'assets/[name].[hash].[ext]', // Katalog dla plików zasobów
      // }
    //}
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
      '@': resolve(__dirname, 'src'), // Alias dla plików wspólnych
      //'@app': resolve(__dirname, 'src/applications/personal'), // Alias dla aplikacji personal
    }
  }
})

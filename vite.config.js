import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
//import EslintPlugin from 'vite-plugin-eslint'
//import StylelintPlugin from 'vite-plugin-stylelint'

export default defineConfig({
	plugins: [
        vue(), 
        //StylelintPlugin(), 
        //EslintPlugin()
    ],
})

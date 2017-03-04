import bublePlugin from 'rollup-plugin-buble';
import sveltePlugin from 'rollup-plugin-svelte';
import path from 'path';

export default {
    entry: path.join(__dirname, 'client.js'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        sveltePlugin(),
        bublePlugin()
    ],
    dest: path.join(process.env.BUNDLES_DIR, 'svelte.js')
};
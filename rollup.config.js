import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'


import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
        }),
        alias({
            entries: [
                { find: '@', replacement: '.' },
            ]
        }),
        postcss({
            extract: "dokan-ui.css",
            config: "./postcss.config.js"
        }),
        commonjs(),
        nodeResolve()
    ],
    // external: ['react', 'react-dom', 'speakingurl', 'classnames', '@heroicons/react', '@heroicons/react/solid', '@heroicons/react/outline', '@headlessui/react', 'react-laag', 'react-select', 'react-select/creatable', 'react-feather']
    external: ['react', 'react-dom']
}

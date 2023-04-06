import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        commonjs(),
        resolve(),
    ],
};

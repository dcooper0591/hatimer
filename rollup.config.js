import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  onwarn(warning, warn) {
    // Suppress expected "this" rewrite warnings from CJS deps (e.g. @formatjs/intl-utils)
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
  output: {
    file: 'dist/hatimer.js',
    format: 'es',
    sourcemap: false,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve({
      browser: true,
      exportConditions: ['browser'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    production && terser(),
  ].filter(Boolean),
};

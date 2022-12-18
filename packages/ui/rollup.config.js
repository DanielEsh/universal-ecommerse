import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ abortOnError: false }),
    postcss(),
  ],
}

// // const extensions = ['.js', '.jsx', '.ts', '.tsx']
// const input = 'src/index.ts'
// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ]

// const plugins = [
//   peerDepsExternal(),
//   resolve(),
//   commonjs(),
//   typescript({ useTsconfigDeclarationDir: true, abortOnError: false }),
//   postcss(),
// ]

// export default [
//   {
//     input,
//     output: {
//       file: pkg.module,
//       format: 'esm',
//       sourcemap: true,
//     },
//     plugins,
//     external,
//   },
//   {
//     input,
//     output: {
//       file: pkg.main,
//       format: 'cjs',
//       sourcemap: true,
//     },
//     plugins,
//     external,
//   },
// ]

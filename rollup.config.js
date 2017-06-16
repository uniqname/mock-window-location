import babel from 'rollup-plugin-babel';
// import babelrc from 'babelrc-rollup'
import commonjs from 'rollup-plugin-commonjs';
import config from '.babelrc'

const reconfig = { 
  ...config,
  plugins: ["external-helpers", ...config.plugins],
  modules: false
}

console.log('reconfig: ', reconfig)
export default {
  entry: 'index.js',
  format: 'cjs',
  plugins: [
    commonjs({
      extensions: [ '.js' ]
    }),
    babel({ 
      ...config,
      plugins: config.plugins.slice(1),
      modules: false
    })
  ],
  dest: 'lib/index.js',
  sourceMap: true
};

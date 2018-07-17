const sass = require('@stencil/sass');

exports.config = {
  namespace: 'fab-menu',
  plugins: [
    sass({ includePaths: ['./node_modules'] })
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

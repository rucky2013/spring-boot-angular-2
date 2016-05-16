/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 */
module.exports = {
  files: [
    "src/main/web"
  ],
  server: {
    baseDir: "./src/main/web"
  },
  serveStatic: [
    '.' // node_modules/
  ],
  snippetOptions: {
    ignorePaths: [
      "**/*.ts"
    ]
  },
  ui: {
    port: 3001,
    weinre: {
      port: 8081
    }
  }
};

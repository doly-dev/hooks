const { MODULE_TYPE } = process.env;

const babelEnvModulesConfig = MODULE_TYPE === 'esm' ? { modules: false } : {};

module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        ...babelEnvModulesConfig,
        "targets": [
          "> 1%",
          "last 4 versions",
          "Firefox ESR",
          "not ie < 9"
        ]
      }
    ],
    "@babel/react"
  ]
}
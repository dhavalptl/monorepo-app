module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-typescript', '@babel/preset-react'],
    plugins: [
        [
          "module-resolver",
          {
            alias: {
              "^@dhavalptl/(.+)": "../\\1/src",
            },
          },
        ],
    ]
};
module.exports = function override(config, env) {
  config.module.rules[1].oneOf[2].use.unshift({
    loader: require.resolve("babel-loader")
  });

  return config;
};

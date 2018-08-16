module.exports = env => {
  if (!env) {
    throw new Error('Evn required to run webpack');
  }

  switch (env.env) {
    case 'prod':
    case 'production':
      return require('./config/webpack.prod')({ env: 'production' });
    case 'dev':
    case 'development':
    default:
      return require('./config/webpack.dev')({ env: 'development' });
  }
};

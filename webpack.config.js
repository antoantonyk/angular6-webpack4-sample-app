module.exports = env => {
  console.log(env);

  if (!env) {
    console.log('setting env to dev..!');
    env = {
      env: 'dev'
    };
  }

  switch (env.env) {
    case 'prod':
    case 'production':
      return require('./config/webpack.prod')({ env: 'production' });
    case 'test':
    case 'testing':
      return require('./config/webpack.test')({ env: 'test' });
    case 'dev':
    case 'development':
    default:
      return require('./config/webpack.dev')({ env: 'development' });
  }
};

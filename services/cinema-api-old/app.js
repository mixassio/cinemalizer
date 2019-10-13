const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });
  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello World!';
    },
  });

  await server.start();
  console.log('Server running today on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();


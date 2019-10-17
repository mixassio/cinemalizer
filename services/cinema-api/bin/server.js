const server =require('../index');

const port = 3000;
server().listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server was started on '${port}'`);
});

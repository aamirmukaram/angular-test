// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  let hasErrors = false;

  if (req.method === 'POST' || req.method === 'PUT') {
    let request = req.body;

    if (!request.title) {
      res.status(400);
      res.send({ error: 'Title is required.' });
      hasErrors = true;
    }

    if (!request.content) {
      res.status(400);
      res.send({ error: 'Content is required.' });
      hasErrors = true;
    }
  }
  if (hasErrors) {
    res.sendStatus(400);
  } else {
    next();
  }

});

server.use(router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
});

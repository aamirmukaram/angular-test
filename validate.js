module.exports = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    let request = req.body;

    if (!request.title) {
      res.status(400);
      res.send({ error: 'Title is required.' });
      console.log('Title is required.');
    }

    if (!request.content) {
      res.status(400);
      res.send({ error: 'Content is required.' });
    }

  }

  next();
};

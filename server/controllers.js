const models = require('./models');

module.exports = {
  getPlants(req, res) {
    models.getAll()
      .then((results) => {
        res.send(results);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  findPlantAndUpdate(req, res) {
    models.addOrUpdateOne(req.body)
      .then((results) => {
        // Error [ERR_HTTP_HEADERS_SENT]
        // Cannot set headers after they are sent to the client
        console.log('success', results);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
    res.end();
  },
};

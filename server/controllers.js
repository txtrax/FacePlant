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
    console.log(req.body);
    console.log('line 17');
    models.addOrUpdateOne(req.body)
      .then((results) => {
        // Error [ERR_HTTP_HEADERS_SENT] bs res.send and res.end
        // Cannot set headers after they are sent to the client
        return models.getAll()
          .catch((err) => {
            console.log(err)
          })
      })
      .then((results) => {
        console.log('success', results);
        res.send(results);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
    // res.end();
  },
};

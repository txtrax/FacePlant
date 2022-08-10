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
};

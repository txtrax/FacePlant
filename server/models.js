const Plant = require('./db');

module.exports = {
  getAll() {
    return Plant.find()
      .catch((err) => {
        console.log('error in db getAll', err);
      });
  },

  addOrUpdateOne(plant) {
    const filter = {
      name: plant.name,
    };

    return Plant.findOneAndUpdate(filter, plant, {
      new: true,
      upsert: true,
      rawResult: true,
      useFindAndModify: false,
    })
      .catch((err) => {
        console.log('error in db post', err);
      });
  },
};

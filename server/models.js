const Recipe = require('./db');

module.exports = {
  getAll() {
    return Recipe.find()
      .catch((err) => {
        console.log('error in db getAll', err);
      });
  },
};

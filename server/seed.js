const Model = require('./db');

const exampleData = [{
  name: 'Cynthia',
  common_names: [
    'common dandelion',
  ],
  custom_id: null,
  description: 'Taraxacum officinale, the common dandelion (often simply called "dandelion"), is a flowering herbaceous...',
  image_url: 'https://plant.id/media/images/757562b36f1942209d4c96720967dfe8.jpg',
  location: 'outside',
  propagation_methods: [
    'division',
    'seeds',
  ],
  scientific_name: 'Taraxacum officinale',
}];

Model.deleteMany({})
  .then(() => Promise.all(exampleData.map((item) => Model.create(item))))
  .then(() => console.log('The database has been reset!'))
  .catch((err) => console.error('Error resetting the database: ', err));

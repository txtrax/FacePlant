require('dotenv').config();
const mongoose = require('mongoose');

const { DB_NAME } = process.env;
// TODO: Set up a connection to the "expresso" MongoDB database
mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`, () => {
  console.log(`Connected to database: ${DB_NAME}!`);
});

// put in taxonomy later
// set common_names and propogation_methods to null or empty
const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    common_names: [String],
    custom_id: { type: Number, default: 0 },
    description: String,
    favorite: { type: Boolean, default: false },
    image_url: String,
    location: String,
    propagation_methods: [String],
    scientific_name: String,
  },
  { timestamps: true },
);

const Plant = new mongoose.model('plant', plantSchema);

module.exports = Plant;

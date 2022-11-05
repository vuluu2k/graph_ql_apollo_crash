require('dotenv').config();
const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@comic-graphql.ymr5i5p.mongodb.net/?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      },
    );
    console.log('Connect to DB Success');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}
module.exports = { connect };

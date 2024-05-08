const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');


const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

mongoose.connect('mongodb://localhost/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('connected');
  // initialize DB, we will discuss this in further lessons
  await initialDBSetup();
});

const { Schema } = mongoose;

const bookSchema = new Schema({
  title:  String,
  author: String,
  isbn:   Number
});

const Book = mongoose.model('Book', bookSchema);

app.get('/api/some-endpoint', async (req, res) => {
  try {
    const book = await Book.findOne({ title: 'Eloquent JavaScript' });
    res.json({message: JSON.stringify(book)});
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const initialDBSetup = require('./initialDBSetup');


app.use(cors());

const starSchema = new mongoose.Schema({
  name: String,
  constellation: String,
  magnitude: Number
});

const Star = mongoose.model('Star', starSchema);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/myDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('connected');
    // initialize DB
    await initialDBSetup();
  });
  
// Adding Orionis
app.get('/api/add-star-orionis', async (req, res) => {
  const orionis = new Star({ name: "Orionis", constellation: "Orion", magnitude: 3.5 });
  await orionis.save();
  res.send("Orionis has been added to the stars collection.");
});

// Adding Polaris
app.get('/api/add-star-polaris', async (req, res) => {
  const polaris = new Star({ name: "Polaris", constellation: "Ursa Minor", magnitude: 2.0 });
  await polaris.save();
  res.send("Polaris has been added to the stars collection.");
});

// Updating Polaris Magnitude
app.get('/api/update-polaris-magnitude', async (req, res) => {
  await Star.updateOne({ name: "Polaris" }, { $set: { magnitude: 2.02 } });
  res.send("Polaris magnitude updated to 2.02.");
});

// Start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const port = 5000;

app.post('/api/signup', async (req, res) => {
    const { password } = req.body;
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Save hashedPassword to database (mocked)
        console.log('Password hashed and saved: ', hashedPassword);
        res.status(201).send({ hashedPassword });
    } catch (error) {
        res.status(500).send('Error during signup.');
    }
});

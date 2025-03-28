require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 3010; 

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch(err => console.error(`Error connecting to database: ${err.message}`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

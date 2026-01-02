const express = require('express');
const app = express();
const port = 3000;
const signupLoginRoutes = require("./routes/signupLogin");
require("dotenv").config();
const db = require('./db')
app.use(express.json());


app.use('/', signupLoginRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
});
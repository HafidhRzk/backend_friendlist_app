const express = require('express');
const cors = require('cors');

const router = require('./src/routes');

const app = express();
const port = process.env.PORT || 'https://backend-friendlist-app.herokuapp.com/api/v1' || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => console.log(`Listening on port ${port}!`))
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/artists.routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/artists', routes);

app.listen(3000, () => {
    console.log('listening on port 3000');
});

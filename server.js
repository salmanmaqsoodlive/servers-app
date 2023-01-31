const express = require('express');
const NodesRoutes = require('./routes/Nodes');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', NodesRoutes);

app.listen(PORT);

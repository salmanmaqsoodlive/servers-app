const express = require('express');
const NodesRoutes = require('./routes/Nodes');

const PORT = 80;
const app = express();

app.use('/api', NodesRoutes);



app.listen(PORT);

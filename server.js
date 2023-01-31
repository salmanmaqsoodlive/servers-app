const express = require('express');
const NodesRoutes = require('./routes/Nodes');

const PORT = 4000;
const app = express();

app.use('/api', NodesRoutes);



app.listen(PORT);

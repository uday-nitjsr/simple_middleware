const cov = require('istanbul-middleware');
const express = require('express');
const app = express();

app.use('/coverage', cov.createHandler()); 

app.listen(9091);
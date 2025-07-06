const express = require('express');
const app = express();
app.get('/', (_, res) => res.send('Hello from multi-cloud Kubernetes!'));
app.listen(3000, () => console.log('App listening on port 3000'));

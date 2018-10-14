const express = require('express');
const routes = require('./routes');
const serviceRoutes = require('./routes/service');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(routes);
app.use('/services', serviceRoutes);

app.listen(9999, () => {
  console.log('server started at port 9999, open webpage at localhost:9999');
});

require('dotenv').config();
const app = require('./app');

// do not remove the `API_PORT` variable or the `listen`
const port = process.env.API_PORT || 3000;

// don't remove this endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log(`local server started : http://localhost:${port}/`));

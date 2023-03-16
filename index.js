// import express
const express = require('express');

/* create first express application - app object is used to set up config that will listen 
to incoming requests that are being routed to the express side of the app from the node side, 
then route those reuqests on to the route handlers. So all route handelers that are created 
will be registed with the app object. */
const app = express();

// route handler - app: represents underlying express server - get: http request method
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// listening on port 5000
app.listen(5000);
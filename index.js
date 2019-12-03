const server = require('./api/server.js');


server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});


// this is for the client but it is cool to see that
//http://localhost:4000/api/hubs?limit=3

//http://localhost:4000/api/hubs?limit=3&page=2

//http://localhost:4000/api/hubs?limit=3&page=1&sortdir=desc&sortby=name
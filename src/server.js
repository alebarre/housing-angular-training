const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for specific origins (replace with your Angular URL if needed)
server.use(cors({
  origin: 'http://localhost:4200',  // Allow requests from Angular's localhost
}));

// Start server
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
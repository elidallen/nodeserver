const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Check the URL path to determine the route
  if (req.url === '/') {
    // Default route - Send a plain text response
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  } else if (req.url === '/about') {
    // Custom route - Send an HTML response
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About Us</h1><p>Welcome to our website.</p>');
  } else if (req.url === '/contact') {
    // Another custom route - Send a different HTML response
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Contact Us</h1><p>Contact our support team at support@example.com.</p>');
  } else {
    // Handle unknown routes with a 404 Not Found response
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
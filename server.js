const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the proxy middleware
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:8889',
  changeOrigin: true,
});

// Set up the proxy middleware
app.use(apiProxy);

// Start the server
const port = 3000; // Specify the desired port
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

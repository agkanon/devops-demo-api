const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Default metrics
client.collectDefaultMetrics({ register: client.register });

// Custom metrics
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.5, 1, 2, 5, 10]
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestsTotal.inc({ method: req.method, route: req.route?.path || req.path, status: res.statusCode });
    httpRequestDuration.observe({ method: req.method, route: req.route?.path || req.path, status: res.statusCode }, duration);
  });
  next();
});

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), service: 'devops-demo-api' });
});

app.post('/data', (req, res) => {
  console.log(`[${new Date().toISOString()}] Data received:`, req.body);
  res.json({ message: 'Data received', data: req.body, timestamp: new Date().toISOString() });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Metrics: http://localhost:${PORT}/metrics`);
});

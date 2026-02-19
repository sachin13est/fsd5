import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import os from 'os';

const app = express();
const PORT = 5001;

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from React client
app.use(express.static(join(__dirname, 'client/dist')));

// API Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js Backend!' });
});

// Sample API endpoint - Get user info
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Full Stack Developer'
  });
});

// Sample API endpoint - Get data
app.get('/api/data', (req, res) => {
  res.json({
    items: [
      { id: 1, title: 'Item 1', description: 'First item' },
      { id: 2, title: 'Item 2', description: 'Second item' },
      { id: 3, title: 'Item 3', description: 'Third item' }
    ]
  });
});

// POST endpoint - Create data
app.post('/api/data', (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  res.json({
    success: true,
    message: 'Data created successfully',
    data: newItem
  });
});

// System Info Endpoints
app.get('/api/system/memory/total', (req, res) => {
  const totalMemory = os.totalmem();
  const totalMemoryGB = (totalMemory / (1024 ** 3)).toFixed(2);
  res.json({
    totalMemory,
    totalMemoryGB,
    raw: `${totalMemoryGB} GB`
  });
});

app.get('/api/system/memory/free', (req, res) => {
  const freeMemory = os.freemem();
  const freeMemoryGB = (freeMemory / (1024 ** 3)).toFixed(2);
  const totalMemory = os.totalmem();
  const usagePercent = ((1 - (freeMemory / totalMemory)) * 100).toFixed(2);
  res.json({
    freeMemory,
    freeMemoryGB,
    usagePercent,
    raw: `${freeMemoryGB} GB (${usagePercent}% used)`
  });
});

app.get('/api/system/user', (req, res) => {
  const userInfo = os.userInfo();
  res.json({
    username: userInfo.username,
    uid: userInfo.uid,
    gid: userInfo.gid,
    shell: userInfo.shell,
    homedir: userInfo.homedir
  });
});

app.get('/api/system/cpu', (req, res) => {
  const cpuInfo = {
    arch: os.arch(),
    platform: os.platform(),
    cpus: os.cpus().length,
    model: os.cpus()[0]?.model || 'Unknown',
    speed: os.cpus()[0]?.speed || 0
  };
  res.json(cpuInfo);
});

// All system info in one call
app.get('/api/system/info', (req, res) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  res.json({
    totalMemory: {
      bytes: totalMemory,
      gb: (totalMemory / (1024 ** 3)).toFixed(2)
    },
    freeMemory: {
      bytes: freeMemory,
      gb: (freeMemory / (1024 ** 3)).toFixed(2),
      usagePercent: ((1 - (freeMemory / totalMemory)) * 100).toFixed(2)
    },
    userInfo: os.userInfo(),
    cpu: {
      arch: os.arch(),
      platform: os.platform(),
      cpus: os.cpus().length,
      model: os.cpus()[0]?.model || 'Unknown',
      speed: os.cpus()[0]?.speed || 0
    }
  });
});

// Catch-all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📱 React app available at http://localhost:${PORT}`);
});

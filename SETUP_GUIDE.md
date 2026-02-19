# React + Node.js Full Stack Setup Guide

## Project Structure

```
node.JS/
├── server.js                 # Express backend server
├── package.json             # Backend dependencies
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── App.css         # Component styles
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static files
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   └── eslint.config.js    # ESLint configuration
└── other files...
```

## Installation & Setup

### 1. Install Backend Dependencies

```bash
npm install
```

This installs:

- **express**: Web server framework
- **cors**: Cross-Origin Resource Sharing
- **body-parser**: Parse request bodies
- **concurrently**: Run both servers simultaneously

### 2. Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

This installs:

- **react**: React library
- **react-dom**: React DOM renderer
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: Vite React plugin

## Running the Application

### Option 1: Run Both Backend & Frontend Simultaneously

```bash
npm run dev
```

This will:

- Start Express backend on `http://localhost:5000`
- Start React frontend on `http://localhost:5173` (or next available port)

### Option 2: Run Separately (for development/debugging)

**Terminal 1 - Start Backend:**

```bash
npm run server
```

**Terminal 2 - Start Frontend:**

```bash
npm run client
```

## API Endpoints

### Available Backend Routes:

1. **GET /api/hello**
   - Returns a greeting message
   - Response: `{ message: 'Hello from Node.js Backend!' }`

2. **GET /api/user**
   - Returns sample user information
   - Response: `{ id, name, email, role }`

3. **GET /api/data**
   - Returns a list of items
   - Response: `{ items: [{ id, title, description }] }`

4. **POST /api/data**
   - Create a new item
   - Body: `{ title: string, description: string }`
   - Response: `{ success: true, data: { ...item } }`

## Frontend Features

- **Connected to Backend**: All data fetched from Node.js API
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Beautiful gradient cards and hover effects
- **Form Handling**: Create new items with POST request
- **Real-time Updates**: Items appear immediately after creation
- **Error Handling**: Graceful error messages

## Building for Production

```bash
npm run build
npm run server
```

The backend serves the React build on port 5000.

## Environment Variables

To add environment-specific configurations:

1. Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:5000
PORT=5000
```

2. Update files to use environment variables

## Troubleshooting

### Port Already in Use

Change PORT in `server.js`:

```javascript
const PORT = 3001; // Change from 5000
```

### CORS Errors

CORS is already enabled. If issues persist, check:

- Backend server is running
- API URL is correct in fetch requests

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install

cd client
rm -r node_modules
npm install
cd ..
```

### Vite Port Conflicts

Vite will automatically use the next available port. Check terminal output for the actual port.

## Next Steps

1. **Extend API**: Add more endpoints in `server.js`
2. **Database**: Connect MongoDB, PostgreSQL, or other databases
3. **Authentication**: Add JWT-based authentication
4. **Styling**: Use Tailwind CSS or other CSS frameworks
5. **State Management**: Add Redux or Context API for complex state

Enjoy your full-stack application! 🚀

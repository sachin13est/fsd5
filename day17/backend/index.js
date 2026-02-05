import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 8800;

// Middleware
app.use(express.json());

// Helper function to read users
const readUsers = (callback) => {
    const filePath = path.join(process.cwd(), 'data.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            try {
                callback(null, JSON.parse(data));
            } catch (parseErr) {
                callback(parseErr, null);
            }
        }
    });
};

// Root endpoint
app.get("/", (req, res) => {
    res.json({ 
        message: "Hello World! Welcome to User API", 
        endpoints: [
            "GET /users - Get all users",
            "GET /users/:id - Get user by ID",
            "POST /users - Create a new user",
            "PUT /users/:id - Update user by ID",
            "DELETE /users/:id - Delete user by ID"
        ]
    });
});

// Get all users
app.get("/users", (req, res) => {
    readUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: "Error reading data", details: err.message });
        } else {
            res.json(users);
        }
    });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    readUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: "Error reading data", details: err.message });
        } else {
            const user = users.find(u => u.id == id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: `User with id ${id} not found` });
            }
        }
    });
});

// Create a new user
app.post("/users", (req, res) => {
    const { name, section } = req.body;
    if (!name || !section) {
        return res.status(400).json({ error: "Name and section are required" });
    }

    readUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: "Error reading data", details: err.message });
        } else {
            const newUser = {
                id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
                name,
                section
            };
            users.push(newUser);
            const filePath = path.join(process.cwd(), 'data.json');
            fs.writeFile(filePath, JSON.stringify(users, null, 4), (err) => {
                if (err) {
                    res.status(500).json({ error: "Error saving data", details: err.message });
                } else {
                    res.status(201).json({ message: "User created", user: newUser });
                }
            });
        }
    });
});

// Update user by ID
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, section } = req.body;

    if (!name || !section) {
        return res.status(400).json({ error: "Name and section are required" });
    }

    readUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: "Error reading data", details: err.message });
        } else {
            const userIndex = users.findIndex(u => u.id == id);
            if (userIndex === -1) {
                res.status(404).json({ error: `User with id ${id} not found` });
            } else {
                users[userIndex] = { id: parseInt(id), name, section };
                const filePath = path.join(process.cwd(), 'data.json');
                fs.writeFile(filePath, JSON.stringify(users, null, 4), (err) => {
                    if (err) {
                        res.status(500).json({ error: "Error saving data", details: err.message });
                    } else {
                        res.json({ message: "User updated", user: users[userIndex] });
                    }
                });
            }
        }
    });
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    readUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: "Error reading data", details: err.message });
        } else {
            const userIndex = users.findIndex(u => u.id == id);
            if (userIndex === -1) {
                res.status(404).json({ error: `User with id ${id} not found` });
            } else {
                const deletedUser = users.splice(userIndex, 1);
                const filePath = path.join(process.cwd(), 'data.json');
                fs.writeFile(filePath, JSON.stringify(users, null, 4), (err) => {
                    if (err) {
                        res.status(500).json({ error: "Error saving data", details: err.message });
                    } else {
                        res.json({ message: "User deleted", user: deletedUser[0] });
                    }
                });
            }
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error", details: err.message });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

app.listen(PORT, () => {
    console.log(`✓ Server is running at http://localhost:${PORT}`);
    console.log(`✓ API Documentation at http://localhost:${PORT}/`);
});

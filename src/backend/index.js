// Simple Express backend for Appwrite proxy
import express, { json } from 'express';
import cors from 'cors';
import { Client, Databases, Account } from "appwrite";

const app = express();
app.use(cors());
app.use(json());

// Appwrite client setup (use environment variables in production)
const client = new Client()
  .setEndpoint('VITE_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
  .setProject('VITE_APPWRITE_PROJECT_ID') // Replace with your project ID

const account = new Account(client);

// Example login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const session = await account.createSession(email, password);
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Example register endpoint
app.post('/api/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await account.create('unique()', email, password, name);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

import app from './app.js';
import { connectDb } from './config/db.js';
import { getRequiredEnv, getEnv } from './config/env.js';

async function startServer() {
  try {
    const port = getEnv('PORT', 5000);
    const mongodbUri = getRequiredEnv('MONGODB_URI');
    getRequiredEnv('JWT_SECRET');

    await connectDb(mongodbUri);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();

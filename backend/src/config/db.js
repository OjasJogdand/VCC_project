import mongoose from 'mongoose';

async function connectDb(mongodbUri) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongodbUri);
  console.log(`MongoDB connected: ${mongoose.connection.name}`);
}

export { connectDb };

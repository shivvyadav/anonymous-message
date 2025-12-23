import mongoose from "mongoose";
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};
async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("DATABASE CONNECTION ERROR :", error);
    process.exit(1);
  }
}

export default connectDB;

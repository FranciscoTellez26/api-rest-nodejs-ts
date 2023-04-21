import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void>{
    const DB_URI = <string>process.env.DB_URI;
    await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`);
}


export default dbConnect;
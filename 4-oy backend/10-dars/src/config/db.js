import { connect } from 'mongoose';
import { config } from './index.js';

export async function connectDB() {
    try {
        await connect(config.MONGO_URI);
        console.log('Connected database!')
    } catch (error) {
        console.log('Error on connecting to the database',error)
    }
}
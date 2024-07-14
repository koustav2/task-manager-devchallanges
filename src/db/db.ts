import { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        const instance = await connect(`${process.env.MONGODB_URI}`);
       
        console.log(instance.connection.readyState);
        console.log('Connected to MongoDB');
    } catch (error:any) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
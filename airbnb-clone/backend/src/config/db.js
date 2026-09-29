import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_DB_URL);

        console.log("mongo db connted successfully ");

    } catch (error) {

        console.log("mongo db connection failed");
        console.log(error.message);

        process.exit(1);
    }
};

export default connectDB;
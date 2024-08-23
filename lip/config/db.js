import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://505mazharulislam:sGjPe2Oqo3MOa1yG@cluster0.q8iqg.mongodb.net/myDatabaseName?retryWrites=true&w=majority');
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

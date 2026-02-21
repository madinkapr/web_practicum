import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: Number(process.env.PORT),
    MONGO_URI: String(process.env.MONGO_URI)
};

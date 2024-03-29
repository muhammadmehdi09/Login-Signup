import "dotenv/config";
import cors from "cors";
import express from "express";
import users from "./routes/users.mjs";
import connectDB from "./database/main.mjs";

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/", users);

app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
});

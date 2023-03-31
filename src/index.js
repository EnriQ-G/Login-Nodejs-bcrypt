import express from "express";
import dotenv from "dotenv";
import routerUser from "./routes/user.router.js";

const app = express();
dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API User");
});

app.use("/api/user", routerUser);


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

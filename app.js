import express, { urlencoded } from "express";
import userRouter from "./routes/user.route.js";

const app = new express();

app.use(express.static('public'))
app.use(express.urlencoded())

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", userRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`live at http://localhost:${3000}`);
});

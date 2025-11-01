import express from "express";

const app = new express();

app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log("usernames will be logged here - wip");
});

app.get("/new", (req, res) => {
    res.render("index.html");
});

app.post("/new", (req, res) => {
    console.log("username to be saved: ", req.body.username);
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`live at http://localhost:${3000}`);
});

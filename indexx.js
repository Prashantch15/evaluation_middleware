const express = require("express");
const app = express();
app.use(logger);



app.get("/books", (req, res) => {
    return res.send({ route: "/books" })
});
app.use(checkPermission);

app.get("/libraries", checkPermission, (req, res) => {
    return res.send({ route: "/libraries", permission: true });
});

app.get("/authors", checkPermission, (req, res) => {
    return res.send({ route: "/authors", permission: true })
});

function checkPermission(req, res, next) {
    console.log("before heckPermission");
    next();
    console.log("after heckPermission");
}

function logger(req, res, next) {
    console.log("before logger");
    next();
    console.log("after logger");
}





app.listen(4567, () => {
    console.log("Listening on port 4567");
});
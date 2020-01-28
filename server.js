const express = require("express");
const mysql = require("mysql")
const app = express();
const PORT = 3000;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    port: 3306,
    database: "boozy_buddy"
});

// Middleware
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Database Connection
// =============================================================
connection.connect((err) => {
    if (err) throw err;

    console.log(`Connected to MySQL database as id ${connection.threadId}`);
})

// Routes
// =============================================================
require("./routes/apiRoutes")(app, connection);
require("./routes/htmlRoutes")(app);


// Server Listen
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

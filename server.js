const express = require("express");
const mysql = require("mysql")
const app = express();
const PORT = 3000;
// TODO: SET UP MYSQL CONNECTION OBJECT

// Middleware
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Database Connection
// =============================================================
// TODO: CONNECT TO DATABASE

// Routes
// =============================================================
// TODO: IMPORT ROUTES FILES


// Server Listen
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

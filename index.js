const express = require('express')
const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./biblioteca.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('Error opening database', err.message)
    } else {
        console.log('Connected to the SQLite database.');
    }
})

// Execute a query
// db.serialize(() => {
//     db.each(`SELECT * FROM authors`, (err, row) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log(row); // Assuming your table has columns id and name
//     });
// });





const app = express()



app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/api/authors", (req, res) => {
    db.all("SELECT * FROM authors", [], (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(rows);
    });
})

app.listen(3000, () => {
    console.log("server started on port 3000")
})


// // Close the database
// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Closed the database connection.');
// });
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const path = require("path")

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

app.use(express.static('public'))



// app.get("/books", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/books.html"))
// })

// app.get("/book/:id", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/book.html"))
// })

// app.get("/reader", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/reader.html"))
// })

app.get("/api/book/:id", (req, res) => {
    let query = "SELECT * FROM books WHERE id='" + req.params.id + "'"
    db.get(query, [], (err, row) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(row);
    });
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

// app.get("/author/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/author.html"))
// })

app.get("/api/author/:id", (req, res) => {
    let statement = "SELECT * FROM authors WHERE id=" + req.params.id
    db.all(statement, [], (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(rows);
    })
})

app.get("/api/books/", (req, res) => {
    db.all("SELECT * FROM books", [], (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(rows);
    })
})

app.get("/api/books/:id", (req,res) => {
    const authorId = req.params.id
    const sql = "SELECT * FROM books WHERE authorId=" + authorId
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(rows);
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
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
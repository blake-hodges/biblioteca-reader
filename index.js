const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const Joi = require('joi')
// const { spawn } = require('child_process');

const contactInfoSchema = Joi.object({
    name: Joi.string().min(3).max(30).trim().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    message: Joi.string().min(10).max(500).trim().required()
})



let db = new sqlite3.Database('./biblioteca.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('Error opening database', err.message)
    } else {
        console.log('Connected to the SQLite database.');
    }
})

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'))


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

app.get("/api/translate/:word", (req, res) => {
    let wordToTranslate = req.params.word
    let json = {
                "es": "the translation"
            }
    res.json(json)
    // let dataToSend;
    // const python = spawn('python3', ['./translate.py', wordToTranslate]);

    // python.stdout.on('data', data => {
    //     dataToSend = data.toString();
    //     cleanedString = dataToSend.replace(/\n/g, '');
    //     let json = {
    //         "es": cleanedString
    //     }
    //     res.json(json)
    // })

    // python.stderr.on('data', data => {
    //     console.error(`stderr: ${data}`);
    //     res.send(data)
    // })

    // python.on('exit', code => {
    //     console.log(`child process exited with code ${code}, ${dataToSend}`);
    // })
})

app.post("/api/contact", (req, res) => {
    console.log(req.body)
    let contactInfo = {
        name: req.body.name,
        message: req.body.message,
        email: req.body.email
    }
    const {error, value} = contactInfoSchema.validate(contactInfo);
    
    if (error) {
        console.log(error);
        console.log(error.details[0].message);
        res.status(403).json({"error": error.details[0].message});
        return;
    }
    // If validation passes, proceed with your business logic
    // console.log('Validated data:', value);
    const sql = `INSERT INTO contact (name, email, message) VALUES ('${value.name}', '${value.email}', '${value.message}')`;
    console.log(sql)
    db.run(sql, [], (err) => {
        if (err) {
            console.log(err.message);
            res.status(400).json({"error": "there was an error adding your data to the database"});
        }
        console.log("contact info was saved successfully");
        res.send('Data received');
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(3001, () => {
    console.log("server started on port 3001")
})


// // Close the database on program close
// ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach(signal => process.on(signal, () => {
//     db.close((err) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log('Closed the database connection.');
//     });
// }))

// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Closed the database connection.');
// });

// process.on('SIGINT', () => {
//     db.close((err) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log('Closed the database connection.');
//     });
// });

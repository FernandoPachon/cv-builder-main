const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db');

// Crear tablas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            documento TEXT UNIQUE,
            nombre TEXT,
            email TEXT,
            password TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS resumes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            documento TEXT,
            data TEXT,
            style TEXT
        )
    `);
});

// Subida de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./uploads')){
            fs.mkdirSync('./uploads');
        }
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file.filename });
});

// Registrar usuario
app.post('/register', (req, res) => {
    const { documento, nombre, email, password } = req.body;
    db.run(
        `INSERT INTO users (documento, nombre, email, password) VALUES (?, ?, ?, ?)`,
        [documento, nombre, email, password],
        function(err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ message: "Usuario creado" });
        }
    );
});

// Guardar hoja de vida
app.post('/resume', (req, res) => {
    const { documento, data, style } = req.body;
    db.run(
        `INSERT OR REPLACE INTO resumes (documento, data, style) VALUES (?, ?, ?)`,
        [documento, JSON.stringify(data), style],
        function(err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ message: "Hoja de vida guardada" });
        }
    );
});

// Buscar hoja de vida
app.get('/resume/:documento', (req, res) => {
    db.get(
        `SELECT * FROM resumes WHERE documento = ?`,
        [req.params.documento],
        (err, row) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json(row);
        }
    );
});

app.listen(3001, () => console.log("Servidor en puerto 3001"));

const express = require('express');
const app = express();
const port = 3000;
const OrientDB = require('orientjs');

const server = OrientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'rootpwd',
    useToken: true
});

const db = server.use({
    name: 'datamahasiswa',
    username: 'root',
    password: 'rootpwd',
});


db.exec('CREATE CLASS Mahasiswa IF NOT EXISTS EXTENDS V');
db.exec('CREATE PROPERTY Mahasiswa.id IF NOT EXISTS INTEGER (MANDATORY TRUE)');
db.exec('CREATE PROPERTY Mahasiswa.name IF NOT EXISTS STRING');
db.exec('CREATE PROPERTY Mahasiswa.jurusan IF NOT EXISTS STRING');
db.exec('CREATE PROPERTY Mahasiswa.angkatan IF NOT EXISTS INTEGER');
db.exec('CREATE PROPERTY Mahasiswa.dospem IF NOT EXISTS STRING');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/',async (req, res) => {
    const sql = 'SELECT FROM Mahasiswa';
    const result = await db.query(sql);
    res.render('index', { mahasiswas: result });
});

app.get('/add', (req, res) => {
    res.render('add-Mahasiswa');
});

app.post('/add', async (req, res) => {
    const { name, jurusan, angkatan, dospem } = req.body;
    const sql = 'INSERT INTO Mahasiswa (id, name, jurusan, angkatan, dospem) VALUES (:id, :name, :jurusan, :angkatan, :dospem)';
    const idquery = 'SELECT MAX(id) FROM Mahasiswa';
    const id = await db.query(idquery).then((result) => {
        if (result[0]['MAX'] == null) {
            return 1;
        }
        return result[0]['MAX'] + 1;
    });
    const result = await db.query(sql, { params: { id, name, jurusan, angkatan, dospem } });
    res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE VERTEX FROM Mahasiswa WHERE id = :id';
    const result = await db.query(sql, { params: { id } });
    res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT FROM Mahasiswa WHERE id = :id';
    const result = await db.query(sql, { params: { id } });
    res.render('edit-Mahasiswa', { mahasiswa: result[0] });
});

app.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, jurusan, angkatan, dospem } = req.body;
    const sql = 'UPDATE Mahasiswa SET name = :name, jurusan = :jurusan, angkatan = :angkatan, dospem = : dospem WHERE id = :id';
    const result = await db.query(sql, { params: { id, name, jurusan, angkatan, dospem } });
    res.redirect('/');
});



app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

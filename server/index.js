const express = require("express")
const app = express()
const mysql2 = require("mysql2")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;

const db = mysql2.createPool({
    host: "localhost",
    port: "3310",
    user: "root",
    password: "#J.4u_8*P6i-E2@!",
    database: "banco"
})

app.use(express.json());
app.use(cors());

// Registro

app.post("/register", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, response) => {
                    if (err) {
                        res.send(err)
                    }
                    res.send({ msg: "Cadastrado com sucesso" })
                })
            })

        } else {
            res.send({ msg: "Usuario já cadastrado" })
        }
    })
})


// Login

app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err,result) => {
                if(result){
                    res.send({msg: "Usuario logado com sucesso"})
                } else {
                    res.send({msg: "Senha está incorreta."})
                }
            })
        } else {
            res.send({ msg: "Email não encontrado" })
        }

    })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
})
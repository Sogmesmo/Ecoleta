//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irar fazer operaçoes no bando de dados
const db = new sqlite3.Database("./src/database/detabase.db")

module.exports = db
/*utilizar o objeto de banco de dados, para nossas operaçoes 
db.serialize(() => {
    //com comandos SQL eu vou:
    //1 criar uma tabela com comando sql
    db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
    `)

    //2 inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
   const values = [
    "https://media.jornaldooeste.com.br/1524585206-imagem-release-1266307.jpg",
    "Colectoria",
    "Guilherme Gemballa, Jardim America",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papeis e Papelão"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }
     
    db.run(query, values, afterInsertData)
      

    //3 consultar dados da tabela
    /*db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros:")
        console.log(rows)
    })
*/
    //4 deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [10], function(err){
        if(err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })

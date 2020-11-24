const db = require("../database/index")

class UserController {
    async create (req , res){
        const {firstname, lastname, email} = req.body

           db.query(`INSERT INTO USERS (firstname, lastname, email) VALUES ("${firstname}", "${lastname}", "${email}");`, (err , results , field)=>{
            if(err) throw err

            db.query(`SELECT * FROM USERS WHERE id = "${results.insertId}" ` , (err , results , field)=>{
                if(err) throw err
                
                return res.json(results)
            })
        })

    }

    async index(req , res){
        db.query("SELECT * FROM USERS" , (err , results , field)=>{
            if(err) throw err
            
            return res.json(results)
        })
    
    }
    async show(req , res){
        const {userId} = req.params
        db.query(`SELECT * FROM USERS WHERE id = "${userId}" ` , (err , results , field)=>{
            if(err) throw err
            
            return res.json(results)
        })
    }
    async update(req, res){
        const { userId } = req.params;
        const { firstname, lastname, email } = req.body;

        db.query(`UPDATE USERS SET firstname = "${firstname}", lastname = "${lastname}", email = "${email}" WHERE id = "${userId}"`, (err, results, fields) => {
            if(err) throw err

            db.query(`SELECT * FROM USERS WHERE id = "${userId}" ` , (err , results , field)=>{
                if(err) throw err
                
                return res.json(results)
            })
        })
    }
    async delete(req , res){
        const {userId} = req.params
        db.query(`DELETE FROM USERS WHERE id = "${userId}" ` , (err , results , field)=>{
            if(err) throw err
            
            return res.status(204).send()
        })
}
}
module.exports = new UserController()
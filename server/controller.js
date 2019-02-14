module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getAllUsers().then((response)=> {
            res.send(response)
        })
    },
    createUser: (req, res)=> {
        const dbInstance = req.app.get('db')
        const {name, email} = req.body
        dbInstance.createUser(name, email).then((response) => {
            res.status(201).send(response)
        })
    },
    getOneAccount: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.getSingleUser(id).then((response) => {
            if (response[0]) {
                res.status(200).send(response)
            } else {
                res.sendStatus(404)
            }
        })
    },
    deleteOneAccount: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.deleteUser(id).then((response) => {
            res.status(200).send('Deleted')
        }).catch((err) => {
            console.log(err)
        })
    },
    updateAccount: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        const { name, email } = req.body
        dbInstance.updateUser(id, name, email ).then((response) => {
            res.status(200).send(response)
            console.log(response)
        })
    }
}
const homesDatabase = require("./db.json")
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(homesDatabase)
    },

    deleteHouse: (req, res) => {
        let index = homesDatabase.findIndex(elem => elem.id === +req.params.id)
        homesDatabase.splice(index,1)
        res.status(200).send(homesDatabase)
    },    

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }

        homesDatabase.push(newHouse)
        res.status(200).send(homesDatabase)
        globalId++
    },
    

    updateHouse: (req,res) => {
        let id = req.params.id
        let type = req.body.type

        let index = homesDatabase.findIndex(elem => elem.id === +id)

        if (type === "plus") {
            homesDatabase[index].price += 10000
            res.status(200).send(homesDatabase)
        } else if (type === "minus") {
            homesDatabase[index].price -= 10000
            res.status(200).send(homesDatabase)
        }
    }
}
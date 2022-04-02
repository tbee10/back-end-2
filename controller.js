let houses = require('./db.json')
let globalId = 4

module.exports = {
getAllHouses: (req, res) => {
    res.status(200).send(houses)
},

deleteHouse: (req, res) => {
    const houseToBeDeleted = +req.param.id
    for(let i = 0; i < houses.length; i++) {
        const house = houses[i]
        if(house.id === houseToBeDeleted) {
            houses.splice(i, 1)
            return res.status(200).send(houses)
        }
    }
    res.status(400).send(houses)
},

createHouse: (req, res) => {
    console.log('req.body:', req.body)
    const {address, price, imageURL} = req.body

    const newHouse = {
        address, 
        price,
        imageURL,
    }
    houses.push(newHouse)
    id++
    res.status(200).send(houses)
},

updateHouse: (req, res) => {
    const houseToBeUpdatedID = +req.param.id
    const { type } = req.body
    for(let i = 0; i < houses.length; i++) {
    const house = houses[i]
    if (house.id === houseToBeUpdatedID) {
        if(type === 'plus'){
            if(house[i].price += 10000)
            res.status(200).send(house)
        } else if(type === 'minus'){
            if(houses[i].price -= 10000)
            res.status(200).send(house)
        }
    }   else{
        res.status(400).send(houses)
    }
    }
},
}
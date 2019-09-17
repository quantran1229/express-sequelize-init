// import {
//     sequelize
// } from '../models'

let helloWorld = (req,res) =>
{
    res.status(200).send("Mr Tin has purple lips")
}

module.exports = {
    helloWorld
}
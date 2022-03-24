const express = require('express')

const dogsservice = require('./../services/dogs.service')

const router = express.Router()
const service = new dogsservice()


router.get('/', (req, res) => {
    const dogsservice = service.getList()
    res.status(200).json(dogsservice)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json({
        id,
        name : 'lista perros'
    })
})

router.post('/', (req, res) => {
    const {id,name, lastName, document, numberCell, address} = req.body
    const create = service.create(id,name,lastName,document,numberCell,address)
    res.status(201).json(create)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body
    res.json({
        message : "actulizado",
        data : body,
        id
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    res.json({
        message : "deleted",
        id
    })
})
module.exports = router
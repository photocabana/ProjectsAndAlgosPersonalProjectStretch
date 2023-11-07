const Jewelry = require('../models/jewelry.model')

module.exports = {
    findAllJewelry: (req, res) => {
    Jewelry.find()
        .then((allJewelry) => {
            res.status(200).json({ allJewelry })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in find all controllers', error: err })
        })
    },

    createNewJewelry : (req, res) => {
        console.log(req.body)
    Jewelry.create(req.body)
        .then(newlyCreatedJewelry => {
            res.status(200).json({ newlyCreatedJewelry })
        })
        .catch((err) => {
            // res.status(400).json({ message: 'Something went wrong in create controllers', error: err })
            res.status(400).json(err)
        })
    },

    getOneJewelry : (req, res) => {
    Jewelry.findOne({ _id: req.params.id })
        .then(oneSingleJewelry => {
            res.status(200).json({ oneSingleJewelry })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in find one controllers', error: err })
        })
    },

    updateJewelry : (req, res) => {
    Jewelry.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJewelry => {
            res.status(200).json({ updatedJewelry })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in update controllers', error: err })
        })
    },

    deleteJewelry : (req, res) => {
    Jewelry.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in delete controllers', error: err })
        })
    }
}
const JewelryController = require('../controllers/jewelry.controller')

module.exports = (app) => {
    app.get('/api/jewelry', JewelryController.findAllJewelry)
    app.get('/api/jewelry/:id', JewelryController.getOneJewelry)
    app.post('/api/new', JewelryController.createNewJewelry)
    app.patch('/api/edit/:id', JewelryController.updateJewelry)
    app.delete('/api/delete/:id', JewelryController.deleteJewelry)
}

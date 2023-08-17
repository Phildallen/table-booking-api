const sitesController = require('../controllers/sitesController')

const routes = (app) => {

    app.get('/sites', sitesController.getSites)

}

module.exports = routes
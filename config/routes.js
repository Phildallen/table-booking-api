const sitesController = require('../controllers/sitesController')

const routes = (app) => {

    app.get('/sites', sitesController.getSites)
    app.get('/sites/:siteId', sitesController.getSite)
    app.get('/sites/name/:siteName', sitesController.getSiteByName)
    app.post('/sites', sitesController.addSite)
    app.put('/sites/:siteId', sitesController.amendSite)

    app.get('/midware1', (req,res, next) => {
        console.log('Hello from routes middleware')
        console.log(' The pigsController will be executed next...')
        next()
    },(req,res) => {
        sitesController.getSites(req, res)
    })

}

module.exports = routes
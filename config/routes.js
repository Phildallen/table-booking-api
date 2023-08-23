const sitesController = require('../controllers/sitesController')

const routes = (app) => {

    app.get('/sites', sitesController.getSites)
    app.get('/site/:siteId', sitesController.getSite)
    app.get('/siteName/:siteName', sitesController.getSiteByName)

    app.get('/midware1', (req,res, next) => {
        console.log('Hello from routes middleware')
        console.log(' The pigsController will be executed next...')
        next()
    },(req,res) => {
        sitesController.getSites(req, res)
    })

}

module.exports = routes
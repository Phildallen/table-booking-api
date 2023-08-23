const sitesService = require('../services/sitesService')

const getSites = (req, res) => {
    console.log('Controller: getSites')
    sitesService.getSites().then((allSites) => res.json(allSites))
}

const getSite = (req, res , siteId) => {
    console.log('Controller: getSite')
        sitesService.getSite(req.params.siteId).then((site) => res.json(site))
}

const getSiteByName = (req, res , siteName) => {
    console.log('Controller: getSiteByName')
    sitesService.getSiteByName(req.params.siteName).then((site) => res.json(site))
}


module.exports.getSites = getSites
module.exports.getSite = getSite
module.exports.getSiteByName = getSiteByName

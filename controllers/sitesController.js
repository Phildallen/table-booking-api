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

const addSite = (req, res) => {
    console.log('Controller: addSite')
    const newSite = req.body.site
    console.log(newSite)
    sitesService.addSite(newSite).then((result) => res.json(result))
}

const amendSite = (req, res) => {
    console.log('Controller: amendSite')
    const amendedDetails = req.body.site
    console.log(amendedDetails)
    sitesService.amendSite(req.params.siteId,amendedDetails).then((result) => res.send(result))
}


module.exports.getSites = getSites
module.exports.getSite = getSite
module.exports.getSiteByName = getSiteByName
module.exports.addSite = addSite
module.exports.amendSite = amendSite

const sitesService = require('../services/sitesService')

const getSites = (req, res) => {
    console.log('Controller: getSites')
    sitesService.getSites().then((allSites) => res.json(allSites))
}


module.exports.getSites = getSites

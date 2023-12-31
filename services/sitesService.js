const sitesRepository = require('../repositories/sitesRepository')

const getSites = async () => {
    console.log('Service: getSites')
    return await sitesRepository.getSites()
}

const getSite = async (siteId) => {
    console.log('Service: getSite')
    return await sitesRepository.getSite(siteId)
}

const getSiteByName = async (siteName) => {
    console.log('Service: getSiteByName')
    return await sitesRepository.getSiteByName(siteName)
}

const addSite = async (newSite) => {
    console.log('Service: addSite')
    console.log(newSite)
    // validation here
    return await sitesRepository.addSite(newSite)
}

const amendSite = async (siteId,amendedDetails) => {
    console.log('Service: amendSite')
    return await sitesRepository.amendSite(siteId,amendedDetails)
}

module.exports.getSites = getSites
module.exports.getSite = getSite
module.exports.getSiteByName = getSiteByName
module.exports.addSite = addSite
module.exports.amendSite = amendSite

const sitesRepository = require('../repositories/sitesRepositorie')

const getSites = async () => {
    console.log('Service: getSites')
    return await sitesRepository.getSites()
}


module.exports.getSites = getSites

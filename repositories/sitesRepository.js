const dbService = require('../services/dbService')
const objectId = require('mongodb').ObjectId

let sitesCollection = null
dbService.connectToDB().then((db) => sitesCollection = db.collection('sites'))

const getSites = async () => {
    console.log('Repository: getSites')
    return await sitesCollection.find({}).toArray()
}

const getSite = async (siteId) => {
    console.log('Repository: getSite')
    let id = parseFloat(siteId)
    return await sitesCollection.findOne({"siteId":id})
}
parseFloat()
const getSiteByName = async (siteName) => {
    console.log('Repository: getSiteByName')
    return await sitesCollection.findOne({"siteName":siteName})
}

module.exports.getSites = getSites
module.exports.getSite = getSite
module.exports.getSiteByName = getSiteByName

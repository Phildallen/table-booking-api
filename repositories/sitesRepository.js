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
const getSiteByName = async (siteName) => {
    console.log('Repository: getSiteByName')
    return await sitesCollection.findOne({"siteName":siteName})
}

const addSite = async (newSite) => {
    console.log('Repository: addSite')
    console.log(newSite)
    // let bodyJson = JSON.parse(newSite)
    // return await sitesCollection.insertOne(newSite)
}

module.exports.getSites = getSites
module.exports.getSite = getSite
module.exports.getSiteByName = getSiteByName
module.exports.addSite = addSite

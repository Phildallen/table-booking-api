const dbService = require('../services/dbService')
const objectId = require('mongodb').ObjectId

let sitesCollection = null
dbService.connectToDB().then((db) => sitesCollection = db.collection('sites'))

const getSites = async () => {
    console.log('Repository: getSites')
    return await sitesCollection.find({}).toArray()
}

module.exports.getSites = getSites


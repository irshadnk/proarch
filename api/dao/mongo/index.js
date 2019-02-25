let user = require('../../models/user.model')

let modelsObj = {
    User: user
}

const saveData = async (modelName, data) => {
    try {
        let model = modelsObj[modelName]
        let modelInstance = new model(data);
        let successData = await modelInstance.save();
        return Promise.resolve(successData)
    } catch (e) {
        return Promise.reject(e)
    }
}

const getData = async (modelName, query) => {
    try {
        let model = modelsObj[modelName]
        let data = await model.find(query)
        return Promise.resolve(data)
    } catch (e) {
        return Promise.reject(e)
    }
}


module.exports.saveData = saveData
module.exports.getData = getData
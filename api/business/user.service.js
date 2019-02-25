const mongoDao = require('../dao/mongo')
const constant = require('../common/constant.json');
const country = require('../common/country.json');
const skill = require('../common/skills.json');
/**
 * Method used to add user to the system
 * @param {*Number} userObject 
 * @returns {*Object} dn response
 */
let adduser = async (userObject) => {
    try {
        let response = await mongoDao.saveData(constant.MODEL_TYPES.USER, userObject)
        return Promise.resolve(response)
    } catch (e) {
        return Promise.reject(e)
    }
}

/**
 * Method used to het skills and db from database - Now its hardcoded
 * @param {*Number} userObject 
 * @returns {*Object} dn response
 */

let getSkillsandCountry = async (userObject) => {
    try {
        let response = {country:country.COUNTRIES, 
            skills:skill.SKILLS}
        return Promise.resolve(response)
    } catch (e) {
        return Promise.reject(e)
    }
}

/**
 * Method used to get user from the system and check for authentication
 * @param {*Number} userId 
 * @returns {*Object} dn response
 */
let authenticate = async (userObject) => {
    try {
        let query = { userName: userObject.username }
        let response = await mongoDao.getData(constant.MODEL_TYPES.USER, query)
        if(response[0].password == userObject.password) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(e)
        }
    } catch (e) {
        return Promise.reject(e)
    }
}


module.exports = {
    adduser,
    authenticate,
    getSkillsandCountry
}
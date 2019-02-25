const { userService } = require('../business');
const Response = require('./response/index');

let init = (router) => {
    
    router.route('/register')
    .post(async (req, res) => {
        let response;
        try {
            let user = await userService.adduser(req.body)
            response = new Response(200, "user add successful", user, null)
            res.status(response.code).json(response)
        } catch (e) {
            response = new Response(500, "user add failed", {}, e)
            res.status(response.code).json(response)
        }
    })

    router.route('/login')
    .post(async (req, res) => {
        let response;
        try {
            let user = await userService.authenticate(req.body)
            response = new Response(200, "login successful", user, null)
            res.status(response.code).json(response)
        } catch (e) {
            response = new Response(404, "login failed", {}, e)
            res.status(response.code).json(response)
        }
    })


    router.route('/getSkillsandCountry')
    .get(async (req, res) => {
        let response;
        try {
            let user = await userService.getSkillsandCountry()
            response = new Response(200, "get successful", user, null)
            res.status(response.code).json(response)
        } catch (e) {
            response = new Response(500, "get failed", {}, e)
            res.status(response.code).json(response)
        }
    })

}

module.exports.init = init;
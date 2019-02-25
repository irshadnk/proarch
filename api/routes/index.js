
let userRoute = require('./user.routes')

let init = (router) => {
    userRoute.init(router)
};

module.exports.init = init;
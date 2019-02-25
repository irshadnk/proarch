'use strict';
let env = 'dev';

let props = {
  dev: {
    port: 3002,
     mongodb: "mongodb://localhost:27017/node-dev",
    
  },
  prod: {
    port: 3002,
    mongodb: "mongodb://localhost:27017/node-prod",
  }
};

let setEnv = environment => {
  if (props[environment]) {
    env = environment;
  }
};

let getProps = () => {
  return props[env];
};

module.exports.setEnv = setEnv;
module.exports.getProps = getProps;

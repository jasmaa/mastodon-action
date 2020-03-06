const core = require('@actions/core');
const github = require('@actions/github');

const axios = require('axios');


const clientID = core.getInput('client-id');
const clientSecret = core.getInput('client-secret');

console.log(`Client id: ${clientID}, client secret ${clientSecret}`);

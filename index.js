const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

let instanceURL = core.getInput('mastodon-url');
let token = process.env.TOKEN;

const pushAction = async () => {

    await axios.post(`https://${instanceURL}/api/v1/statuses`,
        {
            status: 'Test status from js',
        },
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
}

pushAction()
    .catch(error => {
        console.error('Could not toot push')
    });
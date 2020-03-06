const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const instanceURL = core.getInput('mastodon-url');
const message = core.getInput('message');
const token = process.env.TOKEN;
const context = github.context;

const pushAction = async () => {

    await axios.post(`https://${instanceURL}/api/v1/statuses`,
        {
            status: `${message}\n${context.payload.head_commit.url}`,
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
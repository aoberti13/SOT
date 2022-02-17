'use strict';
const { response } = require('../../utils/responses');

module.exports.hello = async (event) => {
    const output = {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
    };
    return response(200, output);
};
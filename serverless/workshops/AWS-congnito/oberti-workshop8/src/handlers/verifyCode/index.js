'use strict';
const cognito = require('../../services/cognito');
const { httpResponse } = require('../../services/http');

module.exports.handler = async (event) => {
    const { email, code } = JSON.parse(event.body);

    try {
        //Send to cognito the signup request.
        let result = await cognito.verifyCode(email, code);

        return httpResponse(200, { result });
    } catch (err) {
        console.log('There was an error with verifyCode');
        console.log(err.message);
        return httpResponse(500, { error: err.message });
    }
};

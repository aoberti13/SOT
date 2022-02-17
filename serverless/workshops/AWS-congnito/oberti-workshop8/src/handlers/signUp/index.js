'use strict';
const cognito = require('../../services/cognito');
const { httpResponse } = require('../../services/http');

module.exports.handler = async (event) => {
    const { name, email, password } = JSON.parse(event.body);

    try {
        //Send to cognito the signup request.
        let result = await cognito.signUp(name, email, password);

        //Make response.
        let response = {
            username: result.user.username,
            id: result.userSub,
            sucess: true,
        };

        return httpResponse(200, { result: response });
    } catch (err) {
        console.log('There was an error with signUp');
        console.log(err.message);
        return httpResponse(500, { error: err.message });
    }
};

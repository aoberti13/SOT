'use strict';
const { response } = require('../../utils/responses');

module.exports.sumar = async (event) => {
    try {
        const params = {
            a: event.queryStringParameters.a,
            b: event.queryStringParameters.b
        };

        if (!params.a || !params.b) {
            return response(400, { msg: 'mandame los parametros' });
        };

        if (!/\d/.test(params.a) || !/\d/.test(params.b)) {
            return response(400, { msg: 'a y b deben ser numeros' });
        };

        const resultado = parseInt(params.a) + parseInt(params.b);
        const output = {
            resultado
        };
        return response(200, output);

    } catch (err) {
        return response(500, { msg: err.message });
    }
};
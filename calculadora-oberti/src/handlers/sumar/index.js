'use strict';
const { response } = require('../../utils/responses');

module.exports.sumar = async (event) => {
    try {
        const params = parseInt(event.queryStringParameters);

        if (!params) {
            return response(400, { msg: 'mandame los parametros' });
        };

        const { a, b } = params;

        if (typeof a != 'number' || typeof b != 'number') {
            return response(400, { msg: 'deben ser numeros' });
        };

        const resultado = a + b;
        const output = {
            resultado
        };
        return response(200, output);
    } catch (err) {
        return response(500, { msg: err.message });
    }
};
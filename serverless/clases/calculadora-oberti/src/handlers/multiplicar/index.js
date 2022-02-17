'use strict';
const { response } = require('../../utils/responses');

module.exports.multiplicar = async (event) => {
    try {
        const body = JSON.parse(event.body);

        if (!body || !body.a || !body.b) {
            return response(400, { msg: 'mandame los parametros' });
        };

        const { a, b } = body;

        if (typeof a != 'number' || typeof b != 'number') {
            return response(400, { msg: 'deben ser numeros' });
        };

        const resultado = a * b;
        const output = {
            resultado
        };
        return response(200, output);
    } catch (err) {
        return response(500, { msg: err.message });
    }
};
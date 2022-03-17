'use strict';

const { httpResponse } = require('../../utils/response');

module.exports.handler = async (event) => {
  if (!event.body)
    return httpResponse(400, {
      msg: 'Please send me a valid body',
    });

  const body = JSON.parse(event.body);

  const op1 = Number(body.operando1);
  const op2 = Number(body.operando2);

  if (isNaN(op1) || isNaN(op2) || op2 === 0)
    return httpResponse(400, {
      msg: 'Please send me valid operando1 & operando2 inside body as numbers. Also op2 must not be 0',
    });

  return httpResponse(200, {
    msg: 'Succeed!!!',
    op1,
    op2,
    result: op1 / op2,
  });
};

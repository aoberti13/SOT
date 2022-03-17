'use strict';

const { httpResponse } = require('../../utils/response');

module.exports.handler = async (event) => {
  const op1 =
    event.queryStringParameters &&
    Number(event.queryStringParameters.operando1);
  const op2 =
    event.queryStringParameters &&
    Number(event.queryStringParameters.operando2);

  if (isNaN(op1) || isNaN(op2))
    return httpResponse(400, {
      msg: 'Please send me the params operando1 & operando2 as numbers',
    });

  return httpResponse(200, {
    msg: 'Succeed!!!',
    op1,
    op2,
    result: op1 + op2,
  });
};

const response = (status, body) => {
    return {
        statusCode: status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body, null, 2),
    };
};

module.exports = {
    response,
};
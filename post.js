module.exports = (request, response) => {
    switch (request.url) {
        default:
            response.statusCode = 400;
            response.write(`CANNOT POST ${request.url}`);
            response.end();
    }
}
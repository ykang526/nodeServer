const fs = require("fs");
module.exports = (request, response) => {
    switch (request.url) {
        case "/":
            fs.readFile('./public/index.html', null, function(error, data) {
                if(error) {
                    response.writeHead(404);
                    response.write("File Not Found");
                }
                else{
                    response.write(data);
                }
                response.end();
            });
            break;

        case "download":
        break;

        default:
            response.statusCode = 400;
            response.write(`CANNOT GET WAH ${request.url}`);
            response.end();
    }
}
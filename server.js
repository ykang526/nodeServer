const get = require("./get");
const post = require("./post");

const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");




//references: https://dev.to/alexmercedcoder/basics-of-building-a-crud-api-with-node-no-framework-32c5
//https://usefulangle.com/post/91/nodejs-get-url-parameters
//https://usefulangle.com/post/89/nodejs-routing

const server = http.createServer((request, response) => {

    switch(request.method) {
        case "GET":
            get(request, response);
            break;

        case "POST":
            post(request, response);
            break;



    default:
        response.statusCode = 400;
        response.write("No Response");
        response.end()








    }

});

server.listen(3000, function() {
    console.log("Listeing on port 3000...")
});
const http = require("http");

const server = http.createServer(function(req, res) {
    res.setHeader("Content-Type", "application/json");

    // this is for CORS. We are allowing this response to be sent back to anywhere; Any brower.
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.writeHead(200); //status code HTTP 200/ OK

    //data must be a string
    let dataObj = {"name":"Bob", "title":"worker"};
    let data = JSON.stringify(dataObj);

    //this is what you call in the end to send everything. The data param has to be a string.
    res.end(data);

});

server.listen(3000, function() {
    console.log("Listeing on port 3000...")
});
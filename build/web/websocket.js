/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var path = "ajugendpoint";
var wsUri = "ws://" + document.location.host + document.location.pathname + path;

var ws = new WebSocket(wsUri);

ws.onerror = function(e) {
    alert("Your browser does not support Websocket");
};


ws.onopen = function(e) {
    console.log("connection is open " + e);
};


ws.onmessage = function(e) {
    console.log("message was recieved " + e.data);
    putInWall(e.data);
};

function sendText(message) {
    ws.send(message);
}

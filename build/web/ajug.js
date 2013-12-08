/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("post").addEventListener("click", post, false);

function post(e) {
    var message = document.getElementById("message").value;
    console.log(message);
    putInWall(message);
    sendText(message);
    clean();
}


function putInWall(message) {
    var content = "<label>" + message + "</label><br>";
    document.getElementById("wall").innerHTML += content;
    console.log("js: put in wall " + message);
}

function clean() {
    document.getElementById("message").value = "";
}
endpoint="http://b5d91fb3-ee6e-4581-a393-bdb6ea9445b4.westus.azurecontainer.io/score"
document.getElementById("sub").onclick = function () {

    function reqListener () {
        console.log(this.responseText);
      }      
    const request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.open('POST',endpoint,true);
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.setRequestHeader("Content-Type","application/json");
    data=[{'1',600,'Kharghar',1,0,1,1,1,1,1,0,1,0,0,0,0,1,1}]
    request.send("data");
}

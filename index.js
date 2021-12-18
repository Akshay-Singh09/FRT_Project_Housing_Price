endpoint="http://5e1babb3-0eb4-4612-ba24-bdc675669c12.centralindia.azurecontainer.io/score"
key="lTwfFdamhHoHMPXjCBfg1V93Njs9NlAt"

document.getElementById("sub").onclick = function () {

    function reqListener () {
        console.log(this.responseText);
      }      
    const request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.open('POST',endpoint,true);
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.setRequestHeader("Content-Type","application/json");
    request.setRequestHeader("Authorization","Bearer "+key);
    request.send("{[1,600,'Kharghar',1,0,1,1,1,1,1,0,1,0,0,0,0,1,1]}");
}

function GetIP(){
    fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => {
            document.getElementById("changeME").innerHTML = data.ip;
        })
        .catch(error => {
            console.error("Error Fatching the IP address",error);
        });
}

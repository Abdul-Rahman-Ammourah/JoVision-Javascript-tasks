function GetIP(){
    fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => {
            console.log("Your IP address is:",data.ip);
        })
        .catch(error => {
            console.error("Error Fatching the IP address",error);
        });
}

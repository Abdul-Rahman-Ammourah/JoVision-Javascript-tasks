const myInterval = setInterval(showtime, 1000);

function showtime(){
    const date = new Date();
    document.getElementById("Time").innerHTML = date.toLocaleTimeString();
}

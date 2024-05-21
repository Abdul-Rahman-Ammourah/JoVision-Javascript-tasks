function Sendname(){
    Uname = document.getElementById("Name").value;
    fetch("https://api.agify.io?name="+Uname)
        .then(res => res.json())
        .then(data => {
            
            window.alert("Your name is: "+ Uname +"\n"+ "Your age is: "+ data.age);
        })
        .catch(error => {
            window.alert("Error while fetching",error)
        });
    }
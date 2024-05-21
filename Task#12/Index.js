function Submitdata(){
   const user = {Name : document.getElementById("Name").value,
                    Age : document.getElementById("Age").value,
                    Time: new Date().toLocaleTimeString};

        window.alert("Your Name is: " + user.Name + "\n" + "Your Age is: " + user.Age + "\n" + "Submitted time: " + user.Time);

}
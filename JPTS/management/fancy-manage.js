function fancy(){
    document.getElementById("fancy").style.display= "block";
}

function addOption(){
   var add = window.prompt("write subject");
   if(add == null){
     let nuuli = alert("please write a subject");
   }else if(add == ""){
    alert("please write a subject")
   }else{
    document.getElementById("added").innerHTML= add;
   }
   


}


 
// function settings(){
//   var ever = document.getElementById("everything").style.display= "none";
//   var set = document.getElementById("settings").style.display= "block";

// }


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

function newContent1(){
  var CA = document.getElementById("contentAdder").style.display;
  if( CA ==  "none"){
   document.getElementById("contentAdder").style.display= "block";

   document.getElementById("contentAdder").style.color= "white";

  }else{
   document.getElementById("contentAdder").style.display= "none";


  }

}

function newContent(){
  var CA = document.getElementById("dateT").style.display;
  if( CA ==  "none"){
   document.getElementById("dateT").style.display= "block";
   document.getElementById("contentAdder").style.display= "none";

   document.getElementById("contentAdder").style.color= "blue";

  }else{
   document.getElementById("dateT").style.display= "none";
   document.getElementById("contentAdder").style.display= "none";


  }

}

function next1(){
 document.getElementById("dateT").style.display= "none";

  document.getElementById("contentAdder").style.display= "block";


  var monthA = document.getElementById("monthT").value;

  var dayA = document.getElementById("dayT").value;

  document.getElementById("monthA").innerHTML= monthA;
  document.getElementById("dayA").innerHTML= dayA;

switch (monthA){
  //january -------------F
 case 'january':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'January':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'january ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'January ':  document.getElementById("monthA").innerHTML= monthA;
 break;


 //february ------------
 case 'february':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 29){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'February':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 29){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'february ':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 29){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'February ':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 29){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;



//march --------------
 case 'march':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'March':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'march ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'March ':  document.getElementById("monthA").innerHTML= monthA;
 break;



 //april --------------------
 case 'april':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'April':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'april ':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'April ':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;


 //may -------------------
 case 'may':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'May':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'may ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'May ':  document.getElementById("monthA").innerHTML= monthA;
 break;


 //june--------------------
 case 'june':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'June':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'june ':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'June ':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;


//july -----------------------
 case 'july':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'July':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'july ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'July ':  document.getElementById("monthA").innerHTML= monthA;
 break;


 //august ---------------------
 case 'august':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'August':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'august ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'August ':  document.getElementById("monthA").innerHTML= monthA;
 break;


 // september -------------------------
 case 'september':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'September':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 30){
 alert("not a date")
 document.getElementById("dayT").value= null;
 document.getElementById("dateT").style.display= "block";
 document.getElementById("contentAdder").style.display= "none";
}
break;
case 'september ':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'September ':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 30){
 alert("not a date")
 document.getElementById("dayT").value= null;
 document.getElementById("dateT").style.display= "block";
 document.getElementById("contentAdder").style.display= "none";
}
break;


 //october ------------------------------
 case 'october':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'October':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'october ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'October ':  document.getElementById("monthA").innerHTML= monthA;
 break;


 // november --------------------------
 case 'november':  document.getElementById("monthA").innerHTML= monthA;
  if(dayA > 30){
  alert("not a date")
  document.getElementById("dayT").value= null;
  document.getElementById("dateT").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
 }
 break;
 case 'November':  document.getElementById("monthA").innerHTML= monthA;
 if(dayA > 30){
 alert("not a date")
 document.getElementById("dayT").value= null;
 document.getElementById("dateT").style.display= "block";
 document.getElementById("contentAdder").style.display= "none";
}
break;
case 'november ':  document.getElementById("monthA").innerHTML= monthA;
if(dayA > 30){
alert("not a date")
document.getElementById("dayT").value= null;
document.getElementById("dateT").style.display= "block";
document.getElementById("contentAdder").style.display= "none";
}
break;
case 'November ':  document.getElementById("monthA").innerHTML= monthA;
if(dayA > 30){
alert("not a date")
document.getElementById("dayT").value= null;
document.getElementById("dateT").style.display= "block";
document.getElementById("contentAdder").style.display= "none";
}
break;


 //december ------------------------
 case 'december':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'December':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'december ':  document.getElementById("monthA").innerHTML= monthA;
 break;
 case 'December ':  document.getElementById("monthA").innerHTML= monthA;
 break;

 default:    alert("unknown month")
 document.getElementById("dateT").style.display= "block";
 document.getElementById("monthT").style.color="red";

 document.getElementById("contentAdder").style.display= "none";
;
}
  if(monthA == ""){

    document.getElementById("dateT").style.display= "block";


    document.getElementById("contentAdder").style.display= "none";
  
  }else{
    
  }

  if(dayA == ""){

    document.getElementById("dateT").style.display= "block";
        document.getElementById("dateT").style.color= "red";


    document.getElementById("contentAdder").style.display= "none";
  
  } else if(dayA < 0 ){
    document.getElementById("dayT").value= null;
    document.getElementById("dateT").style.display= "block";
    document.getElementById("dateT").style.color= "red";


    document.getElementById("contentAdder").style.display= "none";
  
  }else if( dayA > 31 || dayA > 100 || dayA > 1000 || dayA > 10000 || dayA > 100000 || dayA > 1000000 || dayA > 100000000000000000000000000000000){
    alert("too much numbers, Having trouble processing😖😖😖")
    document.getElementById("dayT").value= null;
        document.getElementById("dateT").style.color= "red";

    document.getElementById("dateT").style.display= "block";

    document.getElementById("contentAdder").style.display= "none";
  
  }
}
function submitContent(){
  alert("your content has been submitted. please wait a while")

  var headA = document.getElementById("headT").value;
  var writeA = document.getElementById("writeT").value;
  var dateA = document.getElementById("dateT").value;
  var addA = document.getElementById("addT").value;
  
  document.getElementById("writeA").innerHTML="by" + " " + writeA;
  document.getElementById("dateA").innerHTML= "on" + " " + dateA;
  document.getElementById("headA").innerHTML= headA;
  document.getElementById("addA").innerHTML= addA;

  document.getElementById("new").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
  document.getElementById("writeT").value= null;
  document.getElementById("dateT").value= null;
  document.getElementById("headT").value= null;
  document.getElementById("addT").value= null;



  if(writeA == ""){
   
    document.getElementById("new").style.display= "none";
    document.getElementById("contentAdder").style.display= "none";
  }
  if( dateA == ""){
    document.getElementById("new").style.display= "none";
    document.getElementById("contentAdder").style.display= "none";
  }
  if( headA == ""){
    document.getElementById("new").style.display= "none";
    document.getElementById("contentAdder").style.display= "none";
  }
  if( addA == ""){
    alert("processing")
    document.getElementById("new").style.display= "none";
    document.getElementById("contentAdder").style.display= "none";
  }
}
function submitContent1(){
  //content adder and new 
  //------------------------------------------------------------------------------------
  document.getElementById("new").style.display= "block";
  document.getElementById("contentAdder").style.display= "none";
//-------------------------------------------------------------------



// alert("your content has been submitted. please wait a while");
  var hA = document.getElementById("hT").value;
  var timeA = document.getElementById("timeT").value;
  var placeA = document.getElementById("placeT").value;
  var addA = document.getElementById("addT").value;

  document.getElementById("hA").innerHTML= hA;
  document.getElementById("timeA").innerHTML='By' + ' ' + timeA;
  document.getElementById("placeA").innerHTML= "At" + " " + placeA;
  document.getElementById("addA").innerHTML= addA;

 // var Aheight = document.getElementById("addA").style.maxHeight;
//  if(Aheight <= "40px"){
//    document.getElementById("read").style.display= "none";
//  }else{
//    document.getElementById("read").style.display= "flex";
//
//  }

  
}

function cancelContent(){
  document.getElementById("contentAdder").style.display= "none";

}

function profileImg(){
  document.getElementById("body").style.filter= "blur(10px)";
  document.getElementById("prof").style.display= "flex";

}

function unBlur(){
 document.getElementById("body").style.filter="blur(0px)";
  document.getElementById("prof").style.display= "none";


// if (blu == "0px"){
//   document.getElementById("body").style.filter= "blur(0px)";
//   document.getElementById("prof").style.display= "flex";

// }else{
//   document.getElementById("body").style.filter= "blur(10px)";

// }

}
 
// function settings(){
//   var ever = document.getElementById("everything").style.display= "none";
//   var set = document.getElementById("settings").style.display= "block";

// }

//---------------more or less-------------------------------------------------------------------------------------------------------------------------------
function more(){
  document.getElementById("addA").style.maxHeight= "100%";
  document.getElementById("more").style.display= "none";
  document.getElementById("less").style.display= "flex";

}
function less(){
  document.getElementById("addA").style.maxHeight= "40px";
  document.getElementById("more").style.display= "flex";
  document.getElementById("less").style.display= "none";

}
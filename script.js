//your JS code here. If required.
//your JS code here. If required.
function  livetime(){
let date=new Date();
    let time=date.toLocaleTimeString(`en-us`,{hour:'numeric',minute:'numeric',second:'numeric',hour12:true})
    let p_date=date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    document.getElementById("timer").textContent= p_date+", "+time;
    }
function startTimer() {
      livetime();
      setInterval(livetime, 1000); 
    }
     
    window.addEventListener('DOMContentLoaded', startTimer);
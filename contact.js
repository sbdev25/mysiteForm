// when submit and some fields are empty 


//first name & last name & email fecthc DOM
let FN=document.getElementById("firstname");
let LN=document.getElementById("lastname");
let Email=document.getElementById("myemail");

//Query radio fecthc DOM
let red1=document.getElementById("rad1");
let red2=document.getElementById("rad2");

// message and chek Dom
const messg=document.getElementById("messg");
const chekBox=document.getElementById("cheky");
// submition button
let suButton=document.getElementById("submition");

// fn error field 
const ErorFN=document.getElementById("errorFN");
const ErorLN=document.getElementById("errorLN");
const ErorEmail=document.getElementById("errorEmail");
const ErorRad=document.getElementById("errorRad");
const Erormessg=document.getElementById("errorM");
const ErorCheky=document.getElementById("errorCheky");

// message element

const contact=document.getElementById("contact");
const al=document.getElementById("al");


let send;


// function of submit
let info=[];
 suButton.addEventListener("click",function(event){
    info=[];
    event.preventDefault();
   
    
    if(red1.checked && chekBox.checked){
        info.push(FN.value,LN.value,red1.value,Email.value,messg.value,"checkbox is checked");
     
    }else if(red2.checked && chekBox.checked){
        info.push(FN.value,LN.value,red2.value,Email.value,messg.value,"checkbox is checked");
    }else{
        info.push(FN.value,LN.value,Email.value,messg.value,"checkbox is not checked");
    }
    console.log(info);

 
    if(FN.value===""){
       ErorFN.style.display="block" ;
       ErorFN.style.color="red";
    }else{
      ErorFN.style.display="none" ;
    }
    if(LN.value===""){
        ErorLN.style.display="block" ;
        ErorLN.style.color="red";
     }else{
      ErorLN.style.display="none" ;
     }
     if(Email.value==="" ||!Email.value.includes('@')){
        ErorEmail.style.display="block" ;
        ErorEmail.style.color="red";
     }else{
      ErorEmail.style.display="none" ;
     }
     
      if(red1.checked===false && red2.checked===false){
         ErorRad.style.display="block" ;
         ErorRad.style.color="red";
         
      }else{
         ErorRad.style.display="none" ;
      }
    
    let mymessg=messg.value.trim();
     if(mymessg===""){
        console.log("it works");
        Erormessg.style.display="block" ;
        Erormessg.style.color="red";
     }else{
      Erormessg.style.display="none" ;
     }
     if(chekBox.checked===false){
        ErorCheky.style.display="block" ;
        ErorCheky.style.color="red";
     }else{
      ErorCheky.style.display="none" ;
     }
     if(FN.value!="" && LN.value!="" && Email.value!="" &&Email.value.includes('@')===true &&
      (red1.checked===true || red2.checked===true) && mymessg!="" && chekBox.checked===true){
        console.log("is done");
        localStorage.setItem("myinformation",JSON.stringify(info));
        localStorage.getItem("myinformation");
        contact.style.top="20vh";
        al.style.display="block";
        
        
  
        window.scrollTo({
         top: 0,
         behavior: 'smooth' // Optional: Adds smooth scrolling
       });
        
     }

     

     
 })











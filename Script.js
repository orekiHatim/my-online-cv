//EXPERIENCE SCRIPT
const ctn1 = document.querySelector(".ctn1");
const ctn2 = document.querySelector(".ctn2");
const ctn3 = document.querySelector(".ctn3");
const exp = document.querySelector(".exp");

const scroll0 = document.querySelector(".scroll");
const scroll1 = document.querySelector(".scroll1");
const scroll2 = document.querySelector(".scroll2");

ctn1.addEventListener("mouseover", e =>{
    scroll0.style.visibility = "visible";
    scroll1.style.visibility = "hidden";
    scroll2.style.visibility = "hidden";
})

ctn2.addEventListener("mouseover", e =>{
    scroll0.style.visibility = "hidden";
    scroll1.style.visibility = "visible";
    scroll2.style.visibility = "hidden";
})

ctn3.addEventListener("mouseover", e =>{
    scroll0.style.visibility = "hidden";
    scroll1.style.visibility = "hidden";
    scroll2.style.visibility = "visible";
})

exp.addEventListener("mouseleave", e =>{
    scroll0.style.visibility = "hidden";
    scroll1.style.visibility = "hidden";
    scroll2.style.visibility = "hidden";
})

//LOISIR SCRIPT
const bike = document.querySelector(".bike");

bike.addEventListener("mouseenter", e =>{

})

//CONTACT SCRIPT    
const nom = document.querySelector("#input1");
const mail = document.querySelector("#input2");
const msg = document.querySelector("#input3");
const butt = document.querySelector("#butt12");

butt.addEventListener("click", a =>{
    var error = "ERROR: ";
    var err0 = 0;

    //CHECK LENGTH
    if(nom.value.length > 25){
        error = error + "The string length must not be over 25 char!!"
        nom.value = null;
    }
    
    //CHECK NUMBERS
    var num_in = nom.value;
    if(nom.value == 0){
        alert("Votre nom zone is empty!!");
        err0 = 1;
    }
    else if( (num_in.includes("0") == true) || (num_in.includes("1") == true) || (num_in.includes("2") == true) || (num_in.includes("3") == true) || (num_in.includes("4") == true) || (num_in.includes("5") == true) || (num_in.includes("6") == true) || (num_in.includes("7") == true) || (num_in.includes("8") == true) || (num_in.includes("9") == true)){
        error = error + " The string must not contain any numbers!!"
        nom.value = null;
    }
    
    //CHECK MAIL
    var ind_at = mail.value.indexOf("@");
    var ind_com = mail.value.lastIndexOf(".com");
    if(mail.value == 0){
        alert("Votre email zone is empty!!");
        err0 = 1;
    }
    else if( !( ind_at > 1 && (ind_com - ind_at) > 1) ){
        error = error + " / mail must be in this form(example@example.com)";
        mail.value = null;
    }
    
    //CHECK MESSAGE
    if(msg.value == null){
        error = error + " / the message must not be empty!";
        console.log("msg");
    }

    //ERROR    
    if(error != "ERROR: "){
       alert(error);
    }
    else if(err0 == 0){
        if(confirm("Confirmer?")){
            console.log(nom.value);
            console.log(mail.value);
            console.log(msg.value);
        }
        else{
            nom.value = null;
            mail.value = null;
            msg.value = null;
        }
    }

})



function valider(){
    var nom=document.getElementById("nom");
    var crarctereValide=/^[a-zA-Z]+?$/;
    var prenom=document.getElementById("prenom");
    var email=document.getElementById("email"); 
    const emailValide = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var sujet=document.getElementById("sujet");
    var message=document.getElementById("message");
    var c=0;
    if(nom.value==""){
        document.getElementById("erreurnom").innerHTML="le nom est obligatoire";
        c++;
    }
    else if(crarctereValide.test(nom.value)==false){
        document.getElementById("erreurnom").innerHTML="le nom et incorrecte";
        c++;
    }
    if(prenom.value==""){
        document.getElementById("erreurprenom").innerHTML="le prenom est obligatoire";
        c++;
    }
    else if(crarctereValide.test(prenom.value)==false){
        document.getElementById("erreurprenom").innerHTML="le prenom et incorrecte";
        c++;
    }
    if(email.value==""){
        document.getElementById("erreuremail").innerHTML="l'email est obligatoire";
        c++;
    }
    else if(emailValide.test(email.value)==false){
        document.getElementById("erreuremail").innerHTML="l'email est incorrecte";
        c++;
    }
    if(sujet.value==""){
        document.getElementById("erreursujet").innerHTML="le sujet est obligatoire";
        c++;
    }
    else if(crarctereValide.test(sujet.value)==false){
        document.getElementById("erreursujet").innerHTML="le sujet et incorrecte";
        c++;
    }
    if(message.value==""){
        document.getElementById("erreurmessage").innerHTML="s'il vous plait ecrire un message";
        c++;
    }
    else if(message.value.length<20){
        document.getElementById("erreurmessage").innerHTML="s'il vous plait ecrire un message plus longe que ca";
        c++;
    }
    if(c==0){
        alert("votre contenu est bien traiter");
        nom.value="";
        prenom.value="";
        email.value="";
        sujet.value="";
        message.value="";
        document.getElementById("erreurmessage").innerHTML=document.getElementById("erreursujet").innerHTML=document.getElementById("erreuremail").innerHTML=document.getElementById("erreurprenom").innerHTML=document.getElementById("erreurnom").innerHTML="";
    }
    
}

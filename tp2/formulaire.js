function validation(){
  // Méthode ProfAW: faire une validation de tous les champs en une seule fois
  document.getElementById("error").innerHTML = "";
  for(let item of document.querySelectorAll('.inputForm')){
    if(item.value.length < 5 & item.value !== ""){
      // recuperation du label
      var label =   document.querySelector("label[for="+item.id+"]").textContent;
      // ajout du message d'erreur
      document.getElementById("error").innerHTML += ` ${label} Ce champ doit contenir au moins 5 caractères <br/>`;
      // ajout de la classe CSS "display"
      document.getElementById("error").classList.add("display");
      document.getElementById("resultat").classList.remove("display")
    }
    else if (item.value == ""){
      // recuperation du label
      var label =   document.querySelector("label[for="+item.id+"]").textContent;
      // ajout du message d'erreur
      document.getElementById("error").innerHTML += ` ${label} La saisie de ce champ est obligatoire <br/>`;
      
      // ajout de la classe CSS "display"
      document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
    }
  }
  if(document.getElementById("error").innerHTML == ""){
    var fname = document.getElementById("fname").value
    document.getElementById("resultat").innerHTML = `Bienvenue ${fname}`;
    document.getElementById("error").classList.remove("display")
    document.getElementById("resultat").classList.add("display")
  }
}
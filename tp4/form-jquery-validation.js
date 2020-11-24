window.onload = function () {    
    $( document ).ready(function() {
      
        //--------Afficher le nombre de caractères--------//  
        $("#lname").keyup(function() {
            $("#car1").text($(this).val().length + " car.");
        });
        $("#fname").keyup(function() {
            $("#car2").text($(this).val().length + " car.");
        });
        $("#birthdate").keyup(function() {
            $("#car3").text($(this).val().length + " car.");
        });
        $("#address").keyup(function() {
            $("#car4").text($(this).val().length + " car.");
        });
        $("#email").keyup(function() {
            $("#car5").text($(this).val().length + " car.");
        });

        //-------------Afficher latlon-------------// 
        $("#gps").on("click",function(event){
            event.preventDefault();
            getLocation()
            $("#lat").val(position.coords.latitude); 
            $("#lng").val(position.coords.longitude);
        });

        //-------------Form validation $ JSON table-------------// 
        document.querySelector("form").addEventListener("submit", function (event) {
            event.preventDefault();
            if (($("#lname").val() && $("#fname").val() && $("#birthdate").val() && $("#address").val() && $("#email").val())!=""){
                contactStore.add(
                    document.querySelector("#lname").value,
                    document.querySelector("#fname").value,
                    document.querySelector("#birthdate").value,
                    document.querySelector("#address").value,
                    document.querySelector("#email").value
                );
                const contactList = contactStore.getList();
        
                document.querySelector("table tbody").innerHTML = "";
                for (var contact of contactList) {
                    document.querySelector("table tbody").innerHTML += `
                    <tr>
                        <td> ${contact.name}</td>
                        <td> ${contact.firstname}</td>
                        <td> ${contact.date}</td>
                        <td> <a href="https://maps.google.com/?q=${contact.adress}">${contact.adress}</a></td>
                        <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
                    <tr>`;
                }
            }
            else{
                $(".modal-title").text("Erreur");
                $(".modal-body").text("La saisie de tous les champs est obligatoire");
                $('#myModal').modal("show");
            }    
        });
    });
}

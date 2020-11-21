$( document ).ready(function() {
    $("#valider").on("click",function(event){
        event.preventDefault();

        if (($("#lname").val() && $("#fname").val() && $("#birthdate").val() && $("#address").val() && $("#email").val())!=""){
            $(".modal-title").text("Bienvenue " + "" + $("#fname").val());
            var city = $("#address").val();
            $(".modal-body").html(`<a href="https://www.google.com/maps"> 
            <img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">`);
            $('#myModal').modal("show");
        }   
        else {
            $(".modal-title").text("Erreur");
            $(".modal-body").text("La saisie de tous les champs est obligatoire");
            $('#myModal').modal("show");
        }
    });
});
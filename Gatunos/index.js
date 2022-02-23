$(document).ready(function() {
    $("#contact-form").validate({
        rules: {
            rut : {
                required: true,
                minlength: 10
            },
            
            name : {
                required: true,
                minlength: 3
            },
            email : {
                required: true,
                email: true
            },

            rut : {
               required: true,
               rut: true     
            },

            fechanac : {
                required: {
                    depends: function(elem) {
                        return $("#fechanac").val() > 2001
                    }
                },
                number: true,
                min: 0
            },

            phone: {
                required: true,
                number: true,
                min: 18
            },
         
            weight : {
               
            }
        },
    messages:{
            name:{
                required: true,
                minlength: "Por favor Ingrese su nombre, Solo letras",
            },

            rut: {
                required: true,
                number: "Por favor digite solo numeros",
                min: "debe tener 11 caracateres incluido el (-)"
            },

            email: {
                required: true,
                email: "el email debe tener el sigueite formato tipo: abc@domain.info"
            },

            fechanac: {
                required: "Año de nacimiento anterior a 2001"
            },

            telefono: {
                required: true,
                number: "Por favor digite solo numeros"
            },

            weight: {
                required: "People with age over 50 have to enter their weight",
                number: "Please enter your weight as numerical value"
            }
        }
    });
})
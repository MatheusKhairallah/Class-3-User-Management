//Usando variáveis e seletores

/*var name = document.querySelector("#exampleInputName");

var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");

var birth = document.querySelector("#exampleInputBirth");

var country = document.querySelector("#exampleInputCountry");

var email = document.querySelector("#exampleInputEmail");

var password = document.querySelector("#exampleInputPassword");

var photo = document.querySelector("#exampleInputFile");

var admin = document.querySelector("#exampleInputAdmin");*/

//<------------------------------------------------------------------------------------->

//Usando ForEach; If e Else; Json

var fields = document.querySelectorAll("#form-user-create [name]");

var user = {};

fields.forEach(function(field, index) {

    if (field.name == "gender") {

        if (field.checked == true) {

            user[field.name] = field.value;

        }

    } else {

        user[field.name] = field.value;

    }

});

console.log(user);
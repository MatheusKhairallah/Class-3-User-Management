/*Está sendo armazenado dentro da variável "name" o valor da ID ("exampleInputName"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var name = document.querySelector("#exampleInputName");

/*Está sendo armazenado dentro da variável "gender" o ID que está marcado como 
checked ("exampleInputGenderM ou exampleInputGenderF"), que foi procurado e selecionado
pelo querySelector dentro do documento*/
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");

/*Está sendo armazenado dentro da variável "birth" o valor da ID ("exampleInputBirth"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var birth = document.querySelector("#exampleInputBirth");

/*Está sendo armazenado dentro da variável "country" o valor da ID ("exampleInputCountry"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var country = document.querySelector("#exampleInputCountry");

/*Está sendo armazenado dentro da variável "email" o valor da ID ("exampleInputEmail"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var email = document.querySelector("#exampleInputEmail");

/*Está sendo armazenado dentro da variável "password" o valor da ID ("exampleInputPassword"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var password = document.querySelector("#exampleInputPassword");

/*Está sendo armazenado dentro da variável "photo" o valor da ID ("exampleInputFile"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var photo = document.querySelector("#exampleInputFile");

/*Está sendo armazenado dentro da variável "admin" o valor da ID ("#exampleInputAdmin"),
que foi procurada e selecionada pelo querySelector dentro do documento*/
var admin = document.querySelector("#exampleInputAdmin");

//<------------------------------------------------------------------------------------->

//Usando ForEach

var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index) {

    console.log(field.name, index);

});
   var maVariable = 'HelloWorld';
maVariable = 'HelloWorld';

//! egalitélasxiste 
1 == '1'; true
//! egalitéstrcite
'hello' === 'hello'; false


var variable_chaine_de_caractere = "1";

var variable_numerique = 1;
/*
function Somme(valeur1, valeur2) {
    
    var resultat = valeur1+valeur2;

return console.log(" Resultat : "+ resultat);

}

Somme("1", "5");
Somme(1, 5);*/
//-------------------------------------------------------//
/*
var douleurs = prompt("As tu des douleurs");

if (douleurs == "oui") {

    var douleurs = prompt("où a tu des douleurs?");
    if (douleurs == 'gorge') {
        douleurs = prompt('avez-vous de la fèvre?');
        if (douleurs == "oui") {

        } else if (douleurs == 'non') {
            alert('Vous avez un refroidissement');
        }

    }
}*/

var douleurs2 = prompt("As tu des douleurs en particulier ?");
//
if (douleurs2 == "oui") {

    var douleurs = prompt("où est ce que t'as mal?");

    
    if (douleurs2 == 'abdomen') {
        douleurs2 = prompt('avez vous des ballonement où rigidité de abdomen?');
        if (douleurs2 == "oui") {

        }

    } 
}
else if (douleurs2 == "non") {
        douleurs2 = prompt('avez vous des douleurs abdominale et des dhiarées de plus de 3semaines voir 1 mois?');
        alert('Vous avez la maladie du Chron');
    }

//*
var douleurs3 = prompt("As tu un rhume?");
//
if (douleurs3 == "oui") {

   alert('Donc tu as de la fièvre');
}
   else if (douleurs3 == "non") {
    alert('Donc tu a un refroidissement');
}


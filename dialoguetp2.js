alert("Coucou les filles <3 !");
/*
var girls = prompt("Vous allez bien?");
if (girls == 'oui') {

    girls = prompt("sa vous dit de sortir ce soir?");
}
if (girls == 'oui') {

}
else if (girls == "non") {
    alert('pourquoi?');
    girls = prompt('vous voulez pas venir avec moi?');
    if (girls == 'non c\'est pas sa!');
    alert('parceque ont est tous fatigué!');
*/

/*
var bonjour = prompt("Bonjour");
if (bonjour == 'oui') {
    bonjour = alert('Bonjour je suis Naima :D je suis Agent Immobilière et je suis la pour te guider sur AirBnb');
}
bonjour = alert('let\'s go');
if (bonjour = prompt("can you help me please?")) {
}
if (bonjour == 'oui') {
}
if (bonjour = prompt("que-puis je faire pour vous?")) {
}
bonjour = alert('je suis à la recherche d\'un hotel à l\'ile maurice près de la ville de Port-Louis, pour 3 adultes, 2 enfants âgés de 12 ans, pour un budget par nuit de 50euros par nuit');
*/


function dialogue() {
    var bonjour = prompt("bonjour");
    if (bonjour == "bonjour") {
        bonjour = prompt("comment allez vous?");
        if (bonjour == "ca va") {
            bonjour = prompt("D\'accord,veut tu que je me présente?");
            if (bonjour == "oui") {
                alert("Je suis Naima je suis la pour te guider sur AirBnb");
                alert("You are ready? Let's go");
            }
        } else if (bonjour == "ca va pas") {
            alert('ok donc il faut se reposer!');
        }
    }
    else if (bonjour != "bonjour") {
        alert('faux');
    }

}
dialogue();

/*bonjour == prompt("que puis je faire pour vous?");
if (bonjour == "je suis à la recherche d\'un hôtel à l'ile maurice près de la ville de Port-Louis, pour 3 adultes, 2 enfants agés de 12 ans, pour un budget par nuit de 5euros par nuit") {
*/

//


function estMultipleDeTrois(nombre) {
    return nombre % 3 === 0;
  }
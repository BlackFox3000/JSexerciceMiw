var libProd, prxProd;

/**
 * afficher le formulaire.
 */
function afficheForm() {
    var ch='<form>'
        +'<label for="codePostal">Code Postal: </label>'
        +'<input type="text" name="codePostal" id="codePostal" required>'
        +'<br>'
        +'<label for="tel">Numéro de télephone: </label>'
        +'<input type="text" name="tel" id="tel" required>'
        +'<br>'
        +'<label for="mail">mail: </label>'
        +'<input type="text" name="mail" id="mail" required>'
    ;


    document.getElementsByTagName("body")[0].innerHTML=ch;
}

/**
 * La fonction plus(n) permettra d'augmenter la quantité de la ligne n (d'une unité) et
 * réactualisera les montants. Elle sera appelée quand on cliquera sur les boutons +
 * @param n
 * @returns {boolean}
 */
function plus(n){
    return false;
}

/**
 * La fonction moins(n) permettra de diminuer la quantité de la ligne n (d'une unité) et
 * réactualisera les montants. Elle sera appelée quand on cliquera sur les boutons –
 * @param n
 * @returns {boolean}
 */
function moins(n){
    return false;
}

/**
 * La fonction sup(n) effacera les données de la ligne n. Elle sera appelée quand on cliquera sur
 * les boutons x (on ne prévoit pas de remonter les lignes)
 * @param n
 * @returns {boolean}
 */
function sup(n) {
    return false;
}

/**
 * La fonction affMontant() permettra de calculer les 3 montants de la commande et de les
 * afficher.
 * @returns {boolean}
 */
function affMontant() {
    return false;
}

/**
 * La fonction validationCmd() permettra de vérifier si le formulaire a été correctement rempli
 * et affichera éventuellement toutes les erreurs.( Rappel: \n permet un saut à la ligne dans une
 * alerte )
 */
function validationCmd() {
    return false;
}

/**
 * La fonction affLigne(n) permettra d'afficher le prix du produit sélectionné à la ligne n et
 * initialisera la quantité à 1. Les montants seront actualisés. Elle sera appelée chaque fois que
 * les valeurs des listes déroulantes changeront
 * @param n
 */
function affLigne(n) {
    return false;
}

/**
 * Test si code est un code postal composé de 5 chiffres
 * @param code
 * @returns {boolean}
 */
function codePostalIsValide(code) {
    let reg= new RegExp(/^[0-9]{5}/)
    return reg.test(code);
}

/**
 * Test si le N° de téléphone devra être composé de 5 nombres de 2 chiffres séparés par le
 * caractère espace ou le tiret (on ne pourra pas mélanger des espaces et des tirets)
 */
function numTelIsValide(numTel) {
    let reg=new RegExp(/^[0-9]{2}(\s[0-9]{2}){4}$/);
    let reg2=new RegExp(/^[0-9]{2}(-[0-9]{2}){4}$/);
    return (reg.test(numTel) || reg2.test(numTel));
}

/**
 *
 * @param mail
 * @returns {boolean}
 */
function mailIsValide(mail) {
    let reg=new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,4}$/);
    return reg.test(mail);
}
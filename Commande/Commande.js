var libProd=['lait','cereales', 'pancake'], prxProd=[1.70,2.90,4.90];

/**
 * afficher le formulaire.
 */
function afficheForm() {
    let ch='<form name="indentification">'
        +'<label for="nom">Nom: </label>'
        +'<input type="text" name="nom" id="nom" required>'
        +'<label for="prenom">Prénom: </label>'
        +'<input type="text" name="prenom" id="prenom" required>'
        +'<br>'
        +'<label for="adresse">Adresse: </label>'
        +'<input type="text" name="adresse" id="adresse" required>'
        +'<br>'
        +'<label for="codePostal">Code Postal: </label>'
        +'<input type="text" name="codePostal" id="codePostal" required>'
        +'<label for="ville">Ville: </label>'
        +'<input type="text" name="ville" id="ville" required>'
        +'<br>'
        +'<label for="tel">Numéro de télephone: </label>'
        +'<input type="text" name="tel" id="tel" required>'
        +'<label for="mail">mail: </label>'
        +'<input type="text" name="mail" id="mail" required>'
        +'<br> </form>'
    ;

    let menuDeroulant=  '<br><form name="produit" >\n' +generatorListeDeroulante()+'<input name="prix" value=0 readonly>' +
        ' <input type="button" value="+" onclick="plus(document.produit.produits.value)">' +
        ' <input type="button" value="-" onclick="moins(document.produit.produits.value)"> ' +
        '</form>';


    document.getElementsByTagName("body")[0].innerHTML=ch+menuDeroulant;
}

/**
 * La fonction plus(n) permettra d'augmenter la quantité de la ligne n (d'une unité) et
 * réactualisera les montants. Elle sera appelée quand on cliquera sur les boutons +
 * @param n
 * @returns {boolean}
 */
function plus(value) {
    if (Number(document.produit.prix.value).toFixed(2) != 0 && Number(document.produit.prix.value != undefined).toFixed(2)) {
        document.produit.prix.value = Number(prxProd[value] * 1 + document.produit.prix.value * 1).toFixed(2);
    }
}

/**
 * La fonction moins(n) permettra de diminuer la quantité de la ligne n (d'une unité) et
 * réactualisera les montants. Elle sera appelée quand on cliquera sur les boutons –
 * @param n
 * @returns {boolean}
 */
function moins(value) {
    if (document.produit.prix.value*1 > value*1 && document.produit.prix.value!=0) {
        document.produit.prix.value= Number(document.produit.prix.value-prxProd[value]).toFixed(2);
        if( document.produit.prix.value==0 || document.produit.prix.value<0) {
            document.produit.produits.value = -1;
            document.produit.prix.value=0;
        }

    }
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
    //document.produit.prix.value;
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

function generatorListeDeroulante() {
    let menu=
    '    <select id="produits" name="produits" onchange="takePrice(this.value)">\n' +
    '        <option value=-1>----</option>\n';
    for(let i=0; i<libProd.length; i++){
        menu += '<option value="'+i+'">'+libProd[i]+'</option>';
    }

    return menu;
}

/**
 * Place le prix correspondant au produit sélectionner dans la case prix
 * @param value
 */
function takePrice(value) {
   document.produit.prix.value=prxProd[value];
}


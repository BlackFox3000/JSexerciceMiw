class Tpersonne{
    name;
    next;

    constructor(name){
        console.log(! nameIsValid(name));
        if(! nameIsValid(name))
            return false;
        this.name=transformIntoValidFormat(name);
        this.next=null;
    }

    getName(){
        return this.name;
    }
    getNext(){
        return this.next;
    }

    /**
     * Affiche le contenue de l'objet
     */
    list(){
        list(this);
    }

    add(Tnext){
        Tnext.next=this;
    }

}

/**
 *  vérifier que name soit composé de 2 à 20 caractères.
 * @param name
 * @returns {boolean}
 */
function nameIsValid(name){
    return(name.length<21 && name.length>1);
}

/**
 * Transforme le format de name: première lettre en majuscule, les autres en minuscule
 * @param name
 * @returns {string}
 */
function transformIntoValidFormat(name){
    return name.charAt(0).toUpperCase()+name.substr(1).toLowerCase();
}

/**
 * qui affichera tous les noms ( on pourra les concaténer dans une chaine de caractères avant affichage)
 * @returns {boolean}
 */
function list(Tpersonne) {
    let list = '', temp = Tpersonne;
    while (temp != null) {
        list += temp.getName() + ' ';
        temp = temp.getNext();
    }
    document.write(list+'<br>');
}
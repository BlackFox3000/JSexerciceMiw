class Tpersonne {
    #name;
    #next;

    constructor(name) {
        if (!nameIsValid(name))
            return false;
        this.name = transformIntoValidFormat(name);
        this.next = null;
    }

    getName() {
        return this.name;
    }

    getNext() {
        return this.next;
    }

    rename(name) {
        this.name = name;
    }

    list() {
        list(this);
    };

    /**
     * ajout(n) : qui ajoutera le nom n en début de liste (vérifier que n soit composé de 2 à 20 caractères.
     Transformer son format: première lettre en majuscule, les autres en minuscule).
     */
    add(tNext) {
        if (this.getNext() == null)
            this.next = tNext;
        else
            this.getNext().add(tNext);
    }

    /**
     * Suppression(n): qui supprimera le premier nom égal à n dans la liste. Le nom n peut ne pas exister.
     Pour supprimer un objet de la mémoire, il faut supprimer chacune de ses propriétés ou méthodes
     avec l'opérateur delete
     */
    removeAtRank(rank) {
        if(rank==0)
            init(this);
        let list = '', temp = Tpersonne;
        for(let i=0; i!=rank-1; i++){
            if(temp.next == null)
                return true;
            temp = temp.next();
        }

    }

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
    document.write(list);
}

function init(personne){
    while(personneeeeeeeeeee)
    if(personne.getNext==null){
        console.log('suppression de' + personne)
        delete(personne.name);
        delete(personne.next);
    }
    while(personne.getNext!=null){
       init( personne.getNext);
    }

}

/**
 * vérifier que name soit composé de 2 à 20 caractères.
 * @param name
 */
function nameIsValid(name) {
    document.write('<p> Name Is Valide?:<br> name: '+name+' taille: '+name.length);
    return (name.length < 21 || name.length > 1);
}

/**
 * Transforme le format de name: première lettre en majuscule, les autres en minuscule
 * @param name
 */
function transformIntoValidFormat(name) {
    name= name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
    document.write('<br>Transformation format: '+name+'</p>');
    return name;
}

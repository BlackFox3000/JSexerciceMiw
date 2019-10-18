class Tpersonne{
    #name;
    #next;
    constructor(name) {
       this.name=name;
       this.next=null;
    }
    getName(){
        return this.name;
    }
    getNext(){
        return this.next;
    }
    rename(name){
        this.name=name;
    }

    list(){
        list(this);
    };

    /**
     * ajout(n) : qui ajoutera le nom n en début de liste (vérifier que n soit composé de 2 à 20 caractères.
     Transformer son format: première lettre en majuscule, les autres en minuscule).
     */
    add(tNext){
        if(this.getNext()==null)
       this.next=tNext;
        else
            this.getNext().add(tNext);
    }

    remove(name){
        console.log('plus qu\'a faire la function');
    }

}

/**
 * qui affichera tous les noms ( on pourra les concaténer dans une chaine de caractères avant affichage)
 * @returns {boolean}
 */
function list(Tpersonne){
    let list='', temp= Tpersonne;
    while (temp!=null){
        list+=temp.getName()+' ';
        temp=temp.getNext();
    }
    document.write(list);
}

/**
 * Suppression(n): qui supprimera le premier nom égal à n dans la liste. Le nom n peut ne pas exister.
 Pour supprimer un objet de la mémoire, il faut supprimer chacune de ses propriétés ou méthodes
 avec l'opérateur delete
 */
function remove(name) {
    return false;
}


class Tpersonne{
    constructor(name,pNext)
   {
       this.name=name;
       if(pNext!=undefined)
           this.next=pNext;
       else
           this.next=null;
    }

    list(){
        list(this);
    };

}

/**
 * qui affichera tous les noms ( on pourra les concaténer dans une chaine de caractères avant affichage)
 * @returns {boolean}
 */
function list(Tpersonne){
    let list='';
    while (Tpersonne.name!=null){
        list+=Tpersonne.name+' ';
        Tpersonne.name=Tpersonne.next;
    }
    document.write(list);
}

/**
 * ajout(n) : qui ajoutera le nom n en début de liste (vérifier que n soit composé de 2 à 20 caractères.
 Transformer son format: première lettre en majuscule, les autres en minuscule).
 */
function add(tPersonne, tNext){
    Tpersonne.next=tNext
}

/**
 * Suppression(n): qui supprimera le premier nom égal à n dans la liste. Le nom n peut ne pas exister.
 Pour supprimer un objet de la mémoire, il faut supprimer chacune de ses propriétés ou méthodes
 avec l'opérateur delete
 */
function remove() {
    return false;
}
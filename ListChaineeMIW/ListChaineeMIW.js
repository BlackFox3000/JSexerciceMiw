class List{
    name;
    start;

    constructor(name){
        this.name=name;
        this.start=null;
    }

    /**
     * Ajout d'un objet Tpersonne en début de liste
     * @param tPersonne
     */
    add(name){
        let tPersonne=new Tpersonne(name);
        if(this.start==null)
            this.start=tPersonne;
        else{
            tPersonne.add(this.start);
            this.start=tPersonne;
        }
    }


    /**
     * Affiche le contenue de l'objet
     */
    list(){
        let texte= list(this.start);
        document.getElementsByClassName('Liste').innerHTML = texte;
    }

    remove(name){
        let temp=this.start;
        if(this.start.name==name){
            temp=temp.next;
            delete (this.start);
            this.start=temp;

        }
        while(temp.next!=null){
            if(temp.next.name==name){
                //pour le delete
                let trash=temp.next;
                //nécessaire au delete
                temp.next=temp.next.next;
                //optionnel pour le remove
                delete (trash.name);
                delete (trash.next);

            }
            temp=temp.next;
        }
    }

    init(){
        delete(this.start);
        document.getElementsByClassName(this.name).innerHTML ='Liste rénitialisé';
        this.start=null;
    }

}


class Tpersonne{
    name;
    next;

    constructor(name){
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
        console.log(list(this));
    }

    /**
     * Concatène Tnext à this  this+Tnext
     * @param Tnext
     */
    add(Tnext){
        if (this.getNext() == null)
            this.next = Tnext;
        else
            this.getNext().add(Tnext);
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
    return (list+'<br>');
}
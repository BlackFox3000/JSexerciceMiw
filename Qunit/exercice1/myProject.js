/**
 * Les fonctions à tester
 */

/**
 * Le paramètre doit être un objet ayant les propriétés suivantes:
 "forme" : pourra prendre les valeurs suivantes ("Carré", "Rectangle", "Cercle")
 Si la propriété "forme" = "Carré" alors une propriété "coté" indiquera la longueur du côté du carré.
 Si la propriété "forme" = "Rectangle" alors une propriété "longueur" indiquera la longueur du
 rectangle et une propriété "largeur" indiquera la largeur du rectangle.

 Enfin si la propriété "forme" = "Cercle" alors une propriété "rayon" indiquera le rayon du cercle
 La fonction surface(param) retournera la surface de la figure si le paramètre est un objet bien
 structuré et -1 dans le cas contraire.
 */
class Objet{
    forme; //("Carré", "Rectangle", "Cercle")
    cote; //carré
    longueur;//longueur
    largeur;
    rayon;

    /**
     * @param "Carré", "Rectangle", "Cercle"
     * @param coté/rayon/longueur
     * @param largeur
     */
    constructor(forme, param1 , param2){
        //if param1 is not number -> object is not form
        if(typeof(param1)==="number"){
            //if param2 is define and is not number -> object is not form
            if(param2 !== undefined &&  typeof(param2)!=="number")
                return null;
            else{
                if( forme === "Carré" && undefined !== param1)
                {
                    this.forme = forme;
                    this.cote = param1;
                }
                if(forme === "Rectangle" && undefined !== param1 && undefined !== param2)
                {
                    this.forme = forme;
                    this.longueur = param1;
                    this.largeur = param2;
                }
                if(forme === "Cercle" && undefined !== param1)
                {
                    this.forme = forme;
                    this.rayon = param1;
                }
            }
        }
    }


    /**
     * Retourne la surface d'un objet
     * @returns {number}
     */
    surface(){
        if(this.forme === "Carré" && undefined !== this.cote)
            return this.cote*this.cote;
        if(this.forme === "Rectangle" && undefined !== this.largeur && undefined !== this.longueur)
            return this.longueur * this.largeur;
        if(this.forme === "Cercle" && undefined !== this.rayon)
            return this.rayon*this.rayon*Math.PI ;
        return -1;
    }
}

/**
 * @objet param
 */
 function surface(param) {
     console.log(param)
     console.log(param instanceof Objet)
    return param.surface();
}



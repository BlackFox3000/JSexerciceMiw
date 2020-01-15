/**
 * Les fonctions � tester
 */

/**
 * Le param�tre doit �tre un objet ayant les propri�t�s suivantes:
 "forme" : pourra prendre les valeurs suivantes ("Carr�", "Rectangle", "Cercle")
 Si la propri�t� "forme" = "Carr�" alors une propri�t� "cot�" indiquera la longueur du c�t� du carr�.
 Si la propri�t� "forme" = "Rectangle" alors une propri�t� "longueur" indiquera la longueur du
 rectangle et une propri�t� "largeur" indiquera la largeur du rectangle.

 Enfin si la propri�t� "forme" = "Cercle" alors une propri�t� "rayon" indiquera le rayon du cercle
 La fonction surface(param) retournera la surface de la figure si le param�tre est un objet bien
 structur� et -1 dans le cas contraire.
 */
class Objet{
    forme; //("Carr�", "Rectangle", "Cercle")
    cote; //carr�
    longueur;//longueur
    largeur;
    rayon;

    /**
     * @param "Carr�", "Rectangle", "Cercle"
     * @param cot�/rayon/longueur
     * @param largeur
     */
    constructor(forme, param1 , param2){
        //if param1 is not number -> object is not form
        if(typeof(param1)==="number"){
            //if param2 is define and is not number -> object is not form
            if(param2 !== undefined &&  typeof(param2)!=="number")
                return null;
            else{
                if( forme === "Carr�" && undefined !== param1)
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
        if(this.forme === "Carr�" && undefined !== this.cote)
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



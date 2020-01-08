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

    surface(){
        if(this.forme == "Carré" && !undefined(this.cote))
            return this.cote*this.cote;
        if(this.forme == "Rectangle" && !undefined(this.largeur) && !undefined(this.longueur))
            return ;
        if(this.forme == "Cercle" && !undefined(this.rayon))
            return ;
        return -1;
    }
}

/**
 * Écrire la fonction surface(param) qui retournera la surface des formes dont les dimensions seront
 passées dans le paramètre.
 Le paramètre doit être un objet ayant les propriétés suivantes:
 "forme" : pourra prendre les valeurs suivantes ("Carré", "Rectangle", "Cercle")
           Si la propriété "forme" = "Carré" alors une propriété "coté" indiquera la longueur du côté du carré.
           Si la propriété "forme" = "Rectangle" alors une propriété "longueur" indiquera la longueur du
           rectangle et une propriété "largeur" indiquera la largeur du rectangle.
 Enfin si la propriété "forme" = "Cercle" alors une propriété "rayon" indiquera le rayon du cercle
 La fonction surface(param) retournera la surface de la figure si le paramètre est un objet bien
 structuré et -1 dans le cas contraire.
 * @objet param { x, y, z }
 */
 function surface(param) {

}
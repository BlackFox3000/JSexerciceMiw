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

    surface(){
        if(this.forme == "Carr�" && !undefined(this.cote))
            return this.cote*this.cote;
        if(this.forme == "Rectangle" && !undefined(this.largeur) && !undefined(this.longueur))
            return ;
        if(this.forme == "Cercle" && !undefined(this.rayon))
            return ;
        return -1;
    }
}

/**
 * �crire la fonction surface(param) qui retournera la surface des formes dont les dimensions seront
 pass�es dans le param�tre.
 Le param�tre doit �tre un objet ayant les propri�t�s suivantes:
 "forme" : pourra prendre les valeurs suivantes ("Carr�", "Rectangle", "Cercle")
           Si la propri�t� "forme" = "Carr�" alors une propri�t� "cot�" indiquera la longueur du c�t� du carr�.
           Si la propri�t� "forme" = "Rectangle" alors une propri�t� "longueur" indiquera la longueur du
           rectangle et une propri�t� "largeur" indiquera la largeur du rectangle.
 Enfin si la propri�t� "forme" = "Cercle" alors une propri�t� "rayon" indiquera le rayon du cercle
 La fonction surface(param) retournera la surface de la figure si le param�tre est un objet bien
 structur� et -1 dans le cas contraire.
 * @objet param { x, y, z }
 */
 function surface(param) {

}
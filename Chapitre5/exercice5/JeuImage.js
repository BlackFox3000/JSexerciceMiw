class JeuImage {
    constructor(image_path, image_name, vitesse, taille){
        this.name=image_name;
        this.path = image_path;
        this.pos=new Position(0,0);
        //les attributs de dir ne pourront avoir comme valeur uniquement 1 ou -1
        this.dir=new Position(1,1,vitesse);
        this.taille=taille;

    }

    /**
     * affiche l'objet au coordonnées données
     * @param x
     * @param y
     */
    affiche(x,y){
        let css='position: absolute;\n' +
            ' left: '+x+'px;\n' +
            ' top: '+y+'px;' +
            ' width='+this.taille+'px';
        let js='image.deplace()';
        let src=this.path;
        createNodeV3(
            'body',
            0,
            'img',
            ['class','src','style','onclick'],
            [this.name,src,css, js,],
            "mon image");
    }

    /**
     * allez en diaglonale x + y +
     * si x = max.x, x=-x,  obtenir la taille de l'écran : window.innerHeight
     * si y = max.y, y=-y
     */
    deplace(){
        setInterval(() => {
            if(this.directionIsValide())
                this.fixPosition();
            else{
                //modification de la direction
                this.transformDirection();
                this.fixPosition();
            }
        }, 1);
        //on test si la direction est valide
    }

    /**
     * test si la position en fonction de la direction est valide
     */
    directionIsValide(){
        let max_x = window.innerWidth;
        let max_y = window.innerHeight;
        let new_x= this.dir.x*this.dir.vect+this.pos.x;
        let new_y= this.dir.y*this.dir.vect+this.pos.y;
        return (new_x>0 && new_y>0 && new_x<max_x && new_y<max_y );
    }

    /**
     * ajoute la direction à la postion
     */
    fixPosition(){
        this.pos.x += this.dir.x*this.dir.vect;
        this.pos.y += this.dir.y*this.dir.vect;
        let element=_ecn(this.name);
        element[0].style.left=this.pos.x+'px';
        element[0].style.top=this.pos.y+'px';
        console.log(element[0].style.top)
    }

    transformDirection(){
        let max_x = window.innerWidth;
        let max_y = window.innerHeight;
        let new_x= this.dir.x+this.pos.x;
        let new_y= this.dir.y+this.pos.y;

        if(new_x<=0 || new_x>=max_x)
            this.dir.x= -this.dir.x;
        if(new_y<=0 || new_y>=max_y)
            this.dir.y= -this.dir.y;
    }
    efface(){

    }
}
/**
 *  Gestion g�n�ration Grille
 *
 */
function generationGrille(height, length, border) {

    console.log("height:"+height+" length:"+length+" border:"+border)

    //Dimentionement de la grille
    L =(height*length+border*1) ;
    console.log(L)
    document.getElementById('mon_canvas').setAttribute('width',L+'px');
    document.getElementById('mon_canvas').setAttribute('height',L+'px');
    document.getElementById('mon_canvas').style.display="unset";

    //d�finition de la position du canvas
    canvas_x= document.getElementById('mon_canvas').offsetLeft;
    canvas_y = document.getElementById('mon_canvas').offsetTop;

    //Cr�ation de la grille
    var c = document.getElementById("mon_canvas");
     ctx = c.getContext("2d");
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            ctx.strokeStyle = "cadetblue";
            ctx.lineWidth = border;
            ctx.strokeRect(border/2+height*i,border/2+height*j,height,height);
            ctx.fill();
            ctx.stroke();
        }
    }

}

/**
 * Remplis la case avec la forme du joueur
 */
function printCase(Case, player) {
    console.log(player)
    console.log('formP:'+player.form)
    if(player.form==='circle'){
        let center_x = height/2 + border/2 + height*Case.x;
        center_y = height/2 + border/2 + height*Case.y;
        center=new Position(center_x, center_y);
        circle(center, player.color);
        console.log('circle')
    }

    if(player.form==='square'){
        let center_x = height/4+border/2+height*Case.x,
            center_y = height/4+border/2+height*Case.y,
            center=new Position(center_x, center_y);
        square(center, player.color);
        console.log('square')
    }
}

/**
 * Genere les formes
 * @param center
 * @param color
 */
function circle(center,color){
    ctx.beginPath();
    console.log('et voila un jolie cercle: '+center+' de couleur: ' + color)
    ctx.strokeStyle = color;
    ctx.arc(center.x,center.y,form_heigth/2,0,Math.PI*2,true);
    ctx.stroke();
}
function square(center, color) {
    console.log('et voila un jolie carr�: '+center + ' ' +color)
    ctx.strokeStyle = color;
    ctx.strokeRect(center.x,center.y,form_heigth,form_heigth);
}

/**
 *  Gestion Interaction Clic
 *
 */
/**
 *  change de joueur
 */
function playerChange() {
    console.log('playerChange'+(player.id))
    if(players[player.id+1]!==undefined)
        player=players[player.id+1];
    else
        player=players[1]
    console.log('Au tour du joueur n�'+player.id)
}

/**
 * Retourne la case sur laquelle on clic sinon null
 * @param x
 * @param y
 * @returns {Position}
 */
function clicCase(x,y) {
    //Est ce que l'on est sur une bordur?
    x_mod = Math.trunc(x % height);
    y_mod = Math.trunc(y % height);

    // console.log(`x%=${x_mod}; y%=${y_mod}<br> est sur une bordur:`)
    // console.log( !(x_mod<border || y_mod<border) );
    x = Math.trunc(x / height);
    y = Math.trunc(y / height);

    // console.log(`xx=${x}; yy=${y}`)

    if (!(x_mod<border || y_mod<border )){
        return new Position(x,y);
        // tab['x']=x;
        // tab['y']=y;
        // console.log(tab)
        // return tab;
    }
    return false;
}

/**
 * Vérifie si la case est vide
 */
function caseEmpty(x, y, table) {
    console.log(x);
    return (table[x][y]===null);
}

/**
 *  Gestion v�rification grille
 *
 */

/**
 * Detecte si un joueur � gagn�, si oui retourne son id sinon false
 */
function whoWin(table) {
    for(let index=1; index<players.length; index++){
        let joueur = players[index];
        console.log('l id du joueur'+joueur.id)
        result=scoreMorpion(table,score, joueur.id)
        if(result>0){
            console.log("VICTOIRE DU JOUEUR n�:"+joueur.id)
            return joueur.id
        }
        else
            console.log("et sa continue encore encore..score:"+score)
    }
    return false


    //comptabilis� le nombre de fois o� nombCroix "1" sont align�s
    function scoreMorpion(tab,nombCroix, id){
        var i=0, j=0, point=0;
        var d=tab.length;
        var limTab=nombCroix-1;
        var dj= tab[i].length;
        while(i<d && j<dj){
            //document.getElementById('historic').innerHTML += '[i: '+i+' j: '+j+' dj:'+ dj+' ] <br>';
            //si la case vaut id on test
            if(tab[i][j]===id){
                //test si il es possible d'avoir une diagonale droite
                if( j+limTab<dj && i+limTab<d){
                    //test diagonale droite
                    if(diagRithIsValide(tab,i,j,nombCroix,id))
                        point++;
                }
                //test si il es possible d'avoir une diagonale gauche
                if( j-limTab>=0 && i+limTab<d){
                    //test diagonale gauche
                    if(diagLeftIsValide(tab,i,j,nombCroix,id))
                        point++;
                }
                //test si iles possible d'avoir une ligne horizontale
                if( j+limTab<dj ){
                    //tester si ligne horizontale
                    if(lignHorIsValide(tab,i,j,nombCroix,id))
                        point++;
                }
                //test si iles possible d'avoir une ligne verticale
                if( i+limTab<d){
                    //tester si ligne verticale
                    if(lignVerIsValide(tab,i,j,nombCroix,id))
                        point++;
                }
            }
            j++;
            if(j==dj){
                j=0;
                i++;
            }
        }
        // let print='Score: '+point+'';
        // document.getElementById('score').innerHTML = print;
        return point;
    }

    function diagRithIsValide(tab,i,j,nombCroix,id){
        // document.getElementById('result').innerHTML +='Diagonale droite<br>'
        for(let x=1; x<nombCroix; x++){
            //document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+(j+x)+'t:'+tab[i+x][j+x]+']<br>';
            if(tab[i+x][j+x]!=id) {
                // document.getElementById('result').innerHTML += 'diagonale droite:false<br>';
                return false;
            }

        }
        //document.getElementById('result').innerHTML += 'diagonale droite:true<br>';
        return true;
        ///return(tab[i+1][j+1]==1 && tab[i+2][j+2]==1);
    }
    function diagLeftIsValide(tab,i,j,nombCroix,id){
        for(let x=1; x<nombCroix; x++){
            // document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+(j-x)+'t:'+tab[i+x][j-x]+']<br>';
            if(tab[i+x][j-x]!=id){
                // document.getElementById('result').innerHTML += 'diagonale gauche:false<br>';
                return false;
            }
        }
        //document.getElementById('result').innerHTML += 'diagonale gauche:true<br>';
        return true;
        //return(tab[i+1][j-1]==1 && tab[i+2][j-2]==1);
    }
    function lignHorIsValide(tab,i,j,nombCroix,id){
        for(let x=1; x<nombCroix; x++){
            // document.getElementById('result').innerHTML +='[i:'+i+'j:'+(j+x)+'t:'+tab[i][j+x]+']<br>';
            if(tab[i][j+x]!=id) {
                //document.getElementById('result').innerHTML += 'ligne hor:false:tab: '+tab[i][j+x]+' x:'+x+' i:'+i+' j:'+j+'<br>';
                return false;
            }
        }
        // document.getElementById('result').innerHTML += 'ligne hor:true<br>';
        return true;
        //	return(tab[i][j+1]==1 && tab[i][j+2]==1);
    }
    function lignVerIsValide(tab,i,j,nombCroix,id){
        for(let x=1; x<nombCroix; x++){
            // document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+j+'t:'+tab[i+x][j]+']<br>';
            if(tab[i+x][j]!=id){
                // document.getElementById('result').innerHTML += 'ligne ver:false<br>';
                return false;
            }

        }
        //document.getElementById('result').innerHTML += 'ligne ver:true<br>';
        return true;
        //return(tab[i+1][j]==1 && tab[i+2][j]==1);

    }


}

/**
 * debug: whowin
 *
 <h2>Historique des tests:</h2>
 <div id="result"></div>
 <br>
 <h2>Historique parcourt scoreMorpion:</h2>
 <p id="historic"> </p>
**/

/**
 *  genere un morpion
 */
function generate(){
    generationGrille(height,length,border);
    saveGrille(length,height,border,score)
}


function newTable() {
    for (let i = 0; i < length; i++) {
        table[i] = [];
        for (let j = 0; j < length; j++) {
            table[i][j] = null
        }
    }
    console.log(table);
}


function validePlayer(pseudo, form, color, players) {
    if( pseudo === null || pseudo==='' ||
        form === null || form==='' ||
        color === null || color===''
    )
        return false;
    if(players[1] !==undefined){
        if(players[1].color===color && players[1].form ===form || players[1].pseudo===pseudo)
            return false
    }
    console.log("player validate")
    return true;
}


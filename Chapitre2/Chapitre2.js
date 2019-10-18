var exercice=1;


function exercicePrint(n) {
    if(n!==undefined) {
        exercice=parseInt(n);
    }
    var div = '<div class="Exercice"> <div class="inner"> Exercice ' + exercice + '</div>\n' +
        '</div>';
    exercice++;
    document.write(div);
}

//exercice 1:
function nombre(n){
    var reg= new RegExp('^[-+0-9][0-9]+\.?[0-9]+', 'g');
    return(reg.test(n));
}

function entierPositif(n) {
    var reg= new RegExp('^[+]?[0-9]+', 'g');
    return(reg.test(n));
}

function estPair(n) {
    return(n%2===0)
}

function printPair(n){
    if(estPair(n))
        document.write(n+' est pair');
        //alert(n+' est pair');
    else
        document.write(n+' n\'est pas pair');
        //alert(n+' n\'est pas pair');
}

function exercice3(tab) {
    var a=tab[0],b=tab[1],c=tab[2];
    var desctab=desc(tab);
    document.write(printTab(tab)+'<br>');
    document.write('A: '+a+' B: '+b+' C: '+c+' <br>' +
        'Somme: '+ somme(tab)+'<br>' +
        ' Moyenne: '+moyenne(tab)+'<br> '+
        'Le plus grand: '+max(tab)+' et le plus petit: '+ min(tab)+'<br>'+
        'Ordre croissant:'+printTab(desctab));
}

function somme(tab) {
    var somme=0;
    tab.forEach(function (element) {
        somme+=element*1;
    })
    return somme;
}

function moyenne(tab) {
    return (somme(tab)/tab.length);
}

function max(tab) {
    var max=null;
    tab.forEach(function (element) {
        if(element>max)
            max=element;
    })
    return max;
}

function min(tab) {
    var min,first=1;
    tab.forEach(function (element) {
        if(first) {
            min = element;
            first = 0;
        }
        if(element<min && !first)
            min=element;
    })
    return min;
}

function printTab(tab) {
    var tabPrint='[ ';
    tab.forEach(function (element) {
        tabPrint+=element+' ';
    })
    tabPrint+=' ]';
    return tabPrint;
}

function desc(tab) {
    if(tab.length==0)
        return tab;
    var descTab=[];
    //parcourt de la table
  //  document.write('tab: '+printTab(tab)+' <br>tab.length= '+(descTab.length*1+1)+'<br>');
    for(var j=0; j<tab.length; j++) {
        element=tab[j];
       // document.write('element: '+element+'<br>');
       // document.write('desctabLength='+descTab.length+'<br>');
        let length=descTab.length*1+1;
        for(let i=0; i<length; i++) {
            if (descTab.length*1===0) {
                descTab.push(element);

               //  document.write('je suis indéfini: => <br>');
              // document.write('desctab de '+i+'= '+descTab[i]+'<br>');

            } else if (descTab[i] > element) {
                var save;
                do {
               //     document.write('desctab de '+i+'= '+descTab[i]+'<br>');
                     save = descTab[i];
                 //   document.write('save:'+save+'<br>');
                    descTab[i] = element;
                    i++;
                    if(save!=undefined)
                        element=save;
                }
                while (save!=undefined)
            }else if(descTab[i]<element && descTab[i+1]==undefined){
                i++;
                descTab[i]=element;
              //  document.write('desctab de '+i+'= '+descTab[i]+'<br>');
            }

           // document.write('_________________________________________<br>');
        }
    }

    return descTab;
}

function initialisationTab() {

    var i=0, tab=[];
    var entrer=prompt('Entrer un nombre pour ajouter une variable à votre tableau sinon écrire "stop"./n' +
        'Initialisation de la case n°'+i);
    if (entrer !== 'stop') {
        do {
            tab.push(entrer*1);
            i++;
            entrer = prompt('Entrer un nombre pour ajouter une variable à votre tableau sinon écrire "stop"./n' +
                'Initialisation de la case n°' + i);
        } while (entrer !== 'stop')
    }
    return tab;
}

function exercice4(n){
    if(n<0)
        n=-n;
    return n*(n*1+1)/2;
}

function areaSquare(n) {
    return n*n;
}

function areaRectangle(l,L) {
    return l*L;
}

function areaCercle(r) {
    return r*r*3.14;
}

function area(forme) {
    var i=0;
    do {
        var forme = prompt('Quel forme souhaitez vous calculer l\'aire:[ cercle, carré, rectangle,none]');
        if(forme==='carré')
            document.write('L\' aire d\'un carré:'+areaSquare(prompt('Longueur du carré')));
        else if(forme==='rectangle')
            document.write('L\' aire d\'un rectangle  :'+areaRectangle(prompt('Longueur du rectangle'),prompt('Largeur du rectangle')));
        else if(forme==='cercle')
            document.write('L\' aire d\'un cercle :'+areaCercle(prompt('Rayon du cercle')));
        else if(forme==='none')
            document.write('');

        i++;
    }while (i<3);
}

function suiteCarre(min, max) {
    while (min<=max){
        document.write(min+'='+min*min+' ; ');
        min++
    }

}

function suitePair() {
    do{
        document.write('Entrer 2 nombre min et max où min plus petit que max');
        var min=prompt('min'), max=prompt('max');
    }while (min*1>=max*1)
    document.write('<table><tr>')
    while (min<=max){
        if(estPair(min))
            document.write('<td>'+min+'</td>');
        min++
    }
    document.write('</tr></table>');
}

function multipleTab(n){
    var tab= [];
    for(var i=0; i<=10; i++){
        tab.push(i*n);
    }
   return tab;
}

function pushInTable(tab){
    let table='<table><tr>';
    for(let i=0;i<tab.length; i++)
        table +='<td>'+tab[i]+'</td>';
    table+='</tr></table>';
    return table
}

function exercice9() {
    do{
        var n=prompt("Entrer un chiffre entre 2<= et =<9");
    }while (n<2 || 9<n)
    document.write(pushInTable(multipleTab(n)));
}

function WhoIsMaxEnter() {
    var tab=[];
    var reg= new RegExp('^[0-9]+$');
    var element;
    do{
        element=prompt('Exercice 10: entrer stop ou un nombre:');
        console.log(element);
        //test si si ellement est différent de 'stop' et element n'est pas un chiffre
        alert(!reg.test(element))
        if(!reg.test(element)) {
            document.write("Valeur: " + element + " n'est pas valide! regex:"+reg.test(element)+" stop:"+(element==='stop')+'<br>');
            document.write(" condition:"+(element!=='stop' && (!(reg.test(element))))  );
            element='stop';
        }
        alert(element);
        //Si element différent de stop alors c'est un chiffre
        if(element!=='stop')
            //ajout de element dans tab[]
            tab.push(element);
        //Si element==stop, soit l'element rentré n'est pas un chiffre soit on a l'element==stop
    }while (element!=='stop')
    document.write(pushInTable(tab));
    document.write('La valeur maximal est:'+max(tab));

}

function maxi(){
    alert(arguments.length);
}
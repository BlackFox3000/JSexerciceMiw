var exercice=1;


function exercicePrint() {
    var div= '<div class="Exercice"> <div class="inner"> Exercice '+exercice+'</div>\n' +
        '</div>';
    exercice++;
    document.write(div);
}


//exercice 1:
function nombre(n){
    var reg= new RegExp('.+[0-9]+.', 'g');
    return(reg.test(n));
}

function entierPositif(n) {
    var reg= new RegExp('(.([^-][0-9]+).)*', 'g');
    return(reg.test(n));
}

function estPair(n) {
    return(n%2==0)
}

function printPair(n){
    if(estPair(n))
        document.write(n+' est pair');
        //alert(n+' est pair');
    else
        document.write(n+' n\'est pas pair');
        //alert(n+' n\'est pas pair');
}

function exercice3(a,b,c) {
    var tab= [a,b,c];
    var desctab=desc(tab);
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
        tabPrint+=element+' : ';
    })
    tabPrint+=' ]';
    return tabPrint;
}

function desc(tab) {
    if(tab.length==0)
        return tab;
    var descTab=[];
    //parcourt de la table
   // document.write('descde '+printTab(tab)+' <br>');
    tab.forEach(function (element) {
       // document.write('element: '+element+'<br>');

        for(var i=0; i<descTab.length+1; i++) {
            document.write('desctab de '+i+' ; '+descTab[i]+'<br>');

            if (descTab[i] == undefined) {
                var plop=element*1;
                //descTab[i]=8 ;
                document.write('je suis indéfini:'+ element*1);
                document.write('desctab de '+i+' ; '+descTab[i]+'<br>');

            }/* else if (descTab[i] > element) {
                var save=element;
                do {
                     save = descTab[i];
                    document.write('save:'+save+'<br>');
                    descTab[i] = save;
                    i++;
                }
                while (save!=undefined && i<5)
            }*/

          //  document.write('desctab de '+i+' ; '+descTab[i]+'<br>');
        }
    })
    return descTab;
}


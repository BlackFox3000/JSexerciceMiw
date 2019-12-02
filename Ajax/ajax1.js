/**
 * créé une requête http en fonction du navigateur
 * @constructor
 */
function Xhr() {
    let obj = null;
    try {
        obj = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (Error) {
        try {
            obj = new ActiveXObject("MSXML2.XMLHTTP");
        } catch (Error) {
            try {
                obj = new XMLHttpRequest();
            } catch (Error) {
                alert("impossible de créer l\'objet XMLHttpRequest");
            }
        }
    }
    return obj;
}

/**
 * Synchrone
 */
function ajax_synchrone() {
    //création d'une instance de la clasXMLHtpRequest
    let req=new Xhr();
    //récupération du fichier réponse.txt ( en mode sychrone => false / true => Asynchrone )
    req.open("GET","reponse.txt", false);
    req.send(null);

    //récupération du résultat
    let result = document.createTextNode(req.responseText)

    //ajout de la réponse au document
    document.getElementById("resultat").appendChild(result);
    document.getElementsByTagName("a")[0].style.visibility = 'hidden';
}

/**
 * Asynchrhone
 */
function ajax_Asynchrone() {
    //création d'une instance de la clasXMLHtpRequest
    let req=new Xhr();
    
    //Connaitre le changement d'un état de la liaison
    req.onreadystatechange = function(){
        if(req.readyState == 4){
            //effectue une action si changement, ici on récupère la réponse
            alert(req.responseText);
            //récupération du résultat
            let result = document.createTextNode(req.responseText)
            document.getElementById("resultat").appendChild(result);
        }
    }
    //récupération du fichier réponse.txt ( en mode sychrone => false / true => Asynchrone )
    req.open("GET","reponse.txt", true);
    req.send(null);

    //document.getElementsByTagName("a")[0].style.visibility = 'hidden';
}

function exercice_1_html() {
    //création d'une instance de la clasXMLHtpRequest
    let req=new Xhr();

    //Connaitre le changement d'un état de la liaison
    req.onreadystatechange = function(){
        if(req.readyState == 4){
            //effectue une action si changement, ici on récupère la réponse
            //alert(req.responseText);
            //récupération du résultat

            document.getElementById("resultat").innerHTML=req.responseText;
        }
    }
    //récupération du fichier réponse.txt ( en mode sychrone => false / true => Asynchrone )
    req.open("GET","table.html", true);
    req.send(null);

    //document.getElementsByTagName("a")[0].style.visibility = 'hidden';
}

function recup(r) {


    let file= r.getElementsByTagName("client");
    let datas = []
    console.log(file.length)
    for(let num_client=0; num_client<file.length ; num_client++){
        console.log(file[num_client])
         for(let child=0; child<file[num_client].childNodes.length; child++){
             console.log(file[num_client].childNodes[child])
         }
    }


        //on fait une boucle sur chaque élément "donnee" trouvé
        var racine = r.getElementsByTagName("client")[0].documentElement;
    alert(racine.childNodes.length);
    for(let i=0; i<items.length; i++ )
        alert(items[i].firstChild.data)
}


function exercice_1_xml() {
    //création d'une instance de la clasXMLHtpRequest
    let req=new Xhr();

    //Connaitre le changement d'un état de la liaison
    req.onreadystatechange = function(){
        if(this.readyState === this.DONE /* DONE=4*/){
            //récupération du résultat
            let result=recup(this.responseXML)
            document.getElementById("resultat").innerHTML=result;
        }
    }
    //récupération du fichier réponse.txt ( en mode sychrone => false / true => Asynchrone )
    req.open("GET","sourceXML.xml", true);
    req.send(null);

    //document.getElementsByTagName("a")[0].style.visibility = 'hidden';
}
let d=document;

// //[old versions]
// //static ---------------------
// /**
//  *  [old version] Génére un formulaire, V0
//  * @param form
//  */
// function createFormV0(form){
//     let formulaire=d.getElementsByClassName('MonFormulaire')[0];
//     //let formulaire=d.getElementById("test");
//
//     console.log( d.getElementsByClassName('MonFormulaire'));
//     // <label for="isbn">Entrer un numéro ISBN-13</label>
//     let label=d.createElement("label");
//     label.setAttribute("for",'isbn');
//     let text=d.createTextNode("Entrer un numéro ISBN-13");
//     label.appendChild(text);
//     formulaire.appendChild(label);
//
// }
// /**
//  * [old version] Ajoute un élément à un noeud (parent)
//  * @param node_class
//  * @param node_position
//  * @param element_name
//  * @param atribute_name
//  * @param atribut_value
//  * @param text
//  */
// function createNodeV1(node_class,node_position, element_name, atribute_name, atribut_value, text ) {
//     let node=d.getElementsByClassName(node_class)[node_position];
//     //let formulaire=d.getElementById("test");
//
//     console.log( d.getElementsByClassName(node_class)[node_position]);
//     // <label for="isbn">Entrer un numéro ISBN-13</label>
//     let element=d.createElement(element_name);
//     element.setAttribute(atribute_name,atribut_value);
//     let text_stock=d.createTextNode(text);
//     element.appendChild(text_stock);
//     node.appendChild(element);
//
// }
//
// //dynamique sans raccourcie ---------------------
// /**
//  * Ajoute un élément à un noeud (parent)
//  * @param node_class
//  * @param node_position
//  * @param element_name
//  * @param tab_atribute_name
//  * @param tab_atribut_value
//  * @param text
//  */
// function createNodeV2(node_class,node_position, element_name, tab_atribute_name, tab_atribut_value, text ) {
//     //On récupère le noeud parent où l'on ajoutera le noeud
//     // similaire à: let formulaire=d.getElementById("test");
//
//     let node=d.getElementsByClassName(node_class)[node_position];
//     //on créé l'élément
//     //similaire à: <label for="isbn">Entrer un numéro ISBN-13</label>
//     let element = d.createElement(element_name);
//     //on créé et lui ajoute les attributs compris dans tab
//     if(tab_atribute_name !== undefined)
//         for(let i=0; i<tab_atribute_name.length; i++) {
//             element.setAttribute(tab_atribute_name[i], tab_atribut_value[i]);
//         }
//
//     //ajout de texte si définit
//     if(text !=undefined){
//         let text_stock=d.createTextNode(text);
//         element.appendChild(text_stock);
//     }
//
//     //ajoute l'element à la node
//
//     node.appendChild(element);
//
// }
// /**
//  * Génére un formulaire V1
//  * @param name
//  * @param tab_atribute_name
//  * @param tab_atribut_value
//  * @param parent
//  */
// function createFormV2(name,tab_atribute_name, tab_atribut_value,parent) {
//     let element = document.createElement('form');
//     for(let i=0; i<tab_atribute_name.length; i++) {
//         element.setAttribute(tab_atribute_name[i], tab_atribut_value[i]);
//     }
//     //console.log(   d.getElementsByTagName(parent)[0])
//     d.getElementsByTagName(parent)[0].appendChild(element)
// }

//dynamique sans raccourcie ---------------------
/**
 *  Ajoute un élément à un noeud (parent)
 * @param node_class
 * @param node_position
 * @param element_name
 * @param tab_atribute_name
 * @param tab_atribut_value
 * @param text
 */
function createNodeV3(node_class,node_position, element_name, tab_atribute_name, tab_atribut_value, text ) {
    /* On récupère le noeud parent où l'on ajoutera le noeud
     * similaire à: let formulaire=d.getElementById("test");*/
    let node=d.getElementsByClassName(node_class)[node_position];
    /* on créé l'élément
    * similaire à: <label for="isbn">Entrer un numéro ISBN-13</label>*/
    let element = _ce(element_name);
    /* on créé et lui ajoute les attributs compris dans tab */
    if(tab_atribute_name !== undefined)
        for(let i=0; i<tab_atribute_name.length; i++) {
          _sa(tab_atribute_name[i], tab_atribut_value[i], element);
        }
    /* ajout de texte si définit */
    if(text !== undefined)
       _ct(text,element);
    /* ajoute l'element à la node */
    _na(element,node)

}
/**
 * Génére un formulaire
 * @param name
 * @param tab_atribute_name
 * @param tab_atribut_value
 * @param parent
 */
function createFormV3(name,tab_atribute_name, tab_atribut_value,parent) {
    let element = _ce('form');
    for(let i=0; i<tab_atribute_name.length; i++) {
        _sa(tab_atribute_name[i], tab_atribut_value[i],element);
    }
    d.getElementsByTagName(parent)[0].appendChild(element)
}

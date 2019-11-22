/**
 * EXERCICE 2:
 **/
/**
 * Étendre la classe String avec les méthodes suivantes:
 * - left(n) qui extrait les n caractères à gauche d'une chaîne.
 * - right(n) qui extrait les n caractères à droite d'une chaîne.
 * - capitalize() qui met la première lettre d'une chaîne en majuscule et les autres en minuscule.
 * - trim() pour éliminer les espaces en début et fin de chaine
 **/
/**
 * Étendre la classe Array avec la méthode suivante :
 * - merge(t) qui permet de concaténer deux tableaux
 * Exemple : t1=["Thomas","Eric"] t2=["Léo"]
 * t = t1.merge(t2) t et t1 contiendront ["Thomas","Eric","Léo"] et t2 condiendra ["Léo"]
 **/
/**
 * Étendre la classe Number avec la méthode suivante :
 * - p(n) qui calcule un nombre à la puissance n.
 * Exemple: var x=5;
 * alert(x.p(3)) ; // affichera 125
 **/
/**
 * Étendre la classe Node avec les méthodes suivantes:
 **** - changeId(val) qui permet d'initialiser l'attribut id du nœud concerné avec la valeur val, cette
 * méthode retournera le nœud modifié
 * Exemple : $("val1").changeId("val2").changeId("val3")
 * Cette écriture se positionne sur le nœud ayant l'attribut id = "val1" puis change sa valeur en val2
 * puis en val3.
 **** - css(obj) qui permet d'ajouter au nœud concerné les propriétés CSS contenues dans l'objet obj.
 * Exemple: $("val1").css({"height":"60px","color":"green"})
 * Remarque: noeud.style.height="60px"  nœud.style["height"]="60px"
 **/
/**
 Etendre les classes String, Array, Number, Node avec la méthode suivante :
 - extend(obj) qui permet d'étendre les slots de l'objet concerné avec les slots de l'objet obj
 Exemples: String.prototype.extend({
left : function(n) {…},
right : function(n) {…},
 capitalize : function() {….},
trim : function(){….}
 }) ;
 Array.prototype.extend({
merge: function(t) {…},
 }) ;
 Number.prototype.extend({
p : function(n) {…},
 }) ;
 Node.prototype.extend({
changeId : function(val){
},
Chapitre IV : Page 19
css : function(obj) {
},
attrib :function(obj){
}
 })
 Toutes ces méthodes pourraient être ajoutées dans une bibliothèque puis complétée
 **/


String.prototype.left=function(n){return this.substring(n);}
String.prototype.right=function(n){return this.substring((0,n))}
String.prototype.capitalize=function (){return this.charAt(0).toUpperCase()+this.substring(1);};
String.prototype.trim=function () {
    let word=this;
    while(word.charAt(0)==='.'){
        word=word.substring(1);
    }
    //console.log(word.charAt(word.length-1))
    while( word.charAt(word.length-1)==='.'){
        word=word.substring(0,word.length-1);
        //console.log(word);
    }
    return word;
}

Array.prototype.merge=function (t) {
    let tabMerge=this;
    for(let i=0; i<t.length; i++){
        tabMerge[tabMerge.length]=t[i];
    }
    return tabMerge;
};
Number.prototype.p=function (n){
    let  result=this;
    for(let i=0; i<n-1; i++){result*=this}
    return result;
};

Node.prototype.changeId=function (val) {
    this.id=val;
}
Node.prototype.css=function (obj) {
//let objet=obj.split('"');
    console.log(obj)
    for(let i in obj)
        this.style[i]=obj[i];
}

/*
String.prototype.extend({
 left : function(n) {return this.substring(n);},
 right : function(n) {return this.substring((0,n))},
 capitalize : function() {return this.charAt(0).toUpperCase()+this.substring(1);},
 trim : function(){
  let word=this;
  while(word.charAt(0)==='.'){
   word=word.substring(1);
  }
  //console.log(word.charAt(word.length-1))
  while( word.charAt(word.length-1)==='.'){
   word=word.substring(0,word.length-1);
   //console.log(word);
  }
  return word;
 }
}) ;/*
Array.prototype.extend({
 merge: function(t) {…},
}) ;
Number.prototype.extend({
 p : function(n) {…},
}) ;
Node.prototype.extend({
 changeId : function(val){
 },
 Chapitre IV : Page 19
css : function(obj) {
},
attrib :function(obj){
}
})*/
/*****************************************************************************************************************/
/*                                                                                                               */
/*                                Biblioth�que  MIW   version miw V  18 11 2019.js                               */
/*                                R�alis�e dans le cadre des cours Javascript                                    */
/*                                De la Licence Mobilit� Internet & Web   (MIW)                                  */
/*                                                                                                               */
/*                                IUT d'Aix-en-Provence D�partement GEA GAP                                      */
/*                                Site internet de la licence :     www.gap.univ-mrs.fr/miw                      */
/*                                                                                                               */
/*****************************************************************************************************************/

(function(){  // ief  ou fie fonction imm�diatement ex�cut�e.

/******************************************************************************************************/
/***********************  Les expressions r�guli�res    ***********************************************/
/******************************************************************************************************/ 
		Reg = {											               // objet contenant des expressions r�guli�res
			required  :  /.+/,
			alpha     :  /^[a-z ._-]+$/i,
			alphanum  :  /^[a-z0-9 ._-]+$/i,
			digitSign :  /^[-+]?[0-9]+$/,
			digit     :  /^[0-9]+$/,
			nodigit   :  /^[^0-9]+$/,
			number    :  /^[-+]?(\d*\.?\d+|\d+\.?\d*)$/,
			email     :  /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/i,
			phone     :  /^(0|\+33)[1-9]( *[0-9]{2}){4}$/,
			url       :  /^(http|https):\/\/[a-z0-9\-\.\/_]+\.[a-z]{2,3}$/i,       // pour rechercher toutes les occurences de script     			
			cp        :  /^((0[1-9])|([1-8][0-9])|(9[0-8])|(20)|(21))[0-9]{3}$/,
     		Insee     :  /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/i,

		};


/******************************************************************************************************/
/***********************  Les Raccourcis   pour le DOM  ***********************************************/
/******************************************************************************************************/

		_id = 	function(id) 	{return document.getElementById(id);};
		
		_   = 	function(sCss)	{
		             if (document.querySelectorAll(sCss).length==1) { return document.querySelector(sCss);}
			         else return document.querySelectorAll(sCss);
				};

		_tn = 	function(n)    {return document.getElementsByTagName(n);};
		_n  = 	function(n)    {return document.getElementsByName(n);} ;  
		_cf = 	function ()    {return document.createDocumentFragment();};		
		
		_ct =  	function(tx,nodeInsert)	{ let t = document.createTextNode(tx);
										  if (nodeInsert) nodeInsert.appendChild(t);
										  return t;
										};

		_ce = 	function(el,nodeInsert) { let e = document.createElement(el);
										  if (nodeInsert) nodeInsert.appendChild(e);
										  return e;
										};

		_cn = 	function(node,attribut,style,nodeInsert){  // pour cr�er un noeud avec des attributs et des styles ( attributs et style sont des objets )
					let n = _ce(node);
					n.attrib(attribut);
					n.css(style);
					if (nodeInsert) nodeInsert.appendChild(n);
					return n;
				}
			
		_dn = 	function(node){                               // pour supprimer un noeud
					node.parentNode.removeChild(node);
				}

/******************************************************************************************************/
/***********************  Gestion fen�tre   ***********************************************************/
/******************************************************************************************************/
	
		windowWidth = function(){
			if (window.innerWidth)  return window.innerWidth            // tous les navigateurs sauf IE
				else if (document.documentElement.clientWidth)
							return document.documentElement.clientWidth; // IE Strict
				else if (document.body.clientWidth)
							return document.body.clientWidth;            // IE non strict
				else 		retun -1;                              		 // anciens navigateurs
		}

		windowHeight = function(){
			 if (window.innerHeight)   return window.innerHeight;        // tous les navigateurs sauf IE
				else if (document.documentElement.clientHeight)
							return document.documentElement.clientHeight; // IE Strict
				else if (document.body.clientHeight)
							return document.body.clientHeight;           // IE non strict
				else 		return -1;	          						 // anciens navigateurs		  
		}

/******************************************************************************************************/
/*************   Raccourci pour parcourir et traiter les propri�t�s d'un objet  ***********************/
/******************************************************************************************************/		
		_each = function(o,f){                            // f est une fonction Callback c a d une  fonction qui sera d�finie au moment de l'appel de la fonction _each
				for (let i in o){f(i,o[i])}
			}

/******************************************************************************************************/
/***********************  Extension de toutes les classes avec la fonction  extend  *******************/
/******************************************************************************************************/				

		function extend(objDest,objSourc){
			for(var i in objSourc){objDest[i]=objSourc[i]}
		}
					
/******************************************************************************************************/
/***********************  Extension de la classe String  **********************************************/
/******************************************************************************************************/			
				
		extend(String.prototype,{
			left      	: function(n){return this.substring(0,n)},
			right    	: function(n){return this.substring(this.length-n)},
			capitalize	: function() {return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();},
			trim      	: function() {return this.replace(/(^\s*|\s*$)/g,"")
			}
		});
/******************************************************************************************************/
/***********************  Extension de la clase Array   ***********************************************/
/******************************************************************************************************/		
		
		extend(Array.prototype,{
			merge		: 	function(t){ 
							for (let i = 0; i < t.length; i++){
								this.push(t[i]);
							}
							return this;
						}			
		});

	/**
	 * Return la plus grand valeur du tableau ou une erreure si une valeur n'est pas num�rique
	 * @returns {number}
	 */
	Array.prototype.max=function () {
		let max=this[0];
		for(let i=0; i<this.length; i++){
			if(isNaN(this[i]) ){
				console.log('La valeur n� '+i+' n\'est pas un nombre');
				return "";
			}
			if(max<this[i])
				max=this[i];
		}
		return max;
	};
	/**
	 * Return la plus petite valeur du tableau ou une erreure si une valeur n'est pas num�rique
	 * @returns {number}
	 */
	Array.prototype.min=function () {
		let min=this[0];
		for(let i=0; i<this.length; i++){
			if(isNaN(this[i]) ){
				console.log('La valeur n� '+i+' n\'est pas un nombre');
				return "";
			}
			if(min>this[i])
				min=this[i];
		}
		return min;
	};
	/**
	 * Return la valeur moyenne  du tableau ou une erreure si une valeur n'est pas num�rique
	 * @returns {string}
	 */
	Array.prototype.avg=function () {
		let total=this[0], empty=1;
		for(let i=0; i<this.length; i++){
			if(isNaN(this[i]) ){
				console.log('La valeur n� '+i+' n\'est pas un nombre');
				return "";
			}
			total+=this[i];
		}
		return (total/(this.length-empty)).toFixed(2);
	};

/******************************************************************************************************/
/***********************  Extension de la clase Number  ***********************************************/
/******************************************************************************************************/		
		extend(Number.prototype,{
			p 		: 	function(n){ return Math.pow(this,n)}
		});		
/******************************************************************************************************/
/***********************  Extension de la clase Node    ***********************************************/
/******************************************************************************************************/		
		extend(Node.prototype,{
			changeId: function(val){      // permet de changer l'identifiant du noeud
						this.id = val;
						return this;
					},
			css 	: function(obj) {          // permet d'affecter au noeud les propri�t�s de style contenues dans l'objet obj
						for( let i in obj ){
							this.style[i] = obj[i];
						};
						return this;
					},
			attrib 	: function(obj){        // permet d'affecter au noeud les attributs contenus dans l'objet obj
			    		for( let i in obj ){
			    	    	this.setAttribute(i,obj[i])
						};
						return this;
					},
			on 		: function(ev,f){
						  this["on"+ev]=f;
						  return this;
					},
            deleteNode : function(){       // permet de supprimer un noeud
							this.parentNode.removeChild(this);
            		},
			append 	: function(objStr){                    //  permet d'ajouter un noeud element ou un noeud texte au noeud
						if (typeof(objStr)== "string") { this.innerHTML += objStr }
						else { this.appendChild(objStr)}
						return this;
					},
			empty 	: function(){ this.innerHTML="";return this}		//Permet de vider le contenu d'un noeud	
		});	
				
})();

 

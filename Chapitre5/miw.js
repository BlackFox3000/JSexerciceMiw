/**
 * select element by id
 * @param id
 * @returns {HTMLElement}
 * @private
 */
_id=function(id){
    return document.getElementById(id);
};

/**
 *select element by tag name
 * @param name
 * @returns {HTMLCollectionOf<HTMLElementTagNameMap[*]>}
 * @private
 */
_tn=function(name){
     document.getElementsByTagName(name);
};

/**
 * sleect element by name
 * @param name
 * @returns {NodeListOf<HTMLElement>}
 * @private
 */
_n=function(name){
    return document.getElementsByName(name);
};

/**
 * sleect element by class name
 * @param name
 * @returns {NodeListOf<HTMLElement>}
 * @private
 */
_ecn=function(name){
    return document.getElementsByClassName(name);
};

/**
 * select element by id css
 * @param css
 * @returns {NodeListOf<HTMLElementTagNameMap[*]>}
 * @private
 */
_css=function(css){
    return document.querySelectorAll(css)
};

/**
 * create fragment
 * @returns {DocumentFragment}
 * @private
 */
_cf=function(){
    return document.createDocumentFragment();
};

/**
 * create element and in node if defined
 * @param el
 * @param nodeIns
 * @returns { ActiveX.IXMLDOMNode}
 * @private
 */
_ce=function(el, nodeIns){
    let element = document.createElement(el);
    if(nodeIns !==undefined)
        return nodeIns.appendChild(element);
    return element;
};

/**
 * crete text node and in node if defined
 * @param tx
 * @param nodeIns
 * @private
 */
_ct=function(tx, nodeIns){
    let text_stock=document.createTextNode(tx);
    if(nodeIns !== undefined)
        nodeIns.appendChild(text_stock);
    return text_stock;
};

_cn=function(node,attribut,style,nodeIns){
    let newNode= _ce(node);
    newNode.attrib(attribut);
    newNode.css(style);
    if (nodeIns) _na(n,nodeIns)
};

_dn=function(node){
    node.parentNode().removeChild()
};
/**
 * Set atribute to element
 * @param name
 * @param value
 * @param element
 * @private
 */
_sa=function (name,value,element) {
    element.setAttribute(name, value)
};

/**
 * appendChild: element to node
 * @param element
 * @param node
 * @private
 */
_na=function (element, node) {
    node.appendChild(element);
};
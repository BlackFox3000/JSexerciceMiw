//exercice 1:
function nombre(n){
    var reg= new RegExp('.+[0-9]+.', 'g');
    return(reg.test(n));
}

function entierPositif(n) {
    var reg= new RegExp('(.([^-][0-9]+).)*', 'g');
    return(reg.test(n));
}
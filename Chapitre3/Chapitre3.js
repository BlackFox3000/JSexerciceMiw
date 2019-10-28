function MapExo(){
    let map=''
    for(let i=1; i<=arguments[0]; i++){
        map+='<input type="button" onclick="window.open(\'./exercice'+i+'/Exercice'+i+'.html\')" value="Exercice'+i+'">'

    }
    return map;
}
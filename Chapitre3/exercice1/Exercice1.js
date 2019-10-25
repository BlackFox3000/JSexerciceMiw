function reset() {
    document.getElementById('zone').value='';
    document.getElementById('text').value='';
}

function longueur() {
    let text=document.getElementById('zone').value;
    console.log(text);
    text=text.replace('\n',"");
    console.log(text);
    document.getElementById('text').value=text.length;;
}
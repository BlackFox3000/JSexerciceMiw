function savePlayers(value) {
  localStorage.setItem('playersStock', JSON.stringify(value));
}
function saveTable(value) {
    localStorage.setItem('table', JSON.stringify(value));
}

function getPlayers() {
    return  JSON.parse(localStorage.getItem('playersStock'));
}
function getTable() {
    return  JSON.parse(localStorage.getItem('table'));
}

function saveLength(value) {
    localStorage.setItem('length', value);
}
function saveHeight(value) {
    localStorage.setItem('height', value);
}
function saveBorder(value) {
    localStorage.setItem('border', value);
}
function saveScore(value) {
    localStorage.setItem('score', value);
}
function saveActif(value) {
    localStorage.setItem('actif', value);
}
function saveWinner(value) {
    localStorage.setItem('winner', value);
}


function saveGrille(length,height,border,score) {
     saveLength(length)
     saveHeight(height)
     saveBorder(border)
     saveScore(score)
}

function getWinner() {
    return localStorage.getItem('winner');
}

function getSaves() {
    length = localStorage.getItem('length');
    height = localStorage.getItem('height');
    border = localStorage.getItem('border');
    form_heigth = height / 2;
    score = localStorage.getItem('score');
    if(localStorage.getItem('id')!=null)
        id = localStorage.getItem('id');
    players = getPlayers();
    winner = getWinner();
    if(localStorage.getItem('actif')!=null && players != null){
        player=players[localStorage.getItem('actif')];
    document.getElementById('player_actif').innerHTML = player.pseudo;}
}

function loadPlayers() {
    console.log('reset players')
    console.log(players)
    if(players!=null)
    for(let i=1; i<players.length; i++){
        document.getElementById("listPlayer").innerHTML +="- "+players[i].pseudo+' - '+players[i].form+' '+
            players[i].color+' -score:<span id=\'score_'+players[i].pseudo+'\'>'+players[i].score+'</span><br>';
   }
}

function loadTable() {
    table=getTable();
    if(table!=null)
    for(let i=0; i<table.length; i++){
        for(let j=0;j<table[i].length ; j++){
            if(table[i][j]!= null){
                printCase(new Position(i,j) , players[table[i][j]] );
            console.log('print'+i+':'+j)}
        }
    }
}
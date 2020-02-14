function savePlayers() {
    
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

function saveGrille(length,height,border,score) {
     saveLength(length)
     saveHeight(height)
     saveBorder(border)
     saveScore(score)
}
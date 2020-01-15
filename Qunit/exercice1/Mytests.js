/**
 * tests à effectuer
 * */

//exemple fonction booleen
// QUnit.test("fonction testée: mD3()", function(assert) {
//     assert.ok(mD3(0), '0 est un nombre multiple de 3');
//     assert.ok(mD3 (3), '3 est un nombre multiple de 3');
//     assert.ok(mD3 (6), '6 est un nombre multiple de 3');
//     assert.ok(!mD3 (5), '5 n\'est pas multiple de 3');
//     assert.ok(!mD3("essai"),' essai n\'est pas un multiple de 3');
//
// });
carre = new Objet("Carré", 5);
carre_neg = new Objet("Carré", -5);
carre_text = new Objet("Carré", "ihoihoi")

cercle = new Objet("Cercle",5)
rect = new Objet("Rectangle", 5, 10)

//Test résultat numérique
QUnit.test("fonction testée: carreNombre()", function(assert){
    assert.equal(carre.surface(),25, '25 surface de carré de 5');
    assert.equal(carre_neg.surface(),25, '25 surface de carré de -5');
    assert.equal(carre_text.surface(),-1, 'Param: Pas un nombre');
    assert.equal(surface(carre),25, '25 surface de carré de 5');
    assert.equal(surface(rect),50, '50 surface de carré de 5');
    assert.equal(surface(cercle),5*5*Math.PI, '25 surface de carré de 5');
    assert.equal(surface({"forme":"Rectangle","longueur":100,"largeur":50}),500, '25 surface de carré de 5');

})






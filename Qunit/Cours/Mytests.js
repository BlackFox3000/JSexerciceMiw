/**
 * tests à effectuer
 * */

//exemple fonction booleen
QUnit.test("fonction testée: mD3()", function(assert) {
    assert.ok(mD3(0), '0 est un nombre multiple de 3');
    assert.ok(mD3 (3), '3 est un nombre multiple de 3');
    assert.ok(mD3 (6), '6 est un nombre multiple de 3');
    assert.ok(!mD3 (5), '5 n\'est pas multiple de 3');
    assert.ok(!mD3("essai"),' essai n\'est pas un multiple de 3');

});


//exemple d'autres fonctions
QUnit.test("fonction testée: carreNombre()", function(assert){
    assert.equal(carreNombre(5),25, '25 carré de 5');
    assert.equal(carreNombre(-5),25, '25 carré de -5');
    assert.equal(carreNombre("ddd"),-1, 'Param: Pas un nombre');
})

//structures de données
QUnit.test("fonction testée: puissanceNombre()", function(assert){
    assert.deepEqual(puissanceNombre(5),
        {"n":5,"P2":25,"P3":125,"P4":625}, 'On obtient les puissances de 5');
    assert.deepEqual(puissanceNombre(-5), {"n":-5,"P2":25,"P3":-
            125,"P4":625}, 'On obtient les puissances de 5');
    assert.deepEqual(puissanceNombre("ddd"),{"n":"ddd","P2":-1,"P3":-
            1,"P4": -1}, 'Param: Pas un nombre');
})



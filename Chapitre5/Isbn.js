class Isbn{

    /**
     * affiche le formulaire pour un numero isbn au coordonnée x,y
     * @param x
     * @param y
     */
    dysplay(x,y){

        let onclick_contain='document.MonFormulaire.result.value=(isbn_object.verif(document.forms[0][0].value));';//"console.log(isbn);document.MonFormulaire.result.value=(form.verif(document.forms[0][0].value))";
        let form='MonFormulaire';
        let css='    position: absolute;\n' +
                ' left: '+x+'px;\n' +
                '    top: '+y+'px;';

        createFormV3(form,['name','class','id','style'],[form, form,'test',css],'body')
        createNodeV3(form,0,'label',['for'],['isbn'],"ISBN-13");
        createNodeV3(form,0,'input',['id','type'],['isbn',"text"]);
        createNodeV3(form,0,'br');
        createNodeV3(form,0,'input',['name','type','readonly'],['result','text']);
        createNodeV3(form,0,'input',['type','value','onclick'],['button','OK',onclick_contain]);
    }




    /**
     * Test si isbn est valide
     * @returns {string}
     */
     verif(isbn){
        if(isbn == '')
            return 'Saisir un numéro ISBN'
        if(! this.conformeISBN(isbn))
            return 'ISBN non conforme';
        if(! this.valideISBN(isbn))
            return  'ISBN non valide';
        return 'ISBN valide'
    }

    /**
     * Vérifie qu'un isbn est conforme
     * @param n
     * @returns {boolean}
     */
    conformeISBN(n) {
        let Reg ={
            digit:/^[0-9]+$/,
            nodigit:/^[^0-9]+$/,
            number:/^[-+]?((\d*\.?\d+)|(\d+\`.?\d*))$/,
            email:/^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            isbn: /^97[89]-\d-\d{5}-\d{3}-\d$/
        };
        return Reg.isbn.test(n);
    }

    /**
     * Vérifie qu'un isbn est valide
     * @param n
     * @returns {boolean}
     */
    valideISBN(n) {
        console.log(n)
        //je retire les -
        let tab=n.split('-');
        //je regroupe les 12 premier chiffres ensemble pour n'en former qu'un
        let isbn=tab[0]+tab[1]+tab[2]+tab[3];
        //Décodage
        let result=0;
        for(let i=0; i<isbn.length; i++){
            if(i%2==0)
                result=isbn.charAt(i)*1+result*1;
            else
                result=isbn.charAt(i)*3+result*1;
        }
        result=result*1+tab[4]*1;
        return (result%10==0);
    }



}
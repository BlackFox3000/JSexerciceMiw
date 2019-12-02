class Releve {
    /**
     * - temp sera une structure Json contenant les temp�ratures relev�es dans une ville au
     * m�me format que dans les questions pr�c�dentes.
     * - node sera le n�ud qui recevra le tableau une fois cr��
     * @param temp {json}
     * @param node {}
     */
    constructor(temp, node) {
        /**
         * affichage dans la console Mois: Janvier    t�mp�ratures:   Minimum -10  Maximum 11  Moyenne 2.45
         * @param temp
         */

        this.temp = temp;
        this.node = node;
    }

    /**
     * Affiche un tableau de temperature
     */
    print() {
        //cr�ation de la table
        let d = document;
        let element = d.createElement("table");
        node.appendChild(element)

        //intialisation de la table

        let table = d.getElementsByTagName("table")[0]
        let tr = d.createElement("tr");
        this.addLotOfNewsCasesTo(tr, ["Mois", "Minimum", "Maximum", "Moyenne"])
        table.appendChild(tr);

        //r�cu�re les valeurs
        for (let mois in temp) {
            if (temp[mois].tp != undefined) {
                let tr = d.createElement("tr");

                let date = temp[mois].mois
                let max = temp[mois].tp.max();
                let min = temp[mois].tp.min();
                let avg = temp[mois].tp.avg();

                this.addLotOfNewsCasesTo(tr, [date, min, max, avg])
                table.appendChild(tr);
            }
        }
    }

    /**
     * ajoute une nouvelle case � une ligne destination contenant text
     * @param destination
     * @param text
     */
    addNewCaseTo(destination, text) {
        let d = document;
        if (text != undefined) {
            let td = d.createElement("td");
            let text_stock = d.createTextNode(text);
            td.appendChild(text_stock)
            destination.appendChild(td)
        }
    }

    /**
     * Ajout � une ligne Destination plusieurs case ayant poru text texts[i]
     * @param destination
     * @param texts
     */
    addLotOfNewsCasesTo(destination, texts) {
        for (let i = 0; i < texts.length; i++) {
            this.addNewCaseTo(destination, texts[i])
        }
    }

    /**
     * - Au survol d'une ligne du tableau avec la souris, celle-ci deviendra verte. *
     * - Une ligne verte n'�tant plus survol�e par la souris redeviendra grise.
     * - Un clic sur une ligne fera afficher ou disparaitre le d�tail des temp�ratures
     */
    display() {
        //cr�ation de la table
        let d = document;
        let element = d.createElement("table");
        node.appendChild(element)

        //intialisation de la table

        let table = d.getElementsByTagName("table")[0]
        let tr = d.createElement("tr");
        this.addLotOfNewsCasesTo(tr, ["Mois", "Minimum", "Maximum", "Moyenne"])
        table.appendChild(tr);


        //r�cu�re les valeurs
        for (let mois in temp) {
            if (temp[mois].tp != undefined) {
                let tr = d.createElement("tr");
                tr.setAttribute("style", "background:grey;color:white;");
                tr.setAttribute("class","event")
                let date = temp[mois].mois
                let max = temp[mois].tp.max();
                let min = temp[mois].tp.min();
                let avg = temp[mois].tp.avg();

                this.addLotOfNewsCasesTo(tr, [date, min, max, avg])
                table.appendChild(tr);

                //ajoute des detailels des temperatures
                for(let i=0; i<temp[mois].tp.length; i++){
                    this.addNewCaseToV2(tr,temp[mois].tp[i],["style","class"],["display:none","info"])
                }
            }
        }


    }

    addNewCaseToV2(destination, text,name_atribute,value_atribute) {
        let d = document;
        if (text != undefined) {
            let td = d.createElement("td");
            let text_stock = d.createTextNode(text);
            td.appendChild(text_stock)
            for(let i=0; i<name_atribute.length; i++)
                td.setAttribute(name_atribute[i],value_atribute[i])
            destination.appendChild(td)
        }
    }



}
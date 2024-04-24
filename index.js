function ajouterStagiaire() {
    
    var nom = document.getElementById('nom').value;
    var age = document.getElementById('age').value;
    var genre = document.querySelector('input[name="genre"]:checked').value;
    var niveau = '';
    var niveaux = document.querySelectorAll('input[name="niveau"]:checked');
    for (var i = 0; i < niveaux.length; i++) {
        niveau += niveaux[i].value + ' - ';
    }
    var ville = document.getElementById('ville').value;


    var table = document.getElementById('tableStagiaires').getElementsByTagName('tbody')[0];
    var newRow = document.createElement('tr');

    var nomTD = document.createElement('td');
    var ageTD = document.createElement('td');
    var genreTD = document.createElement('td');
    var niveauTD = document.createElement('td');
    var villeTD = document.createElement('td');
    var ActionsTD = document.createElement('td');
    var supprimerBtn = document.createElement('button');
    var modifierBtn = document.createElement('button');

    nomTD.appendChild(document.createTextNode(nom));
    ageTD.appendChild(document.createTextNode(age));
    genreTD.appendChild(document.createTextNode(genre));
    niveauTD.appendChild(document.createTextNode(niveau));
    villeTD.appendChild(document.createTextNode(ville));

    supprimerBtn.appendChild(document.createTextNode('Supprimer'));
    modifierBtn.appendChild(document.createTextNode('Modifier'));

    ActionsTD.appendChild(supprimerBtn);
    ActionsTD.appendChild(modifierBtn);

    //supprimer
    supprimerBtn.addEventListener('click', function() {
        var parentRow = this.parentNode.parentNode;
        parentRow.remove();
    });
    //end supprimer

    //modifier
    modifierBtn.addEventListener('click', function() {

        var parentRow = this.parentNode.parentNode;

        var cells = parentRow.getElementsByTagName('td');

        var nom = cells[0].textContent;
        var age = cells[1].textContent;
        var genre = cells[2].textContent;
        var niveau = cells[3].textContent;
        var ville = cells[4].textContent;

        document.getElementById('nom').value = nom;
        document.getElementById('age').value = age;

        if (genre === 'homme') {
            document.getElementById('homme').checked = true;
        } else {
            document.getElementById('femme').checked = true;
        }

        var niveaux = niveau.split(' - ');

        var checkboxes = document.querySelectorAll('input[name="niveau"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            niveaux.forEach(function(niv) {
                if (checkbox.value === niv) {
                    checkbox.checked = true;
                }
            });
        });

        document.getElementById('ville').value = ville;

        // Update

        document.getElementById('ajouterBtn').style.display = 'none';
        document.getElementById('modifierBtn').style.display = 'inline';
        document.getElementById('modifierBtn').onclick = function() {

            parentRow.cells[0].textContent = document.getElementById('nom').value;
            parentRow.cells[1].textContent = document.getElementById('age').value;

            parentRow.cells[2].textContent = document.querySelector('input[name="genre"]:checked').value;

            var niveaux = '';
            document.querySelectorAll('input[name="niveau"]:checked').forEach(function(checkbox) {
                niveaux += checkbox.value + ' - ';
            });
            
            parentRow.cells[3].textContent = niveaux;
            parentRow.cells[4].textContent = document.getElementById('ville').value;

            var myForm = document.getElementById('myForm');
            myForm.reset();

            document.getElementById('ajouterBtn').style.display = 'inline';
            document.getElementById('modifierBtn').style.display = 'none';
            
        };


    });
    //end modifier

    newRow.appendChild(nomTD);
    newRow.appendChild(ageTD);
    newRow.appendChild(genreTD);
    newRow.appendChild(niveauTD);
    newRow.appendChild(villeTD);
    newRow.appendChild(ActionsTD);

    // Ajouter des écouteurs d'événements pour chaque nouvelle ligne ajoutée
    newRow.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'lightgreen';
    });
    newRow.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // Réinitialiser la couleur de fond
    });

    table.appendChild(newRow);

    var myForm = document.getElementById('myForm');
    myForm.reset();

}

/*
const donnes={
    "consoles":[
         {'ref':'Nintendo Switch Oled','prix':4500,'Manette':2,'Image':'images/img1.jpg'},
         {'ref':'PlayStation','prix':8000,'Manette':4,'Image':'images/img2.jpg'}
    ]
}

 function remplirConsole(dropDownList){

    const option1=document.createElement("option"); //<option value="Selectionner une console">Selectionner une console</option>

    option1.value="Selectionner une console";
    option1.textContent="Selectionner une console";
    dropDownList.appendChild(option1);
   
   donnes.consoles.forEach(function(consol){

       const newOption=  document.createElement("option");
       newOption.textContent=consol.ref;
       newOption.value=console.ref;
       dropDownList.appendChild(newOption);

   });
}
remplirConsole(document.getElementById("consoles")); */



/* function remplirConsole2(dropDownList){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){

            let donnes = JSON.parse(this.responseText);
    
            const option1=document.createElement("option");
            option1.value="Selectionner une console";
            option1.textContent="Selectionner une console";
            dropDownList.appendChild(option1);
           
           donnes.consoles.forEach(function(consol){
        
               const newOption=  document.createElement("option");
               newOption.textContent=consol.ref;
               newOption.value=console.ref;
               dropDownList.appendChild(newOption);
        
           });
        }
    }
    
    xhr.open('GET','http://localhost:3000/consoles');
    xhr.send();
}

remplirConsole2(document.getElementById("consoles"));  */




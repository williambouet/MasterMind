let sameColorsAuthorize = true;
let nbColorsToFind = 5;
let nbOfTry = 5 - 1; //-1 because we include 0 to count
let nbColorsInPalete = 16;

let colorsToFind = [];
let colorsProposal =[];
let lineNb = 0;
let found = false;

const clue = ['green', 'orange']
const colors = [
    'orange','yellow','blue','purple','red','green', 'pink','cyan',
    'maroon','violet','lime','gold','lightcoral','dodgerblue', 'chocolate','burlywood']; //grey, white and black are forbiden.

//TODO : 
/*
faire un shuffle après chaque réglage ou masquer et afficher le bouton soumettre quand les réglages sont validé
ajouter fonction qui permet les doublons mais qui ne donne pas trop de orange
ajouter la fonction du nombre de cercle
si possible : corriger l'alignement

*/

//choose colors with a math.random
//if 'same colors' is not authorize, restart until all colors are different
function shuffle(nbColorsToFind, nbColorsInPalete, colorsToFind, sameColorsAuthorize) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        colorsToFind[index] = colors[Math.floor(Math.random() * nbColorsInPalete)];       
    }

    if (!sameColorsAuthorize){
        if (new Set(colorsToFind).size !== colorsToFind.length) {
            shuffle(nbColorsToFind, nbColorsInPalete, colorsToFind, sameColorsAuthorize);
        }
    }
}

//when player click to sublit, exit the function if colors are already found
//put the first color if is the game start
//or roll colors in an infinite loop 
function getId(clicked_id)
{   
    found ? exit() : "";
  
    let form = document.getElementById(clicked_id);
    if (!form.style.background) {
        form.style.background = colors[0];
        exit();
    }
    for (let index = 0; index < nbColorsInPalete; index++) {
        if (form.style.background == colors[index]) {
            index == (nbColorsInPalete - 1) ? index = 0 : index += 1;
            form.style.background = colors[index];
        }      
    }
}


//verify if all color's proposal are given.
function verifEmpty (nbColorsToFind, colorsProposal) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        if (!colorsProposal[index]) {
            alert("Au moins une couleur est vide. \nVous devez proposer " + nbColorsToFind + " couleurs.");
            return true;
        }
    }
    return false;
}

//if 'same colors' is not authorize, verify if color's proposal are all different.
function verifAllDifferent(colorsProposal, nbColorsToFind, nbColorsToFind, sameColorsAuthorize) 
{
    if (!sameColorsAuthorize) {
        if ((new Set(colorsProposal).size !== nbColorsToFind)) {
            alert("Au moins 2 couleurs sont identiques. \nVous devez choisir " + nbColorsToFind + " couleurs différentes !");
            return false;
        } 
    }
    return true;
}
//create player's game
function prepareGamePlay()
{
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tbody.setAttribute("id", "gamePlay");
    const tr = document.createElement("tr");

    table.appendChild(thead);
    table.appendChild(tbody);

    for (let index = 0; index < nbColorsToFind; index++){
        const td = document.createElement("td");
        td.classList.add("circle");
        td.setAttribute("id",'proposal'+ index);
        td.setAttribute("onclick", "getId(this.id)");
        tr.appendChild(td);      
    }
    table.appendChild(tr);
    document.getElementById('greyCircle').appendChild(table);

    let tableB = document.createElement('table');
    let theadB = document.createElement('thead');
    let tbodyB = document.createElement('tbody');
    tbodyB.setAttribute("id", "results");
    const trB = document.createElement("tr");

    tableB.appendChild(theadB);
    tableB.appendChild(tbodyB);

    for (let index = 0; index < nbColorsToFind; index++){
        const tdB = document.createElement("td");
        tdB.classList.add("black_circle");
        tdB.setAttribute("id",'bc'+ index);
        trB.appendChild(tdB);      
    }
    tableB.appendChild(trB);
    document.getElementById('blackCircle').appendChild(tableB);

    shuffle(nbColorsToFind, nbColorsInPalete, colorsToFind, sameColorsAuthorize);
}

//create and add a new line of player's proposal, with a specific id to each color's proposal (and each small clue)
function addLineProposal(lineNb, nbColorsToFind)
{
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    const tr = document.createElement("tr");

    table.appendChild(thead);
    table.appendChild(tbody);

    for (let index = 0; index < nbColorsToFind; index++){
        const td = document.createElement("td");
        td.classList.add("circle");
        td.setAttribute("id",'line' + lineNb + '_color' + index);
        tr.appendChild(td);      
    }

   for (let i = 0; i < nbColorsToFind; i++){
        const td2 = document.createElement("td");
        td2.classList.add("small_circle");
        td2.setAttribute("id",'line' + lineNb + '_small' + i);
        tbody.appendChild(td2);      
    }
    tr.appendChild(table);

    const containerForm = document.getElementById("results");
    containerForm.appendChild(tr);
    document.getElementById('blackCircle').appendChild(containerForm);
}

//put color's proposal to the new line
function putColorProposal(colorsProposal, nbColorsToFind) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        document.getElementById('line' + lineNb + '_color'+ index).style.background = colorsProposal[index];
    }
}

//count number of player's proposal
function compt(lineNb) 
{
    document.getElementById('compt').innerHTML = lineNb + 1 ;
}

//give a clue on small circle, green is the good color at the right place, orange is good color but not the right place 
function smallResult(nbColorsToFind, colorsToFind, lineNb) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        if (colorsProposal[index] == colorsToFind[index] ) {
            document.getElementById('line' + lineNb + '_small' + index).style.background = clue[0];
        } else if (colorsToFind.includes(colorsProposal[index])) {
            document.getElementById('line' + lineNb + '_small' + index).style.background = clue[1];
        } 
    }
}

//show the colors to find
function discover(nbColorsToFind, colorsToFind) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        document.getElementById('bc' + index).style.background = colorsToFind[index];
    }
}

//verify if player found the colors, if yes -> alert the player
function isItFind(nbColorsToFind, colorsToFind, found, colorsProposal) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        if (colorsProposal[index] != colorsToFind[index]) {
            return false;
        }
    }
    if (!found) {
        discover(nbColorsToFind, colorsToFind);
        addLineProposal(lineNb, nbColorsToFind);
        putColorProposal(colorsProposal, nbColorsToFind);
        smallResult(nbColorsToFind, colorsToFind, lineNb);
        compt(lineNb);
        found = true; 
    }
    alert("Bravo vous avez trouvé !");
        return true;
}

//verify if player can do another proposal, otherwise we alert and show him the colors to find
function canPlay(lineNb, nbOfTry, nbColorsToFind, colorsToFind) 
{
    if (lineNb > nbOfTry) {
        discover(nbColorsToFind, colorsToFind)
        alert("Vous avez épuisé tous vos coups.\nRecharger la page pour jouer à nouveau.")        
        exit();
    }
}

function transfertColorToArr(colorsProposal, nbColorsToFind) {
    for (let index = 0; index < nbColorsToFind; index++) {
        colorsProposal[index] = document.getElementById('proposal' + index).style.background;
    }
}


//do lot of verifications, 
function verifications() {

    lineNb = parseInt(document.getElementById('compt').textContent);    

    transfertColorToArr(colorsProposal, nbColorsToFind);

    !verifEmpty(nbColorsToFind, colorsProposal) ? "": exit();// doit retourner false
    
    verifAllDifferent(colorsProposal, nbColorsToFind, nbColorsToFind, sameColorsAuthorize) ? "": exit();//doit retourner true
   
    canPlay(lineNb, nbOfTry, nbColorsToFind, colorsToFind);
    
    isItFind(nbColorsToFind, colorsToFind, found, colorsProposal) ? exit() : "";

    addLineProposal(lineNb, nbColorsToFind);

    putColorProposal(colorsProposal, nbColorsToFind);

    smallResult(nbColorsToFind, colorsToFind, lineNb);

    compt(lineNb);
}





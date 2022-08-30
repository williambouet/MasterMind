let sameColorsAuthorize = false;
let nbColorsToFind = 4;
let nbOfTry = 5 - 1; //-1 because we include 0 to count
let nbColorsInPalete = 16;

let colorsToFind = [];
let lineNb = 0;
let found = false;

const clue = ['green', 'orange']
const colors = [
    'orange','yellow','blue','purple','red','green', 'pink','cyan',
    'maroon','violet','lime','gold','lightcoral','dodgerblue', 'chocolate','burlywood']; //grey, white and black are forbiden.

shuffle();


//TODO : 
/*
faire un shuffle après chaque réglage
*/

//choose colors with a math.random
//if 'same colors' is not authorize, restart until all colors are different
function shuffle() 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        colorsToFind[index] = colors[Math.floor(Math.random() * nbColorsInPalete)];       
    }

    if (!sameColorsAuthorize){
        if (new Set(colorsToFind).size !== colorsToFind.length) {
            shuffle();
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
function verifEmpty (colorsProposal) 
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
function verifAllDifferent(colorsProposal) 
{
    if (!sameColorsAuthorize) {
        if ((new Set(colorsProposal).size !== nbColorsToFind)) {
            alert("Au moins 2 couleurs sont identiques. \nVous devez choisir " + nbColorsToFind + " couleurs différentes !");
            return false;
        } 
    }
    return true;
}

//create and add a new line of player's proposal, with a specific id to each color's proposal (and each small clue)
function addLineProposal(lineNb)
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
    document.getElementById('Proposal').appendChild(containerForm);
}

//put color's proposal to the new line
function putColorProposal(colorsProposal) 
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
function smallResult(lineNb, colorsProposal) 
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
function discover() 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        document.getElementById('bc' + index).style.background = colorsToFind[index];
    }
}

//verify if player found the colors, if yes -> alert the player
function isItFind(colorsProposal) 
{
    for (let index = 0; index < nbColorsToFind; index++) {
        if (colorsProposal[index] != colorsToFind[index]) {
            return false;
        }
    }
    if (!found) {
        discover();
        addLineProposal(lineNb);
        putColorProposal(colorsProposal);
        smallResult(lineNb, colorsProposal);
        compt(lineNb);
        found = true; 
    }
    alert("Bravo vous avez trouvé !");
        return true;
}

//verify if player can do another proposal, otherwise we alert and show him the colors to find
function canPlay() 
{
    if (lineNb > nbOfTry) {
        discover()
        alert("Vous avez épuisé tous vos coups.\nRecharger la page pour jouer à nouveau.")        
        exit();
    }
}

//do lot of verifications, 
function verifications() {
    let colorsProposal =[];
    lineNb = parseInt(document.getElementById('compt').textContent);    

    colorsProposal[0] = document.getElementById('formProposal1').style.background;
    colorsProposal[1] = document.getElementById('formProposal2').style.background;
    colorsProposal[2] = document.getElementById('formProposal3').style.background;
    colorsProposal[3] = document.getElementById('formProposal4').style.background;    
    
    !verifEmpty(colorsProposal) ? "": exit();// doit retourner false
    
    verifAllDifferent(colorsProposal) ? "": exit();//doit retourner true
   
    canPlay();
    
    isItFind(colorsProposal) ? exit() : "";

    addLineProposal(lineNb);

    putColorProposal(colorsProposal);

    smallResult(lineNb, colorsProposal);

    compt(lineNb);
}





<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MasterMind</title>
    <link rel="icon" href="">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>

</head>

<body >
    <header>Jeu du MasterMind</header>
    <main>  
        <div id="gamePlay">
            <div id="blackCircle" class='view_table'></div>
            <div name='prepare_Proposal' class='view_table' id='greyCircle'></div>
            <div id='btn'><button type="button" class="button" onclick="verifications()">Soumettre</button></div>
            <div class='cpt'> Coup(s) effectué(s) : <span id='compt' class='cpt'>0</span></div>
            <div class='cpt'onclick="prepareGamePlay()" id="startGame">Cliquer ici pour commencer une partie</div>
        </div>    
    </main>
       
    <aside>
        <div>Cliquez sur la valeur pour choisir :</div> 
        <div class='parameters' onclick="nbTry()">- vos nombres d'essais : <span name="tries" class="paramValue" id="nbTry" onclick="nbTry()">12</span></div>
        <div class='parameters' onclick="nbToFind()">- le nombre de boules  : <span name="nbToFind" id="nbToFind" class="paramValue" onclick="nbToFind()">6</span></div>
        <div class='parameters' onclick="nbOfColors()">- le nombre de couleur dans la palette : <span name="nbOfColors" class="paramValue" id="nbOfColors" onclick="nbOfColors()">16</span></div>
        <div class='parameters' onclick="sameColors()">- d'autoriser ou non les couleurs en double : <span name="sameColors" class="paramValue" id="sameColors" onclick="sameColors()">oui</span></div>
        
    </aside>
</body>
</html>
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

<body onload="prepareGamePlay()">
    <header>Jeu du MasterMind</header>
    <main>  
        <div id="gamePlay">
            <div id="blackCircle" class='view_table'></div>
            <div name='prepare_Proposal' class='view_table' id='greyCircle'></div>
            <div id='btn'><button type="button" class="button" onclick="verifications()">Soumettre</button></div>
            <div class='cpt'>Nombre d'essai : <span id='compt' class='cpt'>0</span> </div>
        </div>    
    </main>
       
    <footer></footer>
</body>
</html>
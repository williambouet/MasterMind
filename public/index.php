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
<main> 
        <div id="gamePlay">
            <div id="blackCircle" class='view_table'></div>

            <div name='prepare_Proposal' class='view_table' id='greyCircle'></div>
            <div id='btn'><button type="button" class="button" onclick="verifications()">Soumettre</button></div>
            <div class='cpt'>Nombre d'essai : <span id='compt' class='cpt'>0</span> </div>
        </div>    
    </main>
    <aside>
        <div id="Title">Jeu du MasterMind</div>
        <div id='parameters'>Paramètres du jeu</div>
        <form action="">
            <select name="difficultes" id="difficultes" size="1">
                    <option valeur="4">4 formes</option>
                    <option valeur="5" selected>5 formes</option>
                    <option valeur="6">6 formes</option>
                    <option valeur="7">7 formes</option>
            </select>
            <select name="tries" id="tries" size="1">
                    <option valeur="4">4 essais</option>
                    <option valeur="8">8 essais</option>
                    <option valeur="12" selected>12 essais</option>
                    <option valeur="16">16 essais</option>
            </select>
            <select name="palete" id="palete" size="1">
                    <option valeur="4">palette de 4 couleurs</option>
                    <option valeur="8">palette de 8 couleurs</option>
                    <option valeur="12">palette de 12 couleurs</option>
                    <option valeur="16" selected>palette de 16 couleurs</option>
            </select>
            <select name="sameColors" id="sameColors" size="1">
                    <option valeur="true">Authoriser les doublons</option>
                    <option valeur="false" selected>Ne pas authoriser les doublons</option>
            </select>
        </form>
    </aside>

    
    <footer></footer>
</body>
</html>
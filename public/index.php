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

<body>

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
    <main> 

        <div>
            <table id= 'Proposal' >
                <tbody  id="results">
                    <tr>
                        <td class="black_circle" id="bc0"></td>
                        <td class="black_circle" id="bc1"></td>
                        <td class="black_circle" id="bc2"></td>
                        <td class="black_circle" id="bc3"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div name='prepare_Proposal' class='view_table'>
        <table >
            <tbody>
                <tr>
                    <td id='formProposal1' class="circle" onclick="getId(this.id)" ></td>
                    <td id='formProposal2' class="circle" onclick="getId(this.id)" ></td>
                    <td id='formProposal3' class="circle" onclick="getId(this.id)" ></td>
                    <td id='formProposal4' class="circle" onclick="getId(this.id)" ></td>                    
                </tr>
            </tbody>
        </table>
        </div>
            <div id='btn'><button type="button" class="button" onclick="verifications()">Soumettre</button></div>
            <div class='cpt'>Nombre d'essai : <span id='compt' class='cpt'>0</span> </div>
            
            
    </main>
    
    <footer></footer>
</body>
</html>
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
    <header>Jeu du MasterMind</header>
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
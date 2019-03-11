//fonction asynchrone charger et suspendre l'évaluation de l'expression


async function getData() {
    let res = await fetch('https://thatsthespir.it/api'); 
    //await indique que je veux attendre  le résultat de fletch
    // on n'arrivera à cette ligne que lorsque "res" sera résolue
    let data = await res.json()
    //on arrivera à cette ligne que lorsque "data" sera résolue
    return data;
  }
  
//on appelle la fonction getData
getData()
    //renvoie l'objet Promise data
    .then ((data) =>{
        document.getElementById('img').src = data.photo;
        document.getElementById('quote').innerHTML = data.quote;
        document.getElementById('author').innerHTML = data.author;
        document.getElementById('allQuote').innerHTML = data.total_quotes;
    })

    .catch((err)=>{
        console.error('Erreur');
        console.dir(err);
    })

//nouvelle méthode
/*let img = document.getElementById('img');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let nbrQuote = document.getElementById('allQuote');

//on créé l'objet requête
let req = new XMLHttpRequest();
//on choisit le type de la requête ici GET et true pour qu'elle soit asynchrone
req.open("GET", "https://thatsthespir.it/api", true );
req.onreadystatechange = function() {
    console.log(this);
    //200 signifie que la requête est acceptée et qu'il n'y a pas de problème
    if(this.readyState == 4 && this.status == 200) {
        img.setAttribute = ("src"(JSON.parse(this.responseText).photo));
        quote.innerHTML = (JSON.parse(this.responseText).quote);//JSON.parse analyse une chaîne de caractère JSON et construit la valeur javascrip ou l'objet décrit par la chaîne
        author.innerHTML = (JSON.parse(this.responseText).author);
        nbrQuote.innerHTML = (JSON.parse(this.responseText).total_quotes);
    }
}

req.send();*/
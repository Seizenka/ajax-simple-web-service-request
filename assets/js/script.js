//fonction asynchrone charger et suspendre l'évaluation de l'expression
async function getData() {
    let res = await fetch('https://thatsthespir.it/api'); 
    //await indique que je veux attendre  le résultat de fletch
    // on n'arrivera à cette ligne que lorsque "res" sera résolue
    let data = await res.json()
    //on arrivera à cette ligne que lorsque "data" sera résolue
    return data;
  }
  
  
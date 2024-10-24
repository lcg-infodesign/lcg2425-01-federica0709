// https://www.artbooms.com/blog/vera-molnar
function setup() {
  noLoop(); //così si ferma
  createCanvas(windowWidth, windowHeight);
  
  externalPadding = 40;
  internalPadding = 40;
  marginX=60;
  marginY=60;
 
}

function draw() {
  background("#dedede"); //colore di sfondo
  
  // tutte le misure sono state divise per due in modo da 
  //rendere la composizzione il più simile possibile all'originale
  let latoquad=55/2; //dimensione di ogni quadrato
  //spazio tra i quadrati che intercorre verticalmente
  //orizzontalmete ho presupposto che i quadrati sono affiancati
  let vGutter=4/2;  
  let columns= (windowWidth-externalPadding*2-internalPadding*2)/latoquad;
  let rows = (windowHeight-externalPadding*2-internalPadding*2)/latoquad;

 //ciclo for per popolare la tavola con i quadrati
  for(let i=0; i < columns; i++){
    for(let r= 0; r<rows; r++)
    {
       // la randomicità è introdotta sia per la posizione x che y
       //ogni volta che faccio refresh si riposizionano in modo casuale
      let xPos= marginX + i*latoquad +random(-17/2,17/2);
      // per la posizione y introduco anche il vGutter
      let yPos= marginY + r*(latoquad+vGutter) +random(-5/2,5/2);
      
      // struttura condizionale per le prime tre colonne blu
      if (i<3) {
      //colorMode(RGB, 255, 255, 255,);
      let c= color("#588fd7")
      c.setAlpha(200); //comando per simulare la sovrastampa
      fill(c);
      }
      // condizione per tutte le altre colonne verdi
      else {
      let c= color("#02bcb3");
      c.setAlpha(200); //comando per simulare la sovrastampa
      fill(c);
    }
      
      noStroke(); //per rimuovere il contorno dei quadratini
      rect(xPos, yPos, latoquad, latoquad);
    }
  }
  
}

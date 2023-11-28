// 1 - creiamo una funzione "random" che genera un numero casuale da 1 a 5;
function random(){
    let num = Math.floor(Math.random() * 5 + 1);
    return num;
}
// 2 - permettiamo all'utente di inserire un numero casuale da 1 a 5;
let correct = false;
let number;
while(!correct){
    number = parseInt(prompt("inserire un numero da 1 a 5"));
    if(number > 0 && number < 6){
        correct = true;
    }
}


// 3 - permettiamo all'utente di scegliere tra pari e dispari;
let choise = prompt("pari o dispari?");
// 4 - sommiamo i due numeri
// 5 - in una funzione "pariDispari" stabiliamo se i due numeri sono pari o dispari
//     6 - ? sono pari :
//         7.1 -  restituiamo "pari"
//     8 - : restituiamo "dispari"
// 9 - ? è uscito pari e l'utente ha scelto pari O è uscito dispari e l'utente ha scelto dispari
//     9.1 - stampiamo il risultato della  funzione  "pariDispari" più "hai vinto";
// 10 - :  stampiamo il risultato della  funzione  "pariDispari" più "ha vinto il computer";
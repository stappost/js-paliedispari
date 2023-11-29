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
correct = false;
let choice;
while(!correct){
    choice = prompt("pari o dispari?");
    if(choice == "pari" || choice == "dispari"){
        correct = true;
    }
}
// 4 - sommiamo i due numeri
let pc_num = random();
console.log(pc_num);
let somma = pc_num + number;
console.log(somma);

// 5 - in una funzione "pariDispari" stabiliamo se i due numeri sono pari o dispari
//     6 - ? sono pari :
//         7.1 -  restituiamo "pari"
function oddOrEven(){
    if(somma%2 == 0){
        return "pari";
    }
    //     8 - : restituiamo "dispari"
    else{
        return "dispari";
    }
}
let result = oddOrEven();


// 9 - ? è uscito pari e l'utente ha scelto pari O è uscito dispari e l'utente ha scelto dispari
//     9.1 - stampiamo il risultato della  funzione  "pariDispari" più "hai vinto";
if(choice == result){
    console.log(`il risultato è ${result}. Hai vinto`);
}
// 10 - :  stampiamo il risultato della  funzione  "pariDispari" più "ha vinto il computer";
else{
    console.log(`il risultato è ${result}. Ha vinto il computer`);
}
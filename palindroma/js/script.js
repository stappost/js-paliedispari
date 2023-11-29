// 1 - permettere all'utente di inserire una parola;
let word = prompt("aggiungere parola che si vuole controllare");
// 2 - creare una funzione con parametro "parola";
function palindroma(parola){
    //     3 - trasformare parola in array,capovolgiamola e ritrasformiamola in stringa facendo attenzione che sia tutto in minuscolo;
    let parole
    parole = parola.split("").reverse().join("").toLowerCase();

    //     4 - confrontiamo il risultato con la parola inserita;
    //     5 - ? sono uguali
    //         5.1 - stampiamo "la parola è palindroma";
    if(word.toLowerCase() == parole){
        return true
    }
    //     6 - :  stampiamo "la parola NON è palindroma";
    return false
}
let parola = palindroma(word)
console.log(parola)

if(parola){
    console.log(`La parola ${word} è palindroma`)
}
else{
    console.log(`La parola ${word} NON è palindroma`)
}
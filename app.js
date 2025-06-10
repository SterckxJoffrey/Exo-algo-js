const number = Number(prompt("Veuillez entre un nombre"))
console.log(number);
function pair(number) {
    if (number%2 === 0) {
        console.log("Le nombre est pair");
    } else {
        console.log(("Le nombre est impair"));
    }

}
pair(number)

const number1 = Number(prompt("Veuillez entre un autre nombre"));

function biggerNumber (number, number1){
    if (number > number1) {
        console.log("Le premier nombre est plus grand");
    } else if (number < number1) {
        console.log("Le deuxième nombre est plus grand");
    } else {
        console.log("Ils sont égaux");
        
    }
}

biggerNumber(number, number1)

function tenToOne (){
    let i = 10;
    while (i != 0) {
        console.log(i);
        i--;
        
    }
}

tenToOne()
// const number = Number(prompt("Veuillez entre un nombre"))
// console.log(number);
// function pair(number) {
//     if (number%2 === 0) {
//         console.log("Le nombre est pair");
//     } else {
//         console.log(("Le nombre est impair"));
//     }

// }
// pair(number)

// const number1 = Number(prompt("Veuillez entre un autre nombre"));

// function biggerNumber (number, number1){
//     if (number > number1) {
//         console.log("Le premier nombre est plus grand");
//     } else if (number < number1) {
//         console.log("Le deuxième nombre est plus grand");
//     } else {
//         console.log("Ils sont égaux");
        
//     }
// }

// biggerNumber(number, number1)

// function tenToOne (){
//     let i = 10;
//     while (i != 0) {
//         console.log(i);
//         i--;
        
//     }
// }

// tenToOne()

// function additionArray() {
//     let array = [1, 5, 12, 13];
//     let count = 0
//     for (let i = 0; i < array.length; i++) {
//         count += array[i]
        
//     }
//     return count

    
// }
// let count = additionArray()
// console.log(count);




// function reverseString() {
//     let string = 'kayak';
//     let reverse = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
//     return reverse;
// }

// let result = reverseString();
// console.log(result);

// function palindrome () {
//     let word = 'kayak'
//     if (result === word) {
//         console.log('Le mot est un palindrome');
        
//     } else {
//         console.log("Il ne l'est pas ");
        
//     }
// }

// palindrome()


// const nombre = Number(prompt("Veuillez entre un autre nombre"));
// function FizzBuzz(nombre) {
//     if (nombre%3 === 0 && nombre%5 === 0) {
//         console.log('FizzBuzz');
        
//     } else if (nombre%5 === 0) {
//         console.log("Buzz");
        
//     } else     if (nombre%3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log("Nul");
        
//     }
// }


// FizzBuzz(nombre)

// function fizzBuzz100() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz100();



function biggerNumberArray() {
    let array = [32, 100, 43, 2, 4, 233, 4, 5]
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    console.log(max);
    
}
biggerNumberArray();

function countVoyelle() {
    let count = 0
    let voyelle = 'aeiou';
    let word = 'coucou je suis Joffrey'

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if (word[i] === voyelle[j]) {
                count++
            }   
        }
    }
    console.log(count);
}

countVoyelle()

function minutesToHour(){
    let minutes = 1902
    let hour = 0
    while (minutes >= 60) {
        hour++;
        minutes = minutes - 60

    }
    console.log(hour+ "heures" + minutes + "minutes");
    
}
minutesToHour()

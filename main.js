// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     let output = "";
//     if (currentNumber % 5 === 0) {
//         output += "Chicken" 
//     }
//     if (currentNumber % 7 === 0) {
//         output += "Monkey" 
//     }
//     if (output != "") {
//         console.log(output);
//     }
// }




// let bandNumber = 1

// const takeNumber = function (band) {
//     let output = `${bandNumber}. ${band}`;
//     bandNumber++;
//     return output;
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console








// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };
// console.log(foods)
// for (let i = 0; i < foods.length; i++) {
//     grill(foods[i])
// }
// console.log(foods)




let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, point, numPoints) {
    let buildMeUp = ""
    let pointHolder = "";
    for (let i = 0; i < numPoints; i++) {
        pointHolder += point;
    }

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        buildMeUp+= sentence[i];

        if ((i + 1)%3 == 0) {
            buildMeUp += `${pointHolder} `;
        }
        else {
            buildMeUp += " ";
        }
        console.log(buildMeUp)
        // Print buildMeUp to the console
    }

}

addExcitement(sentence, "!", 9)



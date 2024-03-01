//1?
//2
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let result = arr1.filter(element => !arr2.includes(element));
// console.log(result);  
//3
// const sortArray = (array) => {
//     array.sort((a, b) => a - b);
//     return array;
// }
// let array = [
//     1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
// ];
// console.log(sortArray(array));
//4
// const checkNegativeNumbers = (array) => {
//     let negativeNumbers = array.filter(num => num < 0);
//     if (negativeNumbers.length > 0) {
//         return negativeNumbers;
//     } else {
//         return "No negative numbers found";
//     }
// }
// let numbersArray = [1, 6, -3, 8, -5, 10];
// console.log(checkNegativeNumbers(numbersArray));
// let positiveArray = [1, 2, 3, 4];
// console.log(checkNegativeNumbers(positiveArray));
//5
// const kebabToUpper = (text) => {
//     let words = text.split('-');
//     let upperCaseWords = words.map(word => word.toUpperCase());
//     let upperCaseText = upperCaseWords.join('_');
//     return upperCaseText;
// }
// let kebabText = "hello-world-how-are-you";
// console.log(kebabToUpper(kebabText));
//6
// const transformArray = (array) => {
//     let transformedArray = array.map(num => {
//         if (num < 0) {
//             return -num;
//         } else {
//             return num * 2;
//         }
//     });
//     return transformedArray;
// }
// let inputArray = [1, 5, -7, 3, -9, 4, -6, 2];
// let outputArray = transformArray(inputArray);
// console.log(outputArray);
//7
// const namesStartingWithA = (array) =>{
//     let namesWithA = array.filter(name => name.startsWith("A"));
//     return namesWithA
// }
// let namesArray = [
//     "Alice",
//     "Bob",
//     "Catherine",
//     "David",
//     "Eva",
//     "Andrew",
//     "Frank",
//     "Anna",
//     "George",
//     "Alex",
// ];
// console.log(namesStartingWithA(namesArray));




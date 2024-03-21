function createHTMLElement(tag, text){
    const element = document.createElement(tag);
    element.innerText = text;

    return element;
}

const h1Element = createHTMLElement('h1', 'homework#40');
document.body.append(h1Element);
console.log(h1Element);


// 1)

let array = [1, 2, 3, 4, 5];

function sqrRootArr(arr) {
    let countSquareRootArr = arr.map(num => Math.sqrt(num));
    console.log(countSquareRootArr);
    return countSquareRootArr;
}
sqrRootArr([1, 2, 3, 4, 5]);

function sumSqrRoot(arr) {
    let sum = arr.reduce((acc, num) => acc + Math.sqrt(num), 0);
    console.log(sum);
    return parseFloat(sum.toFixed(2));
}
sumSqrRoot([1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]);

let result = sumSqrRoot(array);
console.log(result);


// 2)

function sameElement(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            return array[i];
        }
    }
    return 'нет одинаковых элемента подряд';
}
console.log(sameElement([2, 4, 5, 7, 7]));
console.log(sameElement([1, 2, 3]));
console.log(sameElement(['hello', 'my', 'my', 'friend']));


// 3)

const enterWord = prompt("Vvedite stroky:");
const getLetter = /[а, у, о, и, э, ы, я, ю, е, ё]/g;
function words() {
    const count = enterWord.match(getLetter).length;
    if (count === true){
        console.log(count);
    } 
    return count;
}
console.log(words());


// 4)

function bizdinFilter(arr, callback) {
    return arr.filter(callback);
}
const arr = [1, 2, 3, 4, 5];
const result = bizdinFilter(arr, el => el % 2 === 0);
console.log(result); 








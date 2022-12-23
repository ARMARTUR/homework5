// 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)



let arr = [6, 78, 'n', 0, 1];
let arrLength = arr.length - 1;

function deleteArrEl(arr) {

    if (arrLength === arr.length) {
        return 1
    };

    arr.shift();

    deleteArrEl(arr);
    return arr;
};

console.log(deleteArrEl(arr, arr))





// 2. Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).




function flatten(arr) {
    let ret = [];

    for (var i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            ret = ret.concat(flatten(arr[i]));

        } else {
            ret.push(arr[i]);
        }
    }
    return ret;
}

console.log(flatten([14, [1, [[[3, []]], 1], 0]]))


// 3. Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

let number = 14;
function sum(number) {
    let sum = 0;
    let stringNumber = String(number);

    for (let i = 0; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i])

    };
    if (sum >= 10) {
        return String(number).charAt(0)
    } else {
        return sum
    };
}

console.log(sum(number));


// 4. Given the list of the following readers:
// [
// { book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];
// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.




let arr = [
    { book: ' &quot;Catcher in the Rye&quot', readStatus: true, percent: 40 },
    { book: '&quot;Animal Farm&quot', readStatus: true, percent: 20 },
    { book: '&quot;Solaris&quot', readStatus: false, percent: 90 },
    { book: '&quot;The Fall&quot', readStatus: true, percent: 50 },
    { book: '&quot;White Nights&quot', readStatus: false, percent: 60 },
    { book: '&quot;After Dark&quot', readStatus: true, percent: 70 }
];

function sortedObject(arr) {
    let sorted = arr.filter(function (el) {
        if (el.readStatus === true) {
            return true
        } else {
            return false
        }
    }).sort((a, b) => {
        return a.percent - b.percent
    }).map((elem) => {
        elem.percent = elem.percent + "%"
        return elem
    })
    return sorted
}
console.log(sortedObject(arr))

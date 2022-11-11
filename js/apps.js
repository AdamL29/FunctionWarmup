// 4. Not Function Category 1
function printString(message) {
    console.log(message);
}
printString(`Hello World`);

// Should print Hello Again on second line.
let message = `Hello Again`;
printString(message)

// 5.
function getMood(isHappy) {
    if (isHappy){
        console.log(`Happy`);
    } else {
        console.log(`Sad`);
    }
}
// Should print Happy
getMood(true);

// Should print sad
getMood(false);

// 6. Function Category 4
function max(num1, num2){
    if (num1 > num2){
        return num1;
    } else if (num2 > num1){
        return num2;
    } else {
        return null;
    }
}

let result = max(2,5);
// This will print to the user instead of only showing in the variable on the left debugger.
console.log(`The larger number was ${result}`);
// Below is line 36 and 38 put together which makes it the same thing.
// console.log(`The larger number was ${max(2,5)}`);
result = max(10,4);
console.log(max(4,4));
console.log(max(-3, -20));
console.log(max(0.9,1.5));
console.log(max(3+5,12-8));

// 7. Arrays
function findMax(arr) {
    // Look at first box
    // Write down the number as the current largest.
    let maximum = arr[0];
    for (let i=1;i<arr.length; i++) {
    // Go to the next box.
    // Look at the content of the box.
    // Compare the value to what I have written down already.
    // If new number is larger than current largest, overwrite the largest number.
    if (arr[i] > maximum){
        maximum = arr[i];
    }
    // If it's smaller or equal, do nothing/ignore/move on.
    // Go to line 51.
    }
    // After finishing looking at all boxes, return the number currently written down as largest.
    return maximum;
}

let myArr = [1,2,3,4,5]
console.log(findMax(myArr));

myArr = [0,0,0,0,0]
console.log(findMax(myArr));

myArr = [-5,4,100,1000,-530,0]
console.log(findMax(myArr));

console.log(findMax([5,20,65,30,54,20,1]));


// 8. Loops with this one best suited for While instead of For.
// function findHappy(arr) {
    //Iterate through the array.
    // for (let i=0;i<arr.length;i++){
        // For each element, check if string contains "Happy".
        // if (arr[1].includes(`happy`)){
        //     return att[i];
        // } else{
            // If it does, return the string.
                // Otherwise, pop the string (Remove it).
    //         arr.pop();
    //     }
    // }

function findHappy(arr){
    let curStr;
    while (arr.length>0) {
        curStr = arr.pop();
        if (curStr.includes(`happy`)){
            return curStr;
        }
    }
}
console.log(findHappy([`hello`, `my`, `name`, `is`, `happy`]));
console.log(findHappy([`hello`, `my happy`, `name`, `is`, `Adam`]));


    // If loop finishes without a string, return null.

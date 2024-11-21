//alert("Hello World!");
var hello = "hello";
console.log("This is good for debugging " + hello);

function print3ways(){
    alert("Pop up window...")
    console.log("This is printed in the console");
    document.write("This is written to the document, override the entire html document");
}

const arr = [1,2,3,4,5];
function funWithArrays(){
    document.write("Sum of the array is: " + getSum())
    document.write("<br>The minimum is: " + findMin())
    document.write("<br>The maximum is: " +findMax())
    document.write("<br>The average is: "+ average())
}

function getSum(){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function findMin(){
    let min = [arr[0]];
    for (let i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function findMax(){
    let max = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function average(){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return (sum/arr.length());
}

function firstFunction(callback){
    console.log("about to execute callback function");
    callback();
}

function myCallbackFunction(){
    console.log("this is the callback function that does something special.");
}

function soManyFunctions(){
    console.log("in soManyFunctions. Begin function clause");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFucntions.");
}


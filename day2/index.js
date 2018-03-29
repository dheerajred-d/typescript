let calc = function(num1, num2) {
    return num1 + num2;
}

let calcV2 = (num1, num2) => num1 + num2;

let calcV3 = (num1, num2) => {
    console.log('Result is ' + (num1 + num2));

    console.log(`Result is ${num1 +num2}
        zasdadsf
        asfa

    `)
    return 12;
}


let arr = [
    'sample1', `sample2`, `sample3`, `sample4`, `sample5`, `sample6`
];
arr.forEach(function(num) {
    console.log(`${num}`);
})


arr.forEach((num) => console.log(`${num}`))
let arr: string[];
let arr2: (string | number)[];
let arr1: Array<(string | number)> = [];
arr1[0] = "Hello world";
arr1[1] =  10;

let skills: number[] = [];
skills.push(2, 3)

const result = skills.map(item => item *2);
console.log(result)


let scores: (string | number)[] = [10, 5];
console.log(scores)
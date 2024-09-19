"use strict";
function handleMath(a, b) {
    let sum = 0;
    return sum += a + b;
}
const math1 = handleMath(10, 20);
const handlemath2 = (a, b) => a * b;
// object ----> function ---> methods
const obj = {
    name: "Rabius Sunny",
    age: 23,
    subject: "Mathematics",
    CGPA: 3.50,
    totalCGPA(third, fourth) {
        return third + fourth + this.CGPA;
    }
};
obj.totalCGPA(3.45, 3.50);

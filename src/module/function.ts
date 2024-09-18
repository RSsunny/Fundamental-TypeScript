function handleMath(a:number,b:number):number{
    let sum:number=0
    return sum +=a+b
}

const math1:number =handleMath(10,20)

const handlemath2=(a:number,b:number):number=>a*b

// object ----> function ---> methods

const obj:{
    name:string;
    age:number;
    subject:string;
    CGPA:number;
    totalCGPA(third:number,fourth:number):number;

}={
    name:"Rabius Sunny",
    age:23,
    subject:"Mathematics",
    CGPA:3.50,
    totalCGPA(third:number,fourth:number):number{
        return third+fourth+this.CGPA
    }
}
{
    // union type
    type Frontenddeveloper= "frontend expert"| "junior developer"
    type Backenddeveloper= "junior developer"|"backend expert"
    type developer= Frontenddeveloper|Backenddeveloper

    const sunny:developer="backend expert"
    const rakib:developer="frontend expert"

    // intersection type
    type Frontend= "frontend expert"| "junior developer"
    type Backend= "junior developer"|"backend expert"
    type Fullstack= Frontend & Backend

    const myRole:Fullstack="junior developer"


    type Obj1={
        word:number;
        city:"Barishal";
        dist:"Barishal";
        country:"Bangladesh";
    }
    type Obj2={
        word:number;
        vill:string;
        city:"Barishal";
        dist:"Barishal";
        country:"Bangladesh";
    }

    type Address= Obj1 & Obj2
    const address:Address={
        city:"Barishal",
        country:"Bangladesh",
        dist:"Barishal",
        vill:"Weather Office",
        word:29
    }
    console.log(address);
    
}
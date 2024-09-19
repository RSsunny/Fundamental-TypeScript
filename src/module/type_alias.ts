{
    type Str= string
    const myName:Str="Rabius Sunny"

    type obj={
        word:number,
        vill?:string
        city:string
        dist:string
        country:string

    }

    const address:obj={
        word:29,
        city:"Barishal",
        dist:"Barishal",
        country:"Bangladesh"
    }
    
    type math=(a:number,b:number)=>number
    const handlemath:math=(a,b)=>a*b
    handlemath(10,20)

}
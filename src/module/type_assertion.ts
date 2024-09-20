{
     let myName:any
     myName="sunny"
     myName=12112;
     const str= "Next level web development"
    //  type assertions then suggestions for type specific 
    const len= (str as string).length
    console.log(len);

    const handlSum=(a:string| number,b:number): string | number| undefined=>{
        let sum=0
        if(typeof a === "string"){
            sum+= (parseFloat(a)+b)
            return sum
        }
        return sum+=a+b
    }

    const book= handlSum(10,5) as number
    console.log(book);
    
}
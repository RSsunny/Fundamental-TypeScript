{
    // array destucturing
    const friendlist: string[] =["Hasib","Ashik","Juwel","Saifull"]
    const [Hasib,Ashik,Juwel,Saifull]=friendlist

    // object destucturing
    const address={
        word:29,
        city:"Barishal",
        dist:"Barishal",
        country:"Bangladesh"
    }
    const {city,dist,...resat}=address
}
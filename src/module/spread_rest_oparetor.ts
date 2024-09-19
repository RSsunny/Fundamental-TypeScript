{
    // array spread operator
    const friendlist: string[] =["Hasib","Ashik","Juwel","Saifull"]
    const friendlist2: string[] =["Emon","Arif","Rakib"]
    friendlist.push(...friendlist2)
    // -------------------------

    const topinfo={
        name:"Rabius Sunny",
        f_name:"Md Humaun Sharif",
        m_name:"Rehana Begum",
        DOB:3-8-2001
    }

    const address={
        word:29,
        city:"Barishal",
        dist:"Barishal",
        country:"Bangladesh"
    }
    const others={
        status:"unmarried",
        religion:"Islam",
    }
    // object spread operator
    const bio={
        ...topinfo,
        ...address,
        ...others
    }

    // resst oparetor

    const addfriends=(...resat:string[])=>{
        const paragraphs=resat.forEach((num:string):string=>num)
        return  paragraphs
       
    }

    addfriends("Rabius Sunny","Rakib","Md Humaun")




}
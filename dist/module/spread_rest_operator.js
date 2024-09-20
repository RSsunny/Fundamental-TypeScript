"use strict";
{
    // array spread operator
    const friendlist = ["Hasib", "Ashik", "Juwel", "Saifull"];
    const friendlist2 = ["Emon", "Arif", "Rakib"];
    friendlist.push(...friendlist2);
    // -------------------------
    const topinfo = {
        name: "Rabius Sunny",
        f_name: "Md Humaun Sharif",
        m_name: "Rehana Begum",
        DOB: 3 - 8 - 2001
    };
    const address = {
        word: 29,
        city: "Barishal",
        dist: "Barishal",
        country: "Bangladesh"
    };
    const others = {
        status: "unmarried",
        religion: "Islam",
    };
    // object spread operator
    const bio = Object.assign(Object.assign(Object.assign({}, topinfo), address), others);
    // resst operator
    const addfriends = (...resat) => {
        const paragraphs = resat.forEach((num) => num);
        return paragraphs;
    };
    addfriends("Rabius Sunny", "Rakib", "Md Humaun");
}

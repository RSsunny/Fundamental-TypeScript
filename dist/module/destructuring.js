"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
{
    // array destucturing
    const friendlist = ["Hasib", "Ashik", "Juwel", "Saifull"];
    const [Hasib, Ashik, Juwel, Saifull] = friendlist;
    // object destucturing
    const address = {
        word: 29,
        city: "Barishal",
        dist: "Barishal",
        country: "Bangladesh"
    };
    const { city, dist } = address, resat = __rest(address, ["city", "dist"]);
}

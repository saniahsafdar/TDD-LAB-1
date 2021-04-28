const {translate} = require("./pigLatin");
describe("translate", ()=>{
    
    test("Translate Else",()=>{
        let result = translate("else");
        expect(result).toEqual("elseway")
    });

    test("Words that start with Vowel",()=>{
        let result = translate("a");
        expect(result).toEqual("away")
    });

    test("Vowel o", ()=>{
        let result = translate("orange");
        expect(result).toEqual("orangeway");
    });

    test("Vowel i ", ()=>{
        let result = translate("igloo");
        expect(result).toEqual("iglooway");
    });

    test("Vowel u ", ()=>{
        let result = translate("umbrella");
        expect(result).toEqual("umbrellaway");
    });

    test("Words that start with Consonant", ()=>{
        let result = translate("bicycle");
        expect(result).toEqual("icyclebay");
    });

    test("Vowels that start with Capital Letter", ()=>{
        let result = translate("Elephant");
        expect(result).toEqual("elephantway");
    });

    test("Vowels that start with two consonants", ()=>{
        let result = translate("small");
        expect(result).toEqual("allsmay");
    });

    test("Words that have 2 or more vowels", ()=>{
        let result = translate("cookies");
        expect(result).toEqual("ookiescay");
    });

    test("Words that have 3 or more vowels", ()=>{
        let result = translate("splint");
        expect(result).toEqual("intsplay");
    });

})

//words that start with vowels
//words that start with Cap Letters
//words that start w. one constant,
//... write tests for the second letter being several different vowels
//words that start with two consonants
//words that start with more consonants
// At least five (5) tests for words starting with different vowels.
// These tests are correct and pass.
// At least two (2) tests for words starting with one consonant.
// These tests are correct and pass.
// At least one (1) test for words starting with two consonants.
// These tests are correct and pass.
// At least one (1) test for words starting with three consonants.
// These tests are correct and pass.
// At least one (1) test checking for lower case conversion.
// These tests are correct and pass.

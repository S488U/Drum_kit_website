// var houseKeeper1 = {
//     name: "Zara",
//     worked: 9,
//     hotelsWorkeed : ["Taj Hotel", "Kerala Palace"],
//     place: "Kanhangad",
//     language: ["English", "Malayalam", "HIndi"],
// };

// console.log("Hello My name is " + houseKeeper1.name + ". And I have " + houseKeeper1.worked + " years of Work Experience, And I know these languages " + houseKeeper1.language.join(", ") + ". My Place is " + houseKeeper1.place + ". I worked " + houseKeeper1.hotelsWorkeed.join(" and ") + "." );

// console.log(`Hello My name is ${houseKeeper1.name}. And I have ${houseKeeper1.worked} years of Work Experience, And I know these languages ${houseKeeper1.language.join(", ")} . My Place is ${houseKeeper1.place} . I worked ${houseKeeper1.hotelsWorkeed.join(" and ")}.`);

//------------creating objects by Constructor functions, Note: constructor function always spells with capital letter -----------------------------------------
function CleanerWorkers(name, age, lan) {
    this.name = name;
    this.age = age;
    this.language = lan;
    this.clean = function () {
        console.log("How are you");
    };
}

var cleanWorkers1 = new CleanerWorkers("Shahabas", 16, [
    "Malayalam",
    "English",
]);
// var cleanWorkers2 = new CleanerWorkers("Saniya", 15, ["Malayalam", "Arabic"]);
// var cleanWorkers3 = new CleanerWorkers("Hashiq", 22, ["English", "Spanish"]);
// console.log(cleanWorkers1);
// console.log(cleanWorkers2);
// console.log(cleanWorkers3);
// console.log(cleanWorkers1.language.join(" and "));

console.log(cleanWorkers1.clean());

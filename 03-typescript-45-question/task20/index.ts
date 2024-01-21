/**
 * @param {Question 20}
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */

let cities: string[] = [];

let likeCities:string[] = ["New York", "Bangkok", "danmark","San Francisco"];

for (let i = 0; i < likeCities.length; i++){
    cities.push(likeCities[i]);
}

let moreLikeCities:string[] = ["peshawar","mardan","queta","Multan"]

for (let i = 0; i < moreLikeCities.length; i++){
    cities.push(moreLikeCities[i]);
}


 console.log(`List of cities: ${cities.join(', ')}`);


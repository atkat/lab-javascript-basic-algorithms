// Iteration 1: Names and Input
let hacker1 = 'Alkin';
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Katka';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.lenght) {
    console.log(`The navigator has a longer name. The name is ${hacker2.length} characters long.`)
} else if (hacker2.length > hacker2.lenght){
    console.log(`The driver has a longer name. The name is ${hacker1.length} characters long.`)

} else {
    console.log(`Whaaaat their names is the same length!`)
}

// Iteration 3: Loops

let result = '';

for ( let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase()+' ';
}
console.log(result);


// Bonus 1: 

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lacinia eros. Curabitur a fringilla metus, non lobortis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent placerat molestie quam, id scelerisque elit bibendum a. Curabitur sit amet risus lectus. Aliquam convallis nisi velit, ac porta diam elementum quis. Vivamus rutrum eget dolor quis tristique. Aliquam vehicula laoreet turpis suscipit congue. Duis a tortor eu nisi blandit pellentesque. Sed id ex magna. Nunc eu erat et risus aliquet tempor et non odio. \n Duis urna ex, congue non pharetra eget, semper nec nisl. Nulla arcu ligula, suscipit ut molestie nec, commodo a risus. Maecenas rhoncus ante eget dictum suscipit. Morbi interdum urna sed efficitur pharetra. Vivamus ultricies, neque quis mollis imperdiet, lorem ligula posuere nisi, eget pulvinar justo est vel sapien. Donec sit amet risus consequat, efficitur nunc eget, finibus tellus. Duis pretium massa in risus mattis, id consectetur quam fringilla. Etiam interdum, erat quis dapibus pulvinar, massa ante congue nibh, eget sodales nisi ante id nibh. \n Ut commodo ex ac est vestibulum rhoncus. Praesent aliquam blandit enim nec dapibus. Aenean sed volutpat ligula. Nam quis diam hendrerit, consequat eros in, varius magna. Integer nec mi porta, tristique enim eu, lobortis dolor.Quisque consectetur dictum nisi, id dictum quam vestibulum eu. Cras in varius erat. Nullam hendrerit, dui nec dapibus pharetra, augue sem rutrum nisi, et iaculis leo turpis sed urna. Nullam risus nunc, tempor nec lorem ornare, finibus condimentum odio. Cras condimentum malesuada pulvinar. Nulla accumsan lorem in felis suscipit, nec volutpat massa rhoncus. Praesent vitae ultricies libero. Nulla vitae molestie velit, egestas rhoncus urna. Fusce tristique lectus ligula, non eleifend nisi egestas et. Pellentesque pulvinar id turpis sed tristique.';


let words = text.split(' ');
console.log(words.length);

let numberOfEts = 0;

for (let i=0; i<words.length; i++) {
    if (words[i]=== 'et') {
        numberOfEts ++
    } 
}

console.log(numberOfEts);

// Bonus 2 // 

let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.toLowerCase();

let alphabet = 'abcdefghijklmnopqrstuvwxzy' 
let newPhraseToCheck =''


for (let i=0; i<phraseToCheck.length; i++) {
    if ( alphabet.includes(phraseToCheck[i])) {
        newPhraseToCheck += phraseToCheck[i]
    } 
}

console.log(newPhraseToCheck)

function checkPallindrome (str) {
    let helpStatement;
 
     for (let i=0; i<str.length; i++) {
             if (str[i]===str[str.length-1-i]) {
                 helpStatement = true;
             } else {return "It's not a pallindrome!"};    
     }
     return (helpStatement === true) ? "It's a pallindrome!" : "It's not a pallindrome!";
 }  


checkPallindrome(newPhraseToCheck);




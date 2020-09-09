const myName = 'Spencer Wood';
const statesNumber = '50';
let sum = (5 + 4);
// //
function sayHello() {
    alert('Hello World!')
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry' + name + ', you aren\'t old enough to view this page!')
    };
};
checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

let vegetables = ['lettuce', 'pickle', 'onion', 'garlic', 'peppers'];
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
};

let pet = {
    name: 'Sir Droolington Bonesdigger',
    breed: 'Old English Bulldog'
};
console.log(pet.name);
console.log(pet.breed);

let people = [
    {
        name: 'Dave',
        age: 19
    },

    {
        name: 'Bill',
        age: 21
    },

    {
        name: 'Mandy',
        age: 22
    },


    {
        name: 'Candy',
        age: 18
    },

    {
        name: 'Bill Brasky',
        age: 150
    },

];
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)

}


function getLength(string) {
    return string.length
}
let stringLength = getLength('Hello World!');
if (stringLength % 2 === 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}
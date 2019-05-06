const x = 1;
// x = 2; // error!

const john = {
    name: 'John',
    age: 32
};

// john = { // error
//     name: 'Jonathan',
//     age: 32
// };

john.name = 'Jonathan';
console.log( john );

const days = [ 'Sunday', 'Monday' ];
days[2] = 'Tuesday';
console.log( days );

days = [ 'Sunday', 'Monday', 'Tuesday' ];
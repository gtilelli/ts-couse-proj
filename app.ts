// const person: {
//     name: string;
//     age: number;
//     nickname:string;
//     hobbies: string[];
//     role: [number, string]; // tuple type to be validated by Typescript, not part of Javascript
// } = {
// //const person = {
//     name: 'Giovani',
//     age: 30,
//     nickname: 'Gio',
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 6, 7 are used

const person = {
    name: 'Giovani',
    age: 30,
    nickname: 'Gio',
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};


//person.role.push('admin'); // Typescript doesn´t validate push
//person.role[2] = 10; // ERROR

// person.role = [0, 'admin', 'user']; //ERROR


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.nickname);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // ERROR
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}
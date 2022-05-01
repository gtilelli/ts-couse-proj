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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Giovani',
    age: 30,
    nickname: 'Gio',
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
//person.role.push('admin'); // Typescript doesn´t validate push
//person.role[2] = 10; // ERROR
// person.role = [0, 'admin', 'user']; //ERROR
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // ERROR
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}

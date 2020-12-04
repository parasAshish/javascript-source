//console.log(filter_array(['', 0, 2, 4]))

// function filter_array(array) {
//     array = array.map(isJunk_data);
//     return array;
// }

// function isJunk_data(value) {
//     if (value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// const arr = [2, 4];
// const sample_Function = (val1, curr1) => val1 + curr1;
// const sum = arr.reduce(sample_Function, 10);
// console.log(sum);

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.showName = function() {
    console.log(this.name + '--' + this.surname);
}

function Teacher(name, surname, age) {
    Person.call(this, name, surname);
    let p1 = new Person(name, surname);
    p1.showName();
    this.age = age;
}
let teacher = new Teacher('Ashish', 'Pathak', 30);
//teacher.showName();
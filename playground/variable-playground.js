//var person = {
//    name: 'Andrew',
//    age: 21
//};
//
//function updatePerson (obj) {
////    obj = {
////        name: 'Noah',
////        age: 25
////    };
//    
//    obj.age = 25;
//}
//
//updatePerson(person);
//console.log(person);

var grades = [67, 80];

var app = function addGrades (grades) {
    grades.push(55);
    return grades;
};

var test = app(grades);

//addGrades(grades);
console.log(test);
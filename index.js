// Day 20 challenge
console.log("Day 20 Challenge");
// Question 58
//calculates the average 
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Average of scores
console.log(averageScore(80, 90, 100, 70));
// Question 59:
function Add(addValue) {
    return function (number) {
        return number + addValue;
    };
}
var addnum = Add(5);
console.log(addnum(10));
// Question 60:
var userDetail = (function () {
    var name = "yunh";
    var age = 25;
    // This part shares the user's details
    return {
        userinfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userDetail.userinfo();
// // This profile sets itself up and can share info about the user
// let userProfile = (function() {
//     // The user's details are kept inside
//     let name = "John";
//     let age = 30;
//     // This part shares the user's details
//     return {
//         displayInfo: function() {
//             console.log(`Name: ${name}, Age: ${age}`);
//         }
//     };
// })();
// // Asking the profile to tell us about the user
// userProfile.displayInfo(); // It says the user's name and age
// // We made a self-setup profile that can talk about the user.

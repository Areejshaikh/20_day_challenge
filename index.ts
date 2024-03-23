// Day 20 challenge
console.log ("Day 20 Challenge");

// Question 58
//calculates the average 
function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Average of scores
console.log(averageScore(80, 90, 100, 70)); 




// Question 59:
function Add(addValue: number): (number) => number {
    return function(number: number): number {
        return number + addValue;
    };
}

let addnum = Add(5);
console.log(addnum(10)); 



// Question 60:
let userDetail = (function() {
    let name = "king";
    let age = 25;

    // This part shares the user's details
    return {
         userinfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userDetail.userinfo();



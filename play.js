const userName = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ("My name is" + userName+"."+" age is "+userAge+" has hobbies: "+userHasHobby);
}

console.log(summarizeUser(userName, age, hasHobbies));
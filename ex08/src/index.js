const _ = required('lodash');

function getUsers() {
    let getUsers = new getUsers(); 
}

function findUser(lastName, gender) {
    try {
        lastName = "Doe"; 
    } catch (error) {
        console.log(error);
    }
}
console.log(getUsers());
findUser();
module.exports = findUser;
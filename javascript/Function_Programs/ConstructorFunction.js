function person (firstNamePass,lastNamePass) {
    this.firstName = firstNamePass;
    this.lastName = lastNamePass;
};

const values = new person('John', 'Doe');
console.log(values.firstName);
console.log(values.lastName);
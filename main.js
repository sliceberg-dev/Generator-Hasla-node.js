const generator = require('generate-password');
const passwords = generator.generateMultiple(3, {
   length: 10,
   uppercase: false
});
console.log(passwords);
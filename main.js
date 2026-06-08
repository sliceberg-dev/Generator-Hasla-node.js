
const express = require('express');
const generator = require('generate-password');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/api/generate', (req, res) => {
   const {
    length = 12,
    count = 5,
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
    keyword = ''
} = req.body;

 const passwords = generator.generateMultiple(Number(count), {
    length: Math.max(4, Number(length) - keyword.length),
    uppercase,
    lowercase,
    numbers,
    symbols,
    strict: true
}).map(password => {
    return keyword + password;
});

    res.json({ passwords });
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');

readline.question('Nama : ', name => {
    readline.question('Phone : ', phone => {
        readline.question('Email : ', email => {
            const contacts = JSON.parse(fs.readFileSync('contacts.json'));
            const contact = {
                name,
                phone,
                email
            };
            contacts.push(contact);
            const jsonString = JSON.stringify(contacts)
            fs.writeFileSync('contacts.json', jsonString);
            readline.close();
        });
    });
});
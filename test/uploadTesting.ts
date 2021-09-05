import fs from 'fs';

const file = fs.readFileSync('./test.jpg', 'base64');

const binaryData = atob(file);

console.log(binaryData);

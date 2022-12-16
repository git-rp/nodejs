const fs = require('fs');
//fs.writeFileSync('note.txt', 'test');

fs.appendFileSync('note.txt', 'this is append');

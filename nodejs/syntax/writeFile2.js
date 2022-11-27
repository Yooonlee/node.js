const fs = require('fs').promises;
fs.writeFile('./readme2.txt', '저를 여러 번 읽어보세요.')
    .then(()=>{
        return fs.readFile('./readme2.txt');
    })
    .catch((err)=>{
        console.error(err);
    });
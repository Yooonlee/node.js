const fs = require('fs');

fs.readFile('./readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})

// 읽을 파일의 경로 == node 명령어를 실행하는 콘솔 기준! 




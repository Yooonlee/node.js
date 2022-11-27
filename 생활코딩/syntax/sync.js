
var fs= require('fs');
//readFileSync

//동기적 방식
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');


//비동기적 방식
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});//파일을 읽고 3번째 인자의 함수의 파라미터에 에러가 있다면 err에 에러를 주고, result 에 결과를 준다.
console.log('C');







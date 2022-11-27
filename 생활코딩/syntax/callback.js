// function a(){
//     console.log('A');
// }

var a = function(){
    console.log('A');
}
a();
//자바스크립트에서는 함수가 값이다.

function slowfunc(callback){
    callback();
}
slowfunc(a);
//함수를 파라미터로 넣을 수 있다.






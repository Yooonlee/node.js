const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});

//다른 코드가 들어갈 수 있음
promise
    .then((message)=> {
        console.log(message); // 성공 (resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패 (reject)한 경우 실행
    })
    .finally( () => { //끝나고 무조건 실행
        console.log('무조건');
    });

// 프로미스 내부에서 resolve가 호출되면 then이 실행
// reject 가 호출되면 catch가 실행
// finally 부분은 성공/실패와 관계없이 실행 

//함수 내부에 new Promise가 있어야 then catch문을 사용할 수 있다. 








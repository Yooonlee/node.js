const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, { Location: '/','Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,});
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const qs = require('querystring');
// const { decode } = require('punycode');
// const { parseArgs } = require('util');

// const parseCookies = (cookie = '')=>
//     cookie
//         .split(';')
//         .map(v => v.split('='))
//         .reduce((acc, [k,v]) =>{
//             acc[k.trim()] = decodeURIComponent(v);
//             return acc;   
//         }, {});
    
// http.createServer(async (req,res)=>{
//     const cookies = parseCookies(req.headers.cookie); // {mycookie: 'test'}
//     //주소가 /login으로 시작하는 경우
//     if(req.url.startsWith('/login')){
//         const {query} = url.parse(req.url);
//         const {name} = qs.parse(qurey);
//         const expires = new Date();
//         //쿠키 유효시간을 현재시간 + 5분으로 설정
//         expires.setMinutes(expires.getMinutes() + 5);
//         res.writeHead(302, {
//             Location: '/',
//             'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; Path = /`,
//         });// 302 응답 코드, 리다이렉트 주소와 함께 쿠키를 헤더에 넣는다.  브라우저는 이 응답 코드를 보고 페이지를 해당 주소로 리다이렉트한다. 
//         res.end();
//     }
//     //name이라는 쿠키가 있는 경우
//     else if (cookies.name){
//         res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8' });
//         res.end(`${cookies.name}님 안녕하세요`);
//     }else{
//         try{
//             const data = await fs.readFile('./cookie2.html');
//             res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
//             res.end(data);
//         }catch(err){
//             res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8' });
//             res.end(err.message);
//         }
//     }
// })
// .listen(8084, ()=>{
//     console.log('8084번 포트에서 대기중입니다.');
// });







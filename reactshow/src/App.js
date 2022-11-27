import {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const [todoList, setTodoList] = useState(null);

  const fetchData = async() => {
    const response = await axios.get('http://localhost:8000/cart');
    setTodoList(response.data);    
    // axios.get('http://localhost:8000/cart').then((response)=>{
    //   setTodoList(response.data);
    // });

    // fetch('http://localhost:8000/cart')
    // .then((response) =>  response.json() )
    // .then((data) => setTodoList(data));
  };

  useEffect( ()=>{fetchData()}, []);
     // App.js 한 번 다 실행하고 fetch를 한번만 실행한다. 2번째 인자가 없어서 
  

  // 여기서부터 post
  const onSubmitHandler = (e) => {
    e.preventDefault(); // submit을 눌렀을때 쿼리문에 name, 값을 넣고 get요청을 보내버림. 그것을 방지하는 것
    const text = e.target.text.value; //name= text인 데이터에 value
    const done = e.target.done.checked; // name=done인 데이터에 체크 유무
    await axios.post("http://localhost:8000/api/todo", {text, done});
    fetchData();
    
    // fetch("http://localhost:8000/api/todo", 
    //   {method:'POST',
    //   headers : {
    //     'Content-Type' : 'application/json',
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),})
    //   .then( () => fetchData());
      };
  };


  return {
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}> 
        <input name="text"/>
        <input name="done" type="checkbox"/>
        <input type='submit' value="추가"/>
      </form>
      {todoList? .map((todo) =>{
        <div key ={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ?  'Y' : 'N'}</div>
        </div>
      })}
    </div>
  };
}

export default App

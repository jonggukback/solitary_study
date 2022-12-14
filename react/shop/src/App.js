import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Main } from './view/main.js'
import { Head } from './view/nav.js'
import { Detail } from './view/detail.js'
import { Cart } from './view/cart.js';
import { data } from './data.js';
import { createContext, useState } from 'react';

// context api - state 보관함
export let Context1 = createContext()

function App() {

  let [object, setObject] = useState(data);
  let [재고, 재고조정] = useState([10, 11, 12]);

  return (
    <div className="App">

      <Head />

      <Routes>
        <Route path="/" element={<Main object={object} />}/>
        <Route path="/detail/:id" element={
          <Context1.Provider value={ {재고} }>
            <Detail object={object} />
          </Context1.Provider>
        } />

        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버 페이지</div>} />
          <Route path="location" element={<div>위치 페이지</div>} />
        </Route>

        <Route path="/event" element={<Event />} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>존재하지 않는 페이지 입니다.</div>} />

        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보 페이지</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

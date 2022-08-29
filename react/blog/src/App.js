/* eslint-disable */

import './App.css'; 
import { useState } from 'react';
function App() {

  let post = [
    {
      title: 'Spring 공부',
      content: '스프링 공부를 해야겠다',
      date: '2월 15일',
      like: 0,
    },
    {
      title: 'React 공부',
      content: '리액트 공부를 해야겠다',
      date: '2월 16일',
      like: 0,
    },
    {
      title: '알고리즘 공부',
      content: '알고리즘 공부를 해야겠다',
      date: '2월 17일',
      like: 0,
    },
  ]

  let [postList, setPost] = useState(post);
  let [modal, setModal] = useState(false);
  let [postNum, setPostNum] = useState(0);
  let [inpudData, setInputData] = useState('');

  return (
    <div className="App">

      <div className="black-nav">
        <h4>React-Blog</h4>
      </div>

      {
        postList.map((item,index)=>{
          return (
            <div className="list" key={index}>
              <h4 onClick={()=>{ setPostNum(index); setModal(true) }} > { item.title } 
                <span onClick={ (e)=>{ 
                  e.stopPropagation(); 
                  ++item.like
                  let copy = [...postList];
                  setPost(copy);
                  } } >👍</span> { item.like } 
              </h4>
              <p>{item.date}</p>
              <button onClick={()=>{
                let copy = [...postList];
                copy.splice(index,1);
                setPost(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <span>작성일</span><input id='date' type="date"/><br/>
      <span>제목</span><input id='title' type="text"/><br/>
      <span>상세내용</span><input id='content' type="text"/><br/>
      <button onClick={()=>{
        const date = document.getElementById('date').value,
              title = document.getElementById('title').value,
              content = document.getElementById('content').value;
        const result = {
          title: title,
          content: content,
          date: date,
          like: 0,
        }
        const copy = [...postList];
        copy.push(result);
        setPost(copy);
      }}>작성</button>

      {
        modal === true ? 
        <Modal
          postList={postList}
          postNum={postNum}
          setPost={setPost}
        /> : null
      }

    </div>
  );
}

function Modal(props){
  let postList = props.postList;
  let postNum = props.postNum;

  return (
    <div className="modal">
      <h4>{ postList[postNum].title }</h4>
      <p>{ postList[postNum].date }</p>
      <p>{ postList[postNum].content }</p>
      <button onClick={()=>{ 
        let copy = [...postList];
        copy[0].title = '변경';
        props.setPost(copy);
      }}>글수정</button>
    </div>
  )
}

export default App;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main(props) {

    let object = props.object;
    let [data, setData] = useState(object);
    let [count, setCount] = useState(2);
    
    useEffect(()=>{

    },[data])

    return (
        <div>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                        data.map((item, index)=>{
                            return (
                            <RowData item={item}/>
                            )
                        })
                    }
                </Row>
            </Container>

            <button onClick={()=>{
                if (count === 4){
                    return alert('데이터를 전부 가져왔습니다.');
                }

                let URL = `https://codingapple1.github.io/shop/data${count}.json`

                axios.get(URL)
                .then((result)=>{
                    const copyarr = [...data, ...result.data];
                    setData(copyarr)
                    setCount(count+1)
                })
                .catch(()=>{
                    alert('데이터 요청 실패');
                })
            }}>더보기</button>
        </div>
    );
}

function RowData(props){

    let item = props.item;
    let index = props.item.id;
    let url = item.url;
    if (!url){
        url = 'https://codingapple1.github.io/shop/shoes1.jpg';
    }
    let navigate = useNavigate();

    return (
    <Col sm={4} key={index}>
        <img src={url} width="80%"/>
        <h4 onClick={()=>{ navigate('/detail/'+index) }}>{item.title}</h4>
        <p>{item.content}</p>
    </Col>
    );
}

export { Main }
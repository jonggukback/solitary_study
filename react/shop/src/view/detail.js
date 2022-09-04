import React, { useContext, useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import styled  from 'styled-components';
import {Nav} from 'react-bootstrap';
import { addCart } from '../store';
import {useDispatch} from 'react-redux';

// context api import 하기
import {Context1} from '../App.js';

let ColorBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'black' ?'white' :'black'};
    padding : 10px;
`

function Detail(props) {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    let {재고} = useContext(Context1);

    let [input, setInput] = useState('');
    let [tap, setTap] = useState(0);
    let [fade2, setFade2] = useState('')

    useEffect(()=>{
        setFade2('end2')

        return ()=>{
            setFade2('')
        }
    },[])

    let object = props.object;
    let id = useParams().id;
    let result = null;

    object.map((item)=>{
        if (item.id == id){
            result = item;
        }
    })

    return (
        <div className={`container start2 ${fade2}`}>

            <div className="row">
                <div className="col-md-6">
                    <img src={result.url} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{result.title}</h4>
                    <p>{result.content}</p>
                    <p>{result.price}</p>
                    <p>재고:{재고[0]}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addCart(result))
                        alert('장바구니에 담겼습니다.');
                    }}>장바구니담기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">관련상품</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">비교하기</Nav.Link>
                </Nav.Item>
            </Nav>
            <TapContent tap={tap}/>

            <ColorBtn bg={'black'} onClick={()=>{navigate(-1)}}>뒤로가기</ColorBtn>
        </div> 
    );
}

function TapContent({tap}) {

    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100)

        return ()=>{
            setFade('');
        }
    }, [tap])

    return (
            <div className={`start ${fade}`}>
                {[<div>상세정보 내용입니다.</div>,
                <div>관련상품 내용입니다.</div>,
                <div>비교하기 내용입니다.</div>
                ][tap]}
            </div> 
            ) 

}

export { Detail }
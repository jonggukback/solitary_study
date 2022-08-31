import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';

let ColorBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'black' ?'white' :'black'};
    padding : 10px;
`

function Detail(props) {

    //컴포넌트가 mount, update 될 때 실행.
    useEffect(()=>{
        if (isNaN(input) == true){
            alert('그러지마세요')
        }
    })

    let [input, setInput] = useState('');

    let object = props.object;
    let id = useParams().id;
    let result = null;

    object.map((item)=>{
        if (item.id == id){
            result = item;
        }
    })

    return (
        <div className="container">

            <input onChange={(e)=>{setInput(e.target.value)}}></input>
            <div className="row">
                <div className="col-md-6">
                    <img src={result.url} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{result.title}</h4>
                    <p>{result.content}</p>
                    <p>{result.price}</p>
                    <button className="btn btn-danger" >주문하기</button>
                </div>
            </div>
            <ColorBtn bg={'black'}>뒤로가기</ColorBtn>
        </div> 
    );
}

export { Detail }
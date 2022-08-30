import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

function Main(props) {

    let object = props.object;
    
    return (
        <div>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                    object.map((item, index)=>{
                        return (
                        <RowData item={item}/>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    );
}

function RowData(props){

    let item = props.item;
    let index = props.item.id;
    let navigate = useNavigate();

    return (
    <Col key={index}>
        <img src={item.url} width="80%"/>
        <h4 onClick={()=>{ navigate('/detail/'+index) }}>{item.title}</h4>
        <p>{item.content}</p>
    </Col>
    );
}

export { Main }
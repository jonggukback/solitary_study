import React from 'react';
import {Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { setName, setAge, setCount} from '../store';

function Cart() {

    let product = useSelector((state)=>{ return state.product })
    let user = useSelector((state)=>{ return state.user })
    console.log(product);
    console.log(user);

    let dispatch = useDispatch()
    
    return (
        <div>
            <span>{`${user.name}의 ${user.age}(살) 장바구니`}</span>
            <button onClick={()=>{dispatch(setAge(10)); dispatch(setName('백종국'))}}>나이추가</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(setCount(item.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    );
}

export {Cart};
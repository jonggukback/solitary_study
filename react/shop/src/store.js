import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState 역할
let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },

    reducers : {
        setName(state, name){
            state.name = name.payload
        },
        setAge(state, age){
            state.age += age.payload
        }
    }
})

export let {setName} = user.actions
export let {setAge} = user.actions

let product = createSlice({
    name : 'product',
    initialState : [
        {
            id : 1247,
            title : "White and Black",
            content : "Born in France",
            price : 120000,
            url : "https://codingapple1.github.io/shop/shoes1.jpg",
            count : 10
        },
        
        {
            id : 980,
            title : "Red Knit",
            content : "Born in Seoul",
            price : 110000,
            url : "https://codingapple1.github.io/shop/shoes2.jpg",
            count : 11
        },
    
        {
            id : 457,
            title : "Grey Yordan",
            content : "Born in the States",
            price : 130000,
            url : "https://codingapple1.github.io/shop/shoes3.jpg",
            count : 12
        }
    ],
    reducers : {
        setCount(state, id){
            // state.map((item)=>{
            //     if (item.id === id.payload){
            //         item.count += 1
            //     }
            // })
            let num = state.findIndex((itme)=>{ return itme.id === id.payload })
            state[num].count++;
        },
        addCart(state, object){
            state.push(object.payload);
        },
    }
})

export let {setCount} = product.actions
export let {addCart} = product.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        product : product.reducer,        
    }
}) 
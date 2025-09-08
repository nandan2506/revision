import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 0
}

const counterSlice = createSlice({
    initialState,
    name:"countSlice",
    reducers:{
        countPlus:(state)=>{
        state.count+=1
    },
    countMinus:(state)=>{
        state.count-=1
    },
    countReset:(state)=>{
        state.count=0
    }
    }
})

export const {countPlus,countMinus,countReset} = counterSlice.actions
export default counterSlice.reducer
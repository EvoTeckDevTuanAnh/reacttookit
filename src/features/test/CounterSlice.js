import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    valuetest: 0,
    amoutValuetest: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increasetest: (state) => {
            state.valuetest += 1
        },
        decreasetest: (state) => {
            state.valuetest -= 1
        },
        increateByAmounttest: (state, action) => {
            state.valuetest += action.payload
        },
        amountValuetest: (state, amount) => {
            state.amoutValuetest = state.valuetest
        }
    }
})

// Action creators are generated for each case reducer function
export const { increasetest, decreasetest, increateByAmounttest, amountValuetest } = counterSlice.actions;

export default counterSlice.reducer;
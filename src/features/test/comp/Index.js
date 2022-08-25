import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increasetest, decreasetest, amountValuetest } from '../CounterSlice'

export function Index() {
    const count = useSelector((state) => state.test.valuetest) // lay du lieu tu store
    const amount = useSelector((state) => state.test.amoutValuetest) // lay du lieu tu store

    const dispatch = useDispatch() // de thuc hien action

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increasetest())}
                >
                    Increment
                </button>
                <span>{count}</span><br />
                <span>{amount}</span><br />
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decreasetest())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(amountValuetest())}
                >
                    getAmount
                </button>
            </div>
        </div>
    )
}
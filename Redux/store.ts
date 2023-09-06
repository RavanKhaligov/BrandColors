"use client"
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorsSlice";

const rootReducer = combineReducers({
    colors:colorsSlice
})
export function makeStore(){
    return configureStore({
        reducer:rootReducer
    })
}
export const store = makeStore()


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
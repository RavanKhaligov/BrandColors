'use client'

import { colorSliceTypes, colorTypes } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import BrandsData from '../utils/brands.json'

const initialState : colorSliceTypes = {
    items: [...Object.values(BrandsData)].slice(0,10),
    brandsArray:[...Object.values(BrandsData)],
    brands:[...Object.values(BrandsData)],
    selectedBrands: JSON.parse(localStorage.getItem("selected") || '[]'),
    copied: '',
    isShowing: false,
    search: ''
}
export const colorsSlice = createSlice({
    name:"colorsSlice",
    initialState,
    reducers:{
        setBrands:(state,action : PayloadAction<colorTypes[]>) =>{
            state.brands = action.payload
        },
        setSelectedBrands: (state,action : PayloadAction<string[]>) =>{
            state.selectedBrands = action.payload
            localStorage.setItem("selected",JSON.stringify(state.selectedBrands))
        },
        setCopied: (state,action: PayloadAction<string>) =>{
            state.copied = action.payload
        },
        setIsShowing: (state,action:PayloadAction<boolean>) =>{
            state.isShowing = action.payload
        },
        setSearch: (state,action: PayloadAction<string>)=>{
            state.search = action.payload
        },
        setItems: (state,action: PayloadAction<colorTypes[]>) =>{
            state.items = action.payload
        }
    }
})

export const {setBrands,setSelectedBrands,setCopied,setIsShowing,setSearch,setItems} = colorsSlice.actions
export default colorsSlice.reducer
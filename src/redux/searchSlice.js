import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: "",
        colomn: "ID",
        order: true,
        currentPage: 1
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        setColomn: (state, action) => {
            state.colomn = action.payload
        },
        setOrder: (state) => {
            state.order = !state.order
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})


export default searchSlice.reducer
export const { setValue, setColomn, setOrder, setCurrentPage } = searchSlice.actions
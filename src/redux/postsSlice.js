import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
            if (!response.ok) {
                throw new Error("Something went wrong...")
            }
            const posts = await response.json()
            return posts
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = "loading"
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.status = "success"
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }

})


export default postsSlice.reducer
export const { setSearch } = postsSlice.actions
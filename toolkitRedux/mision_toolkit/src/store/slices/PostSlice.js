import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/PostAction'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

const postSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state,action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const {postLoading,postError,postSuccess} = postSlice.actions
export default postSlice.reducer
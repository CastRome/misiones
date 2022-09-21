import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  value:0
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeText(state, action) {state.username = action.payload} ,
     
  },
})

// Action
export const {changeText } = textSlice.actions

export default textSlice.reducer
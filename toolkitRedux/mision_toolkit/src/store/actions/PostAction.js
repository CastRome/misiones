import axios from "axios"
import {createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('fetchPost', async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
})
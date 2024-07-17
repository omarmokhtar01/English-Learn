import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchExamples = createAsyncThunk('example/get', async (url,thunkAPI) => {
    try{
    const res = await axios.get(url)
    return res.data
    }
    catch(error){
      return thunkAPI.rejectWithValue(error)
      }
  })

import { createSlice } from '@reduxjs/toolkit'
import { fetchExamples } from '../actions/exampleAction';

const initialState = {
  examples: [],
  isLoading: false,
  error: null,
}

export const exampleSlice = createSlice({
  name: 'examples',
  initialState,
  reducers: {
    
  },
extraReducers: (builder) => {
  builder
    .addCase(fetchExamples.pending, (state,) => {
      state.isLoading=true;
      state.error=null
    })
    .addCase(fetchExamples.fulfilled, (state, action) => {
      state.examples=action.payload;
      state.isLoading=false;
      state.error=null

    })
    .addCase(fetchExamples.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action?.error?.message;

    });
},
});


export default exampleSlice.reducer
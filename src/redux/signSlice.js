import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchSign = createAsyncThunk('sign', async (id) => {
  const res = await fetch( `http://127.0.0.1:7000/sign/${id}`);
  return res.json();
})

export const fetchCreateUser = createAsyncThunk('sign', async (user) => {
  const res = await fetch("http://127.0.0.1:7000/create", {
      headers: {
        "Content-type": "application/json; charset=utf-8"
        },
      method: 'POST',
      body: user
  });
  return res.json();
})  

export const fetchUpdateSign = createAsyncThunk('sign', async (param) => {
  const res = await fetch(`http://127.0.0.1:7000/update/${param.id}`, {
      headers: {
      "Content-type": "application/json"
      },      
      method: 'PUT',
      body: param.data
  });
  return res.json();
})  

const signSlice = createSlice({
    name: 'sign',
    initialState: {
      data: {},
      error: "",
      status: undefined
    },  
    reducers: {
      closeProfile: () => {
        return {
          data: {},
          status: undefined
        }
      }
    },
    extraReducers: {
      [fetchSign.fulfilled]: (state, action) => {
        return {
          data: action.payload,
          status: "success"
        }
      },
      [fetchSign.pending]: (state, action) => {
        return {
          data: state.data,
          status: "loading"
        }
      },
      [fetchSign.rejected]: (state, action) => {
        return {
          data: state.data,
          status: "error"+action.payload
        }
      }
    }
  
  })

  export const { closeProfile } = signSlice.actions

  export default signSlice.reducer

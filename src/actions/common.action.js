import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getAge = createAsyncThunk('common/GET_AGE', async (param) => {
  return {
    age: 30,
  }
})

const initialState = {
  age: 0,
}

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setAge: (state, {payload}) => {
      state.age = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAge.fulfilled, (state, {payload}) => {
      state.age = payload
    })
    builder.addCase(getAge.rejected, (state, {payload}) => {
      state.age = 0
    })
  },
})

export const commonAction = {...common.actions, getAge}
export default common.reducer

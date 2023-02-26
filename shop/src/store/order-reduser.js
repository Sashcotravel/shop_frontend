import { createSlice } from '@reduxjs/toolkit'
import { fetchOrder } from "../API/post";

const initialState = {
  order: {
    total: 0,
    post: '',
    createdAt: null,
    order: [],
    status: 'loading'
  },
}

const postsSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.posts.items = []
      state.posts.status = 'loading'
    },
    [fetchOrder.fulfilled]: (state, action) => {
      state.posts.items = action.payload
      state.posts.status = 'loaded'
    },
    [fetchOrder.rejected]: (state) => {
      state.posts.items = []
      state.posts.status = 'error'
    }
  }
})

export const postsReducer = postsSlice.reducer
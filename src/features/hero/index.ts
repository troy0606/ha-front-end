import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IHeroData } from "./model";
import * as heroApi from './api';

export type THeroListData = Array<IHeroData>;

interface IHereoList {
  list: THeroListData;
}

const initialState: IHereoList = {
  list: [],
};

export const getRemoteList = createAsyncThunk(
  'heroList/getList',
  async () => {
    const response = await heroApi.getList();
    return response.data
  }
)

export const heroListSlice = createSlice({
  name: 'heroList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRemoteList.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload
    })
  },
})

export default heroListSlice.reducer;
import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostStateType } from "../../types/PostStateType";

const initialState: PostStateType = {
  list: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;

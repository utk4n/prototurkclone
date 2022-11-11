import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostStateType } from "../../types/PostStateType";

const initialState: PostStateType = {
  id: nanoid(),
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import questionReducer from "./questionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});

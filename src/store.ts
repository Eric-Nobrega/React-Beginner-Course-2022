import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserStateValue {
  username: string;
}

interface UserState {
  value: UserStateValue;
}

const initialState = { value: { username: "" } } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    },

    logout: (state: UserState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
/*
The createSlice() function from the @reduxjs/toolkit library 
automatically generates a set of action creators based on the 
reducers that you define in the reducers field.
*/

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

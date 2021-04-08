import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean;
  errors: null | Error;
  token: string | null;
  register: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  errors: null,
  token: null,
  register: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    start(state) {
      if (!state.isLoading) state.isLoading = true;
      if (state.errors) state.errors = null;
      if (state.token) state.token = null;
    },
    success(state, action: PayloadAction<string>) {
      if (state.isLoading) state.isLoading = false;
      state.token = action.payload;
    },
    failure(state, action: PayloadAction<Error>) {
      if (state.isLoading) state.isLoading = false;
      if (state.token) state.token = null;
      state.errors = action.payload;
    },
    toggleRegister(state) {
      state.register = !state.register;
    },
  },
});

export const { start, failure, success, toggleRegister } = authSlice.actions;

export default authSlice.reducer;

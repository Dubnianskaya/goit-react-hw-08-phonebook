import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoadingCurrentUser: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state) {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
          },
        [authOperations.refreshUser.pending](state) {
            state.isLoadingCurrentUser = true;
        },
        [authOperations.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoadingCurrentUser = false;
        },
        [authOperations.refreshUser.rejected](state) {
            state.isLoadingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;
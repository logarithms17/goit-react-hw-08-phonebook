import { createSlice } from "@reduxjs/toolkit"

import { register, logIn, logOut, refreshUser } from "./authOperations"

const initialAuthState = {
    user: {name: null, email: null},
    token: localStorage.getItem('authToken') || null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
                localStorage.setItem('authToken', action.payload.token);
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
                localStorage.setItem('authToken', action.payload.token);
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {name: null, email: null}
                state.token = null
                state.isLoggedIn = false
                localStorage.removeItem('authToken');
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                console.log('entered refreshUser')
                state.user = action.payload
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            .addCase(refreshUser.rejected, (state) => {
                console.log('entered reject refreshUser')
                state.isRefreshing = false
            })
    }
})

export default authSlice.reducer

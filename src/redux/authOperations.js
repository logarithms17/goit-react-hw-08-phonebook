import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk(
    'auth/register',
    async ({name, email, password}, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', {
                name,
                email,
                password
            })
            setAuthHeader(response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async ({email, password}, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', {
                email,
                password
            })
            setAuthHeader(response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await axios.post('/users/logout')
            clearAuthHeader()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user')
        }

        try {
            const response = await axios.get('/users/current', {
                headers: {
                    Authorization: `Bearer ${persistedToken}`,
                },
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


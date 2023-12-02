import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const result = await axios.post('/users/signup', user);
      console.log(user);
      setAuthHeader(result.data.token);
      console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.API.rejectedWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const result = await axios.post('/users/login', user);
    setAuthHeader(result.data.token);
    return result.data;
  } catch (error) {
    return thunkAPI.API.rejectedWithValue(error.message);
  }
});

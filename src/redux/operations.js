import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL =
    'https://6555fa3a84b36e3a431ec267.mockapi.io/contacts';
  
    export const fetchContacts = createAsyncThunk(
        'contacts/fetchAll',
        async (_, thunkAPI) => {
            try {
                const response = await axios('/contacts');
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
);
    
export const addContact = createAsyncThunk(
    'contacts/addContact',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

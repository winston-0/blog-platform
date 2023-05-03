import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { registerUser, reloginUser, loginUser, updateUser } from '../blogApi/blogApi'

const initialState = {
  loggedIn: false,
  name: null,
  profileImage: null,
  email: null,
  loading: localStorage.getItem('token') ? true : false,
  error: 0,
  errorList: null,
}

export const requestToSignUp = createAsyncThunk('registerUser', async (body, { rejectWithValue }) => {
  try {
    const request = await registerUser(body)
    return request
  } catch (error) {
    return rejectWithValue(error.body)
  }
})

export const requestToUpdateUser = createAsyncThunk('requestToUpdateUser', async (body, { rejectWithValue }) => {
  try {
    const request = await updateUser(body)
    return request
  } catch (error) {
    return rejectWithValue(error.body)
  }
})

export const relogin = createAsyncThunk('relogin', async () => {
  const request = await reloginUser()
  return request
})
export const login = createAsyncThunk('login', async (body) => {
  const request = await loginUser(body)
  return request
})

const profileSlice = createSlice({
  initialState: initialState,
  name: 'profileData',
  reducers: {
    logOut: (state) => {
      for (let i in state) {
        if (i === 'loggedIn') {
          state.loggedIn = false
        } else {
          state[i] = null
        }
      }
    },
    clearErrors: (state) => {
      state.error = 0
      state.errorList = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestToSignUp.fulfilled, (state, action) => {
        state.loggedIn = true
        state.loading = false
        state.email = action.payload.email
        state.name = action.payload.username
      })
      .addCase(requestToSignUp.pending, (state) => {
        state.loading = true
      })
      .addCase(requestToSignUp.rejected, (state, action) => {
        state.error += 1
        state.loading = false
        // console.log(action)
        state.errorList = action.payload
      })
      .addCase(relogin.fulfilled, (state, action) => {
        state.loggedIn = true
        state.loading = false
        state.email = action.payload.email
        state.name = action.payload.username
        state.profileImage = action.payload.image
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loggedIn = true
        state.loading = false
        state.email = action.payload.email
        state.name = action.payload.username
        state.profileImage = action.payload.image
        state.error = 0
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        state.error += 1
      })
      .addCase(requestToUpdateUser.fulfilled, (state, action) => {
        state.loading = false
        state.email = action.payload.email
        state.name = action.payload.username
        state.profileImage = action.payload.image
      })
      .addCase(requestToUpdateUser.pending, (state) => {
        state.loading = true
      })
      .addCase(requestToUpdateUser.rejected, (state, action) => {
        state.error += 1
        state.loading = false
        state.errorList = action.payload
      })
  },
})

export default profileSlice.reducer
export const { logOut, clearErrors } = profileSlice.actions

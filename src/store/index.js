import { configureStore } from '@reduxjs/toolkit'

import articlesSlice from './articlesSlice'
import profileSlice from './profileSlice'

const store = configureStore({
  reducer: {
    articlesData: articlesSlice,
    profileData: profileSlice,
  },
})

export default store

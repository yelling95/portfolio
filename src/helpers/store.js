import {configureStore, isRejectedWithValue} from '@reduxjs/toolkit'
import rootReducer from '../actions'

export const handleError = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.code === 401) {
    }
  }

  return next(action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(handleError),
})

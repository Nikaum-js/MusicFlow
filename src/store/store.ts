import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import user from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    user,
  },
  enhancers: [applyMiddleware(thunk)],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

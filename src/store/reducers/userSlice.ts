import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

import { getUserInformation } from '../../pages/Home/endpoints/endpoints'

export const authUser = (token: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getUserInformation(token)

      if (data) {
        dispatch(
          setUser({
            token,
            name: data.name,
            nickname: data.nickname,
            avatar: data.avatar,
          }),
        )
      } else {
        dispatch(clearUser())

        throw Error
      }
    } catch (error) {
      dispatch(clearUser())

      throw error
    }
  }
}

export interface UserState {
  name: string | null
  nickname: string | null
  avatar: string | null
  token: string | null
}

const initialState: UserState = {
  name: null,
  avatar: null,
  nickname: null,
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    clearUser: () => {
      return initialState
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export const getUser = (state: RootState) => state.user

export default userSlice.reducer

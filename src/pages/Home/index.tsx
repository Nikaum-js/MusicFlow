import { useSpotify } from '../../hooks/useSpotify'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'
import { authUser, getUser } from '../../store/reducers/userSlice'
import { useCallback, useEffect } from 'react'

export function Home() {
  const token = useSpotify()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // async function handleGetUserTopTracks() {
  //   const tracks = await getTopTracks()

  //   console.log(tracks)
  // }

  // handleGetUserTopTracks()

  const handleAuthUser = useCallback(async () => {
    try {
      await dispatch(authUser(token))
    } catch (err) {
      navigate('/')
    }
  }, [dispatch, navigate, token])

  useEffect(() => {
    handleAuthUser()
  }, [handleAuthUser])

  return <></>
}

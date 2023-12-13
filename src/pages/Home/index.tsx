import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { useSpotify } from '../../hooks/useSpotify'
import { useAppDispatch } from '../../store/hooks'
import { authUser } from '../../store/reducers/userSlice'
import Styles from './styles'

export function Home() {
  const token = useSpotify()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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

  return (
    <Styles.Container>
      <Header />
    </Styles.Container>
  )
}

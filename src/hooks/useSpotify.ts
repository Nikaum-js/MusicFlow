import { useEffect, useState } from 'react'
import { getTokenFromUrl } from '../services/spotify'
import SpotifyWebApi from 'spotify-web-api-js'

interface Data {
  name: string
  avatarUrl: string
}

export function useSpotify() {
  const [data, setData] = useState<Data>()

  const spotify = new SpotifyWebApi()

  useEffect(() => {
    const _spotifyToken: string = getTokenFromUrl().access_token
    spotify.setAccessToken(_spotifyToken)

    try {
      // Não consegui achar a tipagem dessa API :(
      spotify.getMe().then((user: any) => {
        setData({
          name: user.display_name || '',
          avatarUrl: user.images[0].url,
        })
      })
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error)
    }
  }, [])

  return data
}

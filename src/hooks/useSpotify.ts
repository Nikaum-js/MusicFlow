import { getTokenFromUrl } from '../services/spotify'

export function useSpotify() {
  const _spotifyToken: string = getTokenFromUrl().access_token

  return _spotifyToken
}

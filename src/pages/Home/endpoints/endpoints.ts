import { fetchWebApi } from '../../../services/spotify'

interface Artist {
  name: string
}

interface Track {
  name: string
  artists: Artist[]
}

interface FormattedTrack {
  music: string
  artist: string
}

interface User {
  name: string
  avatar: string
  nickname: string
}

export async function getTopTracks(token: string): Promise<FormattedTrack[]> {
  const topTracks: Track[] = (
    await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=20',
      'GET',
      undefined,
      token,
    )
  ).items

  const formattedTracks: FormattedTrack[] = topTracks?.map(
    (topTrack: Track) => {
      return {
        music: topTrack.name,
        artist: topTrack.artists.map((artist) => artist.name).join(', '),
      }
    },
  )

  return formattedTracks
}

export async function getUserInformation(token: string): Promise<any> {
  try {
    const user: any = await fetchWebApi('v1/me', 'GET', undefined, token)

    const formattedUser: User = {
      name: user?.display_name,
      nickname: user.id,
      avatar: user.images[0].url,
    }

    return formattedUser
  } catch (err) {
    console.log(err)
  }
}

import { fetchWebApi } from '../../../services/spotify'

interface Artist {
  name: string
}

interface Image {
  url: string
}

interface Album {
  images: Image[]
}

interface Track {
  name: string
  album: Album
  artists: Artist[]
}

interface FormattedTrack {
  music: string
  artist: string
  album: Image
}

interface User {
  name: string
  avatar: string
  nickname: string
}

export async function getTopTracks(token: string): Promise<FormattedTrack[]> {
  try {
    const topTracksResponse = await fetchWebApi(
      'v1/me/top/tracks?time_range=short_term&limit=50',
      'GET',
      undefined,
      token,
    )

    const topTracks: Track[] = topTracksResponse.items

    const formattedTracks: FormattedTrack[] = topTracks.map(
      (topTrack: Track) => {
        return {
          music: topTrack.name,
          album: topTrack.album.images[0],
          artist: topTrack.artists.map((artist) => artist.name).join(', '),
        }
      },
    )

    return formattedTracks
  } catch (err) {
    console.error(err)

    throw err
  }
}

export async function getUserInformation(token: string): Promise<User> {
  try {
    const userResponse: any = await fetchWebApi(
      'v1/me',
      'GET',
      undefined,
      token,
    )

    const formattedUser: User = {
      name: userResponse?.display_name,
      nickname: userResponse.id,
      avatar: userResponse.images[0]?.url || '',
    }

    return formattedUser
  } catch (err) {
    console.error(err)

    throw err
  }
}

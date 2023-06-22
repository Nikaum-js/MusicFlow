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

export async function getTopTracks(): Promise<FormattedTrack[]> {
  const topTracks: Track[] = (
    await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=20',
      'GET',
      undefined,
    )
  ).items

  console.log(topTracks)

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

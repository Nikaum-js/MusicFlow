import { Header } from '../../components/Header'
import { getTopTracks } from './endpoints/endpoints'

export function Home() {
  // const token = useSpotify()

  const playlistId = '1KqsZ95K9YEl9nOMw7V17K'

  async function handleGetUserTopTracks() {
    const tracks = await getTopTracks()

    console.log(tracks)
  }

  handleGetUserTopTracks()

  return <></>
}

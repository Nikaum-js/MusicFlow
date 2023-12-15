import { SquaresFour } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardArtist } from '../../components/CardArtist'
import { CardTrack } from '../../components/CardTrack'
import { Header } from '../../components/Header'
import { useSpotify } from '../../hooks/useSpotify'
import { useAppDispatch } from '../../store/hooks'
import { authUser } from '../../store/reducers/userSlice'
import { getTopArtist, getTopTracks } from './endpoints/endpoints'
import Styles from './styles'

import 'keen-slider/keen-slider.min.css'

interface Image {
  url: string
}

interface FormattedTrack {
  music: string
  artist: string
  album: Image
}

const toggleViewTypeMap: Record<'list' | 'carousel', 'list' | 'carousel'> = {
  list: 'carousel',
  carousel: 'list',
}

export function Home() {
  const [viewTrackType, setViewTrackType] = useState<'list' | 'carousel'>(
    'carousel',
  )
  const [viewArtistType, setViewArtistType] = useState<'list' | 'carousel'>(
    'carousel',
  )
  const [topTracks, setTopTracks] = useState<FormattedTrack[]>()
  const [topArtist, setTopArtist] = useState<any[]>()

  const token = useSpotify()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [artistSliderRef] = useKeenSlider({
    slides: {
      perView: 9.2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1560px)': {
        slides: {
          perView: 8.2,
          spacing: 16,
        },
      },
      '(max-width: 1480px)': {
        slides: {
          perView: 7.2,
          spacing: 16,
        },
      },
      '(max-width: 1280px)': {
        slides: {
          perView: 6.2,
          spacing: 16,
        },
      },
      '(max-width: 1060px)': {
        slides: {
          perView: 5.2,
          spacing: 16,
        },
      },
      '(max-width: 860px)': {
        slides: {
          perView: 4.2,
          spacing: 12,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 3.2,
          spacing: 12,
        },
      },
      '(max-width: 580px)': {
        slides: {
          perView: 3.2,
          spacing: 8,
        },
      },
      '(max-width: 520px)': {
        slides: {
          perView: 3.1,
          spacing: 8,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2.4,
          spacing: 8,
        },
      },
      '(max-width: 420px)': {
        slides: {
          perView: 2.3,
          spacing: 8,
        },
      },
    },
  })

  const [trackSliderRef] = useKeenSlider({
    slides: {
      perView: 9.2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1560px)': {
        slides: {
          perView: 8.2,
          spacing: 16,
        },
      },
      '(max-width: 1480px)': {
        slides: {
          perView: 7.2,
          spacing: 16,
        },
      },
      '(max-width: 1280px)': {
        slides: {
          perView: 6.2,
          spacing: 16,
        },
      },
      '(max-width: 1060px)': {
        slides: {
          perView: 5.2,
          spacing: 16,
        },
      },
      '(max-width: 860px)': {
        slides: {
          perView: 4.2,
          spacing: 12,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 3.2,
          spacing: 12,
        },
      },
      '(max-width: 580px)': {
        slides: {
          perView: 3.2,
          spacing: 8,
        },
      },
      '(max-width: 520px)': {
        slides: {
          perView: 3.1,
          spacing: 8,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2.4,
          spacing: 8,
        },
      },
      '(max-width: 420px)': {
        slides: {
          perView: 2.3,
          spacing: 8,
        },
      },
    },
  })

  function handleToggleTrackViewType() {
    setViewTrackType(toggleViewTypeMap[viewTrackType])
  }

  function handleToggleArtistViewType() {
    setViewArtistType(toggleViewTypeMap[viewArtistType])
  }

  const handleAuthUser = useCallback(async () => {
    try {
      await dispatch(authUser(token))
    } catch (err) {
      navigate('/')
    }
  }, [dispatch, navigate, token])

  const getAllTopTracksAndArtists = useCallback(async () => {
    const responseTopTracks = await getTopTracks(token)
    const responseTopArtists = await getTopArtist(token)

    setTopArtist(responseTopArtists)
    setTopTracks(responseTopTracks)
  }, [token])

  useEffect(() => {
    handleAuthUser()
    getAllTopTracksAndArtists()
  }, [getAllTopTracksAndArtists, handleAuthUser])

  return (
    <>
      <Header />

      <Styles.Container>
        <Styles.Content>
          <Styles.TopTracks>
            <div className="top-musics">
              <div className="info-text">
                <h1>Músicas mais ouvidas</h1>
                <h3>Suas principais músicas das últimas quatro semanas</h3>
              </div>

              <button onClick={() => handleToggleTrackViewType()}>
                <SquaresFour size={28} color="#fff" />
              </button>
            </div>

            {topTracks?.length! > 0 && viewTrackType === 'carousel' ? (
              <Styles.TopTracksAndArtistCarousel
                ref={trackSliderRef}
                className="keen-slider"
              >
                {topTracks?.map((track, index) => (
                  <CardTrack
                    key={`${index} - ${track.music}`}
                    className="keen-slider__slide"
                    placing={index}
                    artist={track.artist}
                    name={track.music}
                    urlAlbum={track.album.url}
                  />
                ))}
              </Styles.TopTracksAndArtistCarousel>
            ) : (
              <Styles.TopTracksAndArtistList>
                {topTracks?.map((track, index) => (
                  <CardTrack
                    key={`${index} - ${track.music}`}
                    placing={index}
                    artist={track.artist}
                    name={track.music}
                    urlAlbum={track.album.url}
                  />
                ))}
              </Styles.TopTracksAndArtistList>
            )}
          </Styles.TopTracks>

          <Styles.TopArtist>
            <div className="top-musics">
              <div className="info-text">
                <h1>Artistas mais ouvidos</h1>
                <h3>Seus principais artistas das últimas quatro semanas</h3>
              </div>

              <button onClick={() => handleToggleArtistViewType()}>
                <SquaresFour size={28} color="#fff" />
              </button>
            </div>

            {topArtist?.length! > 0 && viewArtistType === 'carousel' ? (
              <Styles.TopTracksAndArtistCarousel
                ref={artistSliderRef}
                className="keen-slider"
              >
                {topArtist?.map((artist, index) => (
                  <CardArtist
                    key={`${index} - ${artist.name}`}
                    placing={index}
                    className="keen-slider__slide"
                    avatar={artist.avatar}
                    name={artist.name}
                  />
                ))}
              </Styles.TopTracksAndArtistCarousel>
            ) : (
              <Styles.TopTracksAndArtistList>
                {topArtist?.map((artist, index) => (
                  <CardArtist
                    key={`${index} - ${artist.name}`}
                    placing={index}
                    avatar={artist.avatar}
                    name={artist.name}
                  />
                ))}
              </Styles.TopTracksAndArtistList>
            )}
          </Styles.TopArtist>
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

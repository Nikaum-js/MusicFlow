import { SquaresFour } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardTrack } from '../../components/CardTrack'
import { Header } from '../../components/Header'
import { useSpotify } from '../../hooks/useSpotify'
import { useAppDispatch } from '../../store/hooks'
import { authUser } from '../../store/reducers/userSlice'
import { getTopTracks } from './endpoints/endpoints'
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
  const [viewType, setViewType] = useState<'list' | 'carousel'>('carousel')
  const [topTracks, setTopTracks] = useState<FormattedTrack[]>()

  const token = useSpotify()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [sliderRef] = useKeenSlider({
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

  function handleToggleViewType() {
    setViewType(toggleViewTypeMap[viewType])
  }

  const handleAuthUser = useCallback(async () => {
    try {
      await dispatch(authUser(token))
    } catch (err) {
      navigate('/')
    }
  }, [dispatch, navigate, token])

  const getAllTopTracks = useCallback(async () => {
    const response = await getTopTracks(token)

    setTopTracks(response)
  }, [token])

  useEffect(() => {
    handleAuthUser()
    getAllTopTracks()
  }, [getAllTopTracks, handleAuthUser])

  return (
    <>
      <Header />

      <Styles.Container>
        <Styles.Content>
          <div className="top-musics">
            <div className="info-text">
              <h1>Músicas mais ouvidas</h1>
              <h3>Suas principais músicas das últimas quatro semanas</h3>
            </div>

            <button onClick={() => handleToggleViewType()}>
              <SquaresFour size={28} color="#fff" />
            </button>
          </div>

          {topTracks?.length! > 0 && viewType === 'carousel' ? (
            <Styles.TopTracksCarousel ref={sliderRef} className="keen-slider">
              {topTracks?.map((track, index) => (
                <CardTrack
                  key={index}
                  className="keen-slider__slide"
                  placing={index}
                  artist={track.artist}
                  name={track.music}
                  urlAlbum={track.album.url}
                />
              ))}
            </Styles.TopTracksCarousel>
          ) : (
            <Styles.TopTracksList>
              {topTracks?.map((track, index) => (
                <CardTrack
                  key={index}
                  placing={index}
                  artist={track.artist}
                  name={track.music}
                  urlAlbum={track.album.url}
                />
              ))}
            </Styles.TopTracksList>
          )}
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

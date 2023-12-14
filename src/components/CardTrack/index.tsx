import Styles from './styles'

interface CardTrackProps {
  name: string
  artist: string
  urlAlbum: string
  placing: number
  className?: string
}

export function CardTrack({
  artist,
  urlAlbum,
  name,
  placing,
  className,
}: CardTrackProps) {
  return (
    <Styles.Container className={className}>
      <img src={urlAlbum} alt={`imagem do album da musica ${name}`} />

      <div className="infos">
        <strong>{`${placing + 1} - ${name}`}</strong>
        <p>{artist}</p>
      </div>
    </Styles.Container>
  )
}

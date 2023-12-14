import Styles from './styles'

interface CardArtistProps {
  name: string
  avatar: string
  placing: number
  className?: string
}

export function CardArtist({
  name,
  avatar,
  className,
  placing,
}: CardArtistProps) {
  return (
    <Styles.Container className={className}>
      <img src={avatar} alt={`imagem do artista ${name}`} />

      <div className="infos">
        <strong>{`${placing + 1} - ${name}`}</strong>
      </div>
    </Styles.Container>
  )
}

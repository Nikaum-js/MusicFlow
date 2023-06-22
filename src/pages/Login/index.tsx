import spotify from '../../assets/spotify.svg'
import { loginURL } from '../../services/spotify'

import Styles from './styles'

export function Login() {
  return (
    <Styles.Container>
      <Styles.Content>
        <h1>
          Musi<span>Flow</span>
        </h1>

        <p>O WebPlayer para quem gosta de música!</p>

        <a href={loginURL}>
          <img src={spotify} alt="spotify" />
          Login com o Spotify
        </a>
      </Styles.Content>
    </Styles.Container>
  )
}

import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/reducers/userSlice'
import Styles from './styles'

export function Sidebar() {
  const user = useAppSelector(getUser)

  return (
    <Styles.Sidebar>
      <Styles.Profile>
        <img
          src={
            user.avatar ||
            'https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png'
          }
          alt={`avatar do ${user.name}`}
        />

        <div className="user-information">
          <strong>{user.name}</strong>
          <span>{`@${user.nickname}`}</span>
        </div>
      </Styles.Profile>

      <nav>
        <ul>
          <li>
            <a href="">Artistas mais escutados</a>
          </li>
          <li>
            <a href=""> Músicas mais escutadas</a>
          </li>
          <li>
            <a href="">Gêneros mais escutados</a>
          </li>
        </ul>
      </nav>
    </Styles.Sidebar>
  )
}

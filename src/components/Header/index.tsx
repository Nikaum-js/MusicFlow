import MusicFlowLogo from '../../assets/logo.svg'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/reducers/userSlice'
import Styles from './styles'

export function Header() {
  const user = useAppSelector(getUser)

  return (
    <Styles.Header>
      <Styles.Content>
        <img src={MusicFlowLogo} alt="" />

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
          </div>
        </Styles.Profile>
      </Styles.Content>
    </Styles.Header>
  )
}

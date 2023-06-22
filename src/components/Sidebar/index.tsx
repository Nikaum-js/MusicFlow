import Styles from './styles'

interface SidebarProps {
  avatarUrl: string
  name: string
}

export function Sidebar({ name, avatarUrl }: SidebarProps) {
  return (
    <Styles.Sidebar>
      <Styles.Profile>
        <img
          src={
            avatarUrl ||
            'https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png'
          }
          alt={`avatar do ${name}`}
        />

        <div className="user-information">
          <strong>Nikaum</strong>
          <span>@Nikaum</span>
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

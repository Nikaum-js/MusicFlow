import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import Styles from './styles'
import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Styles.LayoutContainer>
        <Sidebar
          avatarUrl="https://avatars.githubusercontent.com/u/62979208?v=4"
          name="Nikaum"
        />

        <Styles.LayoutContent>
          <Outlet />
        </Styles.LayoutContent>
      </Styles.LayoutContainer>
    </>
  )
}

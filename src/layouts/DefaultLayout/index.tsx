import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import Styles from './styles'
import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Styles.LayoutContainer>
        <Sidebar />

        <Styles.LayoutContent>
          <Outlet />
        </Styles.LayoutContent>
      </Styles.LayoutContainer>
    </>
  )
}

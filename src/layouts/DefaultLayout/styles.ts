import { styled } from 'styled-components'

const LayoutContent = styled.aside`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  padding: 2.5rem;
`
const LayoutContainer = styled.main`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
`

export default {
  LayoutContainer,
  LayoutContent,
}

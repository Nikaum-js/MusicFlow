import { styled } from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray_800};
  padding: 2rem 0;

  .header img {
    height: 2rem;
    margin: 0 1rem;
  }
`

export default {
  Header,
}

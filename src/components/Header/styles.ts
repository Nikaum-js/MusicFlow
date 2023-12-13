import { styled } from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 84%;
`

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem 0;
  cursor: default;

  .user-information {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: ${({ theme }) => theme.colors.gray_100};
    font-weight: ${({ theme }) => theme.fontsWeights.bold};
    font-size: ${({ theme }) => theme.fontsSize.large}rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_400};
    font-weight: ${({ theme }) => theme.fontsWeights.regular};
    font-size: ${({ theme }) => theme.fontsSize.newRegular}rem;
  }

  img {
    width: 3rem;
    height: 3rem;
    margin-left: 30px;

    border-radius: 9999px;

    margin-right: 14px;
    border: 2px solid ${({ theme }) => theme.colors.green_200};
  }
`

export default {
  Header,
  Content,
  Profile,
}

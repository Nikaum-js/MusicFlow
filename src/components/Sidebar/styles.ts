import { styled } from 'styled-components'

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  overflow: hidden;

  height: 300px;

  nav {
    display: flex;
    justify-content: center;

    margin-top: 40px;

    ul {
      li {
        list-style-type: disc;
        padding: 8px 0;

        a {
          font-size: ${({ theme }) => theme.fontsSize.medium}rem;
          font-weight: ${({ theme }) => theme.fontsWeights.bold};
          color: ${({ theme }) => theme.colors.gray_300};
          transition: 0.2s;
        }

        :hover {
          opacity: 0.7;
          color: ${({ theme }) => theme.colors.green_300};
        }

        &::marker {
          font-size: 1.1rem;
          color: ${({ theme }) => theme.colors.green_200};
        }
      }
    }
  }
`

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};
  cursor: default;

  .user-information {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: ${({ theme }) => theme.colors.gray_100};
    font-weight: ${({ theme }) => theme.fontsWeights.bold};
    font-size: ${({ theme }) => theme.fontsSize.medium}rem;
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
  Sidebar,
  Profile,
}

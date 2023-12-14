import { styled } from 'styled-components'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontsSize.title}rem;
    font-weight: ${({ theme }) => theme.fontsWeights.bold};

    span {
      color: ${({ theme }) => theme.colors.green_300};
    }
  }

  p {
    max-width: 260px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontsSize.medium}rem;
    color: ${({ theme }) => theme.colors.gray_100};
    margin: 12px;
    line-height: 24px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    width: 220px;
    height: 52px;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontsSize.newRegular}rem;
    font-weight: ${({ theme }) => theme.fontsWeights.bold};
    background-color: ${({ theme }) => theme.colors.green_200};
    text-decoration: none;

    transition: 0.6;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      margin-right: 12px;
    }
  }
`

export default {
  Container,
  Content,
}

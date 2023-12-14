import { styled } from 'styled-components'

const Container = styled.div`
  width: 160px;
  margin-top: 24px;

  .infos {
    strong {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontsSize.large}rem;
      font-weight: ${({ theme }) => theme.fontsWeights.bold};
    }

    p {
      color: ${({ theme }) => theme.colors.gray_200};
      font-size: ${({ theme }) => theme.fontsSize.medium}rem;
      font-weight: ${({ theme }) => theme.fontsWeights.medium};
    }
  }

  img {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 860px) {
    width: 130px;

    img {
      width: 130px;
      height: 130px;
    }
  }
`

const Content = styled.aside`
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray_200};
    font-size: ${({ theme }) => theme.fontsSize.large}rem;
    font-weight: ${({ theme }) => theme.fontsWeights.medium};

    margin-top: 8px;
  }
`

export default {
  Container,
  Content,
}

import { styled } from 'styled-components'

const Container = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
`

const Content = styled.aside`
  width: 84%;

  margin-bottom: 32px;

  .top-musics {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 48px;
      height: 48px;

      border-radius: 6px;
      background: #18181c;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontsSize.newLarge}rem;
    font-weight: ${({ theme }) => theme.fontsWeights.bold};
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray_200};
    font-size: ${({ theme }) => theme.fontsSize.large}rem;
    font-weight: ${({ theme }) => theme.fontsWeights.medium};

    margin-top: 8px;
  }

  @media (max-width: 480px) {
    h1 {
      width: 250px;
    }

    h3 {
      width: 250px;
    }
  }
`

const TopTracks = styled.div``

const TopTracksAndArtistCarousel = styled.div`
  display: flex;
`

const TopTracksAndArtistList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px 16px;
`

const TopArtist = styled.div``

export default {
  TopTracksAndArtistCarousel,
  TopTracksAndArtistList,
  TopArtist,
  TopTracks,
  Container,
  Content,
}

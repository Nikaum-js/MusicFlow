const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:5173/home'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

const ClientId = 'b624d7f6268541b0b60b6918e6c73fcf'

export const loginURL = `${authEndpoint}?client_id=${ClientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`

export const getTokenFromUrl = (): Record<string, string> => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: Record<string, string>, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}

const token =
  'BQDy9yX1w7OOkbBLQnopEZaBfhlp5YA3msFLYmPP26tckpnJiZPkhzuchOpXeZWPgRX9rrcn89vb5yVo2A7R2oTXnFmosliWaFEvqtCL1eUSSXO8hXKxF1c2VYi8mIqLkPNuR7rJBy2sQuZdLalqp6ArAu7zqMj_hQtGIRcOoXBVNerRPP_o8EKBPqgn7IsgQcXzCY_Fp9yB1tCricwUZvzc3ngL9T7FRep-Wmj08cTRuc_sDaZa5flhLYETSoQ'
export async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  })
  return await res.json()
}

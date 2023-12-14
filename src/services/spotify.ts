const apiUrl = import.meta.env.VITE_AMBIENT_DEVELOPMENT
let redirectUri = ''

if (apiUrl === 'development') {
  redirectUri = 'http://localhost:5173/app'
} else {
  redirectUri = 'http://music-flow/app '
}

const authEndpoint = 'https://accounts.spotify.com/authorize'

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

export async function fetchWebApi(
  endpoint: string,
  method: string,
  body: any,
  token: string,
) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  })
  return await res.json()
}

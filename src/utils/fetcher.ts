export const fetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`, {
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  }).then((res) => res.json())

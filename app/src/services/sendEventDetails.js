export const sendEventDetails = async ({ eventDetails }) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/meeting`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventDetails)
  })
    .then(res => {
      if (res.ok) return res.json()

      throw new Error('Algo salio mal')
    })
    .then(
      data => console.log(data)
    )
    .catch(error => {
      console.log(error)
    })
}

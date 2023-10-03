import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
export async function getAllAliens() {
  const data = await fetch(`${endpoint}/aliens`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
export async function getAllVillains() {
  const data = await fetch(`${endpoint}/villains`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
export async function getAllgallery() {
  const data = await fetch(`${endpoint}/gallery`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

// export async function getCharacterBySlug(slug) {
//   const data = await fetch(`${endpoint}/characters/${slug}`)

//   if (!data.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return data.json()
// }
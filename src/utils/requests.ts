import { api } from './constants'
import type { PasteIn } from '../types'

// POST
export async function createPaste(paste: PasteIn): Promise<{ slug?: string; error?: string }> {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paste)
    })
    if (!response.ok) {
      const err = await response.json().catch(() => ({ message: response.statusText }))
      return { error: err.message || 'Error creating paste' }
    }
    const result = await response.json()
    return { slug: result.slug }
  } catch (e) {
    console.error(e)
    return { error: 'Network error' }
  }
}

// GET
export async function getPaste(slug: string): Promise<{ paste?: PasteIn; error?: string }> {
  try {
    const response = await fetch(`${api}/${slug}`)
    if (!response.ok) {
      const err = await response.json().catch(() => ({ message: response.statusText }))
      console.error(err)
      return { error: err.message || 'Error fetching paste' }
    }
    const paste = await response.json()
    return { paste }
  } catch (e) {
    console.error(e)
    return { error: 'Network error' }
  }
}

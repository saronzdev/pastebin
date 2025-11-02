export type PasteIn = {
  body: string
  author: string | null
  exp: string
}
type Paste = {
  slug: string
  createdAt: number
}

export type PasteOut = PasteIn & Paste

export type StateCopy = 'Copy' | 'Copied!'

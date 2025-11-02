export type PasteIn = {
  body: string
  author: string | null
  exp: string
}
type Paste = {
  slug: string
  views: number
  createdAt: number
}

export type PasteOut = PasteIn & Paste

export type StateCopy = 'Copy' | 'Copied!'

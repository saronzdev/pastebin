import { useState } from 'preact/hooks'
import type { PasteOut, StateCopy } from '../types'

interface Props {
  paste: PasteOut | null
}

export function PasteCard({ paste }: Props) {
  const [state, setState] = useState<StateCopy>('Copy')

  function handleClick() {
    if (state === 'Copy') {
      navigator.clipboard.writeText('Example paste content')
      setState('Copied!')
    } else {
      setState('Copy')
    }
  }
  return (
    <div className="p-4 m-4 bg-violet-500 rounded-md shadow-md">
      <h2 className="text-xl text-white font-semibold">{paste?.author}</h2>
      <p className="text-gray-100">{paste?.body}</p>
      <p className="text-gray-300">{paste ? new Date(paste.createdAt).toLocaleString() : ''}</p>
      <button onClick={handleClick} className="mt-2 py-1 w-20 text-violet-500 rounded-sm bg-gray-50 cursor-pointer">
        {state}
      </button>
    </div>
  )
}

import { useState } from 'preact/hooks'
import type { PasteOut, StateCopy } from '../types'
import eye from '../assets/eye.svg'

interface Props {
  paste: PasteOut | null
}

export function PasteCard({ paste }: Props) {
  const [state, setState] = useState<StateCopy>('Copy')

  function handleClick() {
    if (state === 'Copy') {
      navigator.clipboard.writeText('Example paste content')
      setState('Copied!')
      setTimeout(() => {
        setState('Copy')
      }, 2000)
    } else {
      setState('Copy')
    }
  }
  return (
    <div className="p-4 m-4 flex flex-col justify-center items-center bg-violet-500 rounded-md shadow-md">
      <h2 className="text-xl text-white font-semibold">{paste?.author}</h2>
      <p className="text-gray-100">{paste?.body}</p>
      <div className="flex flex-col items-center justify-between mt-2">
        <p className="text-gray-300">{paste ? new Date(paste.createdAt).toLocaleString() : ''}</p>
        {paste && (
          <div className="m-2 flex items-center gap-1 text-gray-200">
            <img src={eye} alt="Views" className="w-4 h-4" />
            <span className="text-sm">{paste.views}</span>
          </div>
        )}
      </div>
      <button onClick={handleClick} className="mt-2 py-1 w-20 text-violet-500 rounded-sm bg-gray-50 cursor-pointer">
        {state}
      </button>
    </div>
  )
}

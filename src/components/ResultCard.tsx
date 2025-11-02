import { useState } from 'preact/hooks'
import type { StateCopy } from '../types'
import { toast } from 'sonner'

interface Props {
  slug: string
}

export function ResultCard({ slug }: Props) {
  const [state, setState] = useState<StateCopy>('Copy')

  function handleClick() {
    if (state === 'Copy') {
      navigator.clipboard.writeText(slug)
      setState('Copied!')
      setTimeout(() => {
        setState('Copy')
      }, 2000)
      toast.success('Copied to clipboard')
    } else {
      setState('Copy')
    }
  }

  const link = `https://pastebin.saronztools.me/${slug}`

  return (
    <div className="m-8 p-4 w-72 text-center text-lg text-gray-50 bg-violet-500 flex flex-col justify-center items-center rounded-lg shadow-xl">
      <h2 className="m-2 text-xl text-center text-white">Created Successfully!</h2>
      <p>
        ID: <strong>{slug}</strong>
      </p>
      <a href={link} target={'_blank'} className="text-gray-700 underline">
        <strong>Link</strong>
      </a>
      <button onClick={handleClick} className="mt-2 py-1 w-20 text-violet-500 rounded-sm bg-gray-50 cursor-pointer">
        {state}
      </button>
    </div>
  )
}

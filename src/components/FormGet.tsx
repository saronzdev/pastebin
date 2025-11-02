import { PasteCard } from './PasteCard'
import { useState } from 'preact/hooks'
import { getPaste } from '../utils/requests'
import { toast } from 'sonner'
import type { PasteOut } from '../types'

export function GetForm() {
  const [loading, setLoading] = useState(false)
  const [paste, setPaste] = useState<PasteOut | null>(null)

  async function handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const slug = formData.get('slug') as string
    setLoading(true)
    const { paste: retrievedPaste, error } = await getPaste(slug)
    setLoading(false)
    if (error) {
      toast.error(error)
      return
    }
    if (retrievedPaste) {
      setPaste(retrievedPaste as PasteOut)
    }
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-72 sm:w-80 md:w-96 p-4 text-gray-600 bg-gray-50 rounded-xl shadow-xl flex flex-col justify-center items-center"
        >
          <h1 className="m-2 text-2xl">Get paste</h1>
          <input
            type="text"
            name="slug"
            placeholder="Enter paste code"
            className="p-2 m-1 w-full border border-gray-600 rounded-sm focus:outline-0 focus:border-2 focus:border-gray-800"
          />
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Loading...' : 'Get Paste'}
          </button>
        </form>
      </div>
      <PasteCard paste={paste} />
    </section>
  )
}

import { useState } from 'preact/hooks'
import { validatePaste } from '../utils/validations'
import { createPaste } from '../utils/requests'
import { ResultCard } from './ResultCard'
import { toast } from 'sonner'

export function PostForm() {
  const [slug, setSlug] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const author = (formData.get('author') as string) || ''
    const body = (formData.get('body') as string) || ''
    const exp = (formData.get('exp') as string) || ''

    const data = { author, body, exp }

    if (!validatePaste(data)) {
      toast.error('Invalid data')
      return
    }

    setLoading(true)
    const response = await createPaste(data)
    setLoading(false)

    if (!response) {
      toast.error('Unknown error')
      return
    }
    if (response.error) {
      toast.error(response.error)
      return
    }

    setSlug(response.slug)
    toast.success('Paste created')
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-72 sm:w-80 md:w-96 p-4 text-gray-600 bg-gray-50 rounded-xl shadow-xl flex flex-col justify-center items-center"
        >
          <h1 className="m-2 text-2xl">Create new paste</h1>
          <input
            type="text"
            name="author"
            placeholder="Username (left empty for anonymous)"
            className="p-2 m-1 w-full border border-gray-600 rounded-sm focus:outline-0 focus:border-2 focus:border-gray-800"
          />
          <textarea
            name="body"
            id="body"
            cols={3}
            rows={5}
            placeholder="Write a note..."
            className="p-2 m-1 w-full border border-gray-600 rounded-sm focus:outline-0 focus:border-2 focus:border-gray-800"
          />
          <label htmlFor="exp" className="mt-2">
            Expiration Time
          </label>
          <select
            name="exp"
            id="exp"
            className="p-2 m-1 border border-gray-600 rounded-sm focus:outline-0 focus:border-2 focus:border-gray-800"
          >
            <option value="1h">1 Hour</option>
            <option value="1d">1 Day</option>
            <option value="7d">1 Week</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 mx-20 py-2 w-full text-gray-50 bg-violet-500 rounded-md ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
      {slug && <ResultCard slug={slug} />}
    </section>
  )
}

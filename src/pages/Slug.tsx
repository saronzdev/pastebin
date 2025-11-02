import { PasteCard } from '../components/PasteCard'
import { useState, useEffect } from 'preact/hooks'
import { getPasteBySlug, incrementViewsBySlug } from '../utils/requests'
import { useParams } from 'wouter'
import type { PasteOut } from '../types'

export function SlugPage() {
  const [paste, setPaste] = useState<PasteOut | null>(null)
  const { slug } = useParams()

  useEffect(() => {
    const getPaste = async () => {
      const { paste, error } = await getPasteBySlug(slug as string)
      if (error) {
        console.error(error)
        return
      }
      setPaste(paste as PasteOut)
    }

    async function incrementViews() {
      const result = await incrementViewsBySlug(slug as string)
      if (result) {
        console.error(result.error)
        return
      }
    }
    getPaste()
    incrementViews()
  }, [])

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <span className="max-w-80">
        <PasteCard paste={paste} />
      </span>
    </div>
  )
}

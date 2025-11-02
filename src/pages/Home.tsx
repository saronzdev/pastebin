import { Link } from 'wouter'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="p-4 text-6xl font-serif font-medium text-center">Pastebin</h1>
      <Link to="/new" className="p-4 bg-violet-500 text-white rounded-md">
        Create a new paste
      </Link>
      <Link to="/get" className="px-4 py-2 bg-gray-300 rounded-md">
        Get a paste with a code
      </Link>
    </div>
  )
}

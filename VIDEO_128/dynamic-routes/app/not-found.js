import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-white max-w-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

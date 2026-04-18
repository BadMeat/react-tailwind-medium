import { useLocation, useNavigate } from 'react-router-dom'

interface LocationState {
  title?: string
}

export default function Profile() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { title } = (state as LocationState) ?? {}

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🏍️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Rider Profile</h2>
        {title && (
          <p className="text-sm text-purple-600 font-medium mb-4">
            From: <span className="italic">"{title}"</span>
          </p>
        )}
        <p className="text-gray-500 text-sm">
          hulunh halang ula ula ukus yee
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

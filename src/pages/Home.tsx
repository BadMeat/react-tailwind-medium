import { useNavigate } from 'react-router-dom'

const title = 'Welcome di Medium Bike.override'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome di{' '}
          <span className="text-purple-600">Medium Bike</span>
          <span className="text-gray-400">.override</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Explore the world of medium bikes — curated articles, reviews, and stories.
        </p>
        <button
          onClick={() => navigate('/profile', { state: { title } })}
          className="mt-8 px-6 py-3 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go to Profile
        </button>
      </div>
    </div>
  )
}

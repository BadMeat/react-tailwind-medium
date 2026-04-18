import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-6">
      <span className="text-purple-600 font-bold text-lg">Medium Bike</span>
      <Link
        to="/"
        className={`text-sm font-medium ${pathname === '/' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
      >
        Home
      </Link>
      <Link
        to="/profile"
        className={`text-sm font-medium ${pathname === '/profile' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
      >
        Profile
      </Link>
    </nav>
  )
}

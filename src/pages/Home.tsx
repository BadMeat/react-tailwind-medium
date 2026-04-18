export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome di{" "}
          <span className="text-purple-600">Medium Bike</span>
          <span className="text-gray-400">.override</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Explore the world of medium bikes — curated articles, reviews, and stories.
        </p>
      </div>
    </div>
  );
}

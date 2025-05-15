const ResultPopup = ({ stats, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white/80 dark:bg-gray-900/60 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-white/20 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Your Typing Score
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-200 rounded-lg p-4">
            <p className="text-sm">WPM</p>
            <p className="text-xl font-semibold">{stats.wpm}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-200 rounded-lg p-4">
            <p className="text-sm">Accuracy</p>
            <p className="text-xl font-semibold">{stats.accuracy}%</p>
          </div>
          <div className="bg-red-100 dark:bg-red-800 text-red-900 dark:text-red-200 rounded-lg p-4">
            <p className="text-sm">Errors</p>
            <p className="text-xl font-semibold">{stats.errors}</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-800 text-purple-900 dark:text-purple-200 rounded-lg p-4">
            <p className="text-sm">Time</p>
            <p className="text-xl font-semibold">
              {Math.round(stats.duration)}s
            </p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="mt-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultPopup;

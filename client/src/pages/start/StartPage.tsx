export default function StartPage() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex-1 text-left">
        <h2 className="text-2xl font-semibold">Recommended for you</h2>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
          Read More
        </button>
      </div>

      <div className="flex-none">
        <img
          src="/start/Mountain-Face.jpg"
          alt="Mountain People"
          className="w-64 h-auto"
        />
      </div>
    </div>
  );
}

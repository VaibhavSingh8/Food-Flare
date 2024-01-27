const Shimmer = () => {
  return (
    <>
      {/* Filter Top restaurants - Skeleton */}
      <div className="m-4 p-2 flex">
        {/* Top Restaurants Button Skeleton */}
        <div className="bg-gray-300 animate-pulse h-10 w-40 rounded"></div>

        <div className="flex justify-center mx-auto">
          {/* Search Input Skeleton */}
          <div className="bg-gray-200 animate-pulse h-10 w-96 m-2 rounded"></div>

          {/* Clear Button Skeleton */}
          <div className="bg-gray-300 animate-pulse h-10 w-20 m-3 rounded"></div>
        </div>
      </div>

      {/* Restaurant cards - Skeleton */}
      <div className="restaurant-container grid grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="m-4 p-4 rounded overflow-hidden shadow-lg md:flex md:flex-col md:w-64 lg:w-72 animate-pulse">
            {/* Image Placeholder */}
            <div className="bg-gray-300 h-48 md:h-60 w-full rounded-lg mb-4"></div>
            <div className="md:ml-4 md:flex-grow mt-2">
              {/* Text Placeholders */}
              <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-2/3 mb-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default Shimmer;
import React from 'react';

const ItemsShimmer = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Shimmer for Restaurant Header */}
      <div className="space-y-3">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Shimmer for Categories */}
      <div className="space-y-6">
        {Array(3).fill(0).map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            <div className="space-y-3">
              {Array(2).fill(0).map((_, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="h-10 bg-gray-300 rounded w-12"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-300 rounded "></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsShimmer;

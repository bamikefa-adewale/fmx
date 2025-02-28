const ProductSkeleton = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg p-4">
      <div className="h-24 bg-gray-300 rounded-md mb-4"></div>{" "}
      {/* Reduced height */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default ProductSkeleton;

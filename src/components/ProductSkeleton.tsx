export const ProductSkeleton = () => {
  return (
    
    <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
      
      {/* 2. (Image Placeholder) */}
      <div className="w-full aspect-square bg-gray-200 rounded-3xl animate-pulse mb-6"></div>
      
      {/* 3. (Text Lines) */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2"></div>
      </div>

      {/* 4.  (Button & Price) */}
      <div className="flex justify-between items-center mt-8">
        <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
};
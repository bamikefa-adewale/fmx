import { Skeleton } from "./ui/skeleton";

export const OrderSkeleton = () => {
  return (
    <div className="mb-4 p-4 border border-[#E6E8E6] rounded-xl shadow animate-pulse">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Skeleton className="h-[200px] w-[200px] rounded-lg" />
          <div>
            <Skeleton className="h-4 w-40 mb-2 rounded" />
            <Skeleton className="h-6 w-20 mb-2 rounded" />
            <Skeleton className="h-4 w-32 mb-2 rounded" />
          </div>
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2 rounded" />
          <Skeleton className="h-4 w-28 mb-2 rounded" />
          <Skeleton className="h-4 w-36 mb-2 rounded" />
        </div>
      </div>
    </div>
  );
};

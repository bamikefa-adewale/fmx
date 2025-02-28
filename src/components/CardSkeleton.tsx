import React from 'react'
import { Skeleton } from './ui/skeleton'

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3  bg-gray-200 animate-pulse rounded-lg p-4">
      <Skeleton className="h-[132px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-[30%]" />
        <Skeleton className="h-4 w-[40%]" />
      </div>
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-6 w-[50%]" />
      <Skeleton className="h-6 w-[40%]" />
      <div className="space-y-2">
        <Skeleton className="h-[48px] w-full rounded-lg" />
        <Skeleton className="h-[48px] w-full rounded-lg" />
      </div>
      <Skeleton className="h-4 w-[70%] mt-3" />
    </div>
  );
}

export default CardSkeleton
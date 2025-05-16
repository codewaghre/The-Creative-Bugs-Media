import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonLoader = () => (
    <div className="sketeton-container content-container">
        {/* <Skeleton className="h-10 w-1/2 bg-red-200" />
        <Skeleton className="h-4 w-full bg-red-200" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-64 w-full" /> */}

        <div className="s-heading-container">
            <Skeleton className="s-heading" />
        </div>

        <div className="s-connect-container">
            <Skeleton className="s-box-one" />
            <Skeleton className="s-box-two" />
        </div>
    </div>
);

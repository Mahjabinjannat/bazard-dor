export default function Loading() {
  return (
    <main
      className="container mx-auto min-h-[600px] px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16"
      role="status"
      aria-label="পণ্যের বিস্তারিত তথ্য লোড হচ্ছে"
      aria-busy="true"
    >
      <div className="animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="mt-5 flex items-center gap-2 sm:mt-6">
          <div className="h-4 w-10 rounded bg-gray-200" />
          <div className="h-3 w-2 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-3 w-2 rounded bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>

        {/* Product details header */}
        <div className="my-6 flex flex-col gap-5 rounded-[16px] border border-gray-300 bg-[#FAF9F6] p-4 sm:my-8 sm:rounded-[20px] sm:p-6 md:flex-row md:items-center md:justify-between lg:my-10 lg:p-8">
          {/* Product information */}
          <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
            {/* Product icon */}
            <div className="h-[55px] w-[55px] shrink-0 rounded-[10px] bg-gray-200 sm:h-[70px] sm:w-[70px]" />

            <div className="min-w-0 flex-1 space-y-3">
              {/* Product name */}
              <div className="h-6 w-36 max-w-full rounded-md bg-gray-200 sm:h-7 sm:w-48" />

              {/* Unit and category */}
              <div className="h-4 w-44 max-w-full rounded bg-gray-200 sm:w-56" />

              {/* Price change description */}
              <div className="h-3 w-52 max-w-full rounded bg-gray-200 sm:w-72" />
            </div>
          </div>

          {/* Today's price */}
          <div className="flex w-full items-center justify-between gap-3 rounded-[12px] bg-gray-200 px-4 py-3 md:w-auto md:min-w-[170px] md:flex-col md:justify-center md:px-6 md:text-center">
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-gray-300" />
              <div className="h-7 w-16 rounded bg-gray-300" />
              <div className="h-3 w-24 rounded bg-gray-300" />
            </div>

            {/* Price change indicator */}
            <div className="h-5 w-16 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Price summary heading */}
        <div className="my-5 h-6 w-40 rounded-md bg-gray-200 sm:my-7 sm:w-48 lg:my-8" />

        {/* Price summary cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`space-y-3 rounded-[10px] border border-gray-300 bg-[#FAF9F6] px-5 py-4 sm:px-6 sm:py-5 lg:px-7 ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Summary label */}
              <div className="h-3 w-24 rounded bg-gray-200" />

              {/* Price */}
              <div className="flex items-center gap-2">
                <div className="h-7 w-20 rounded bg-gray-200" />
                <div className="h-3 w-10 rounded bg-gray-200" />
              </div>

              {/* Description */}
              <div className="h-3 w-36 max-w-full rounded bg-gray-200" />
            </div>
          ))}
        </div>

        <div className="mb-4 mt-8 h-6 w-52 max-w-full rounded-md bg-gray-200 sm:mb-5 sm:mt-10 sm:w-60" />

        {/* Market-based price table */}
        <div className="mb-6 overflow-hidden rounded-[14px] border border-[#DFE7DF] bg-[#FAF9F6] sm:mb-8 sm:rounded-[20px]">
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
             
              <div className="grid grid-cols-5 gap-4 border-b border-[#E1E8E1] px-3 py-4 sm:px-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-4 w-full max-w-24 rounded bg-gray-200"
                  />
                ))}
              </div>

              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-5 gap-4 border-b border-[#E1E8E1] px-3 py-4 last:border-b-0 sm:px-5 ${
                    rowIndex % 2 === 0 ? "bg-[#FAF9F6]" : "bg-[#F0F5F0]"
                  }`}
                >
                  {Array.from({ length: 5 }).map((_, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="h-4 w-full max-w-24 rounded bg-gray-200"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-10 w-40 rounded-[10px] bg-gray-200" />
      </div>

      <span className="sr-only">
        পণ্যের বিস্তারিত তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন।
      </span>
    </main>
  );
}

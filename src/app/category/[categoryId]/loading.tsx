export default function Loading() {
  return (
    <main
      className="container mx-auto min-h-[500px] px-4 pb-10 sm:min-h-[600px] sm:px-6 lg:px-8"
      role="status"
      aria-label="ক্যাটাগরির পণ্য লোড হচ্ছে"
      aria-busy="true"
    >
      <div className="animate-pulse">
        <div className="my-5 flex items-center gap-3 rounded-[12px] border border-gray-200 bg-[#FAF9F6] px-4 py-4 sm:my-7 sm:gap-4 sm:rounded-[15px] sm:px-5 sm:py-5 lg:my-8 lg:gap-5">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-200 sm:h-12 sm:w-12" />

          <div className="min-w-0 flex-1 space-y-3">
            <div className="h-6 w-32 rounded-md bg-gray-200 sm:h-7 sm:w-44" />
            <div className="h-4 w-48 max-w-full rounded-md bg-gray-200 sm:w-64" />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
          <div className="space-y-2">
            <div className="h-5 w-32 rounded-md bg-gray-200 sm:w-44" />
            <div className="h-3 w-24 rounded-md bg-gray-200 sm:w-32" />
          </div>

          <div className="h-9 w-28 rounded-lg bg-gray-200 sm:h-10 sm:w-36" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-[20px] border border-gray-300 bg-[#FAF9F6] px-4 py-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-[45px] w-[45px] shrink-0 rounded-[7px] bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-28 max-w-full rounded bg-gray-200" />
                  <div className="h-3 w-20 rounded bg-gray-200" />
                </div>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div className="space-y-2">
                  <div className="h-3 w-20 rounded bg-gray-200" />

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-16 rounded bg-gray-200" />
                    <div className="h-3 w-8 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">
        ক্যাটাগরির পণ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন।
      </span>
    </main>
  );
}
